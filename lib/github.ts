export interface GitCommit {
  sha: string;
  shortSha: string;
  message: string;
  /** First line of commit message only */
  title: string;
  date: string;
  /** Human-readable relative date, e.g. "3 hari lalu" */
  relativeDate: string;
  url: string;
}

const REPO = "mhanafi09051998/superpromptdeveloper";
const API_URL = `https://api.github.com/repos/${REPO}/commits?per_page=15&sha=main`;

/** Format ISO date string to Indonesian relative time */
function toRelativeDate(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const mins = Math.floor(diff / 60_000);
  const hours = Math.floor(diff / 3_600_000);
  const days = Math.floor(diff / 86_400_000);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (mins < 1) return "baru saja";
  if (mins < 60) return `${mins} menit lalu`;
  if (hours < 24) return `${hours} jam lalu`;
  if (days < 7) return `${days} hari lalu`;
  if (weeks < 5) return `${weeks} minggu lalu`;
  return `${months} bulan lalu`;
}

/** Format ISO date to short Indonesian date string */
function toShortDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Fetch recent commits from GitHub public API.
 * Called only at build time (Server Component) — no runtime rate limit risk.
 * Returns empty array on failure so the UI degrades gracefully.
 */
export async function fetchCommits(): Promise<GitCommit[]> {
  try {
    const res = await fetch(API_URL, {
      headers: { Accept: "application/vnd.github.v3+json" },
      // next: { revalidate: 3600 } // uncomment if using ISR instead of static
    });

    if (!res.ok) return [];

    const data = await res.json() as Array<{
      sha: string;
      html_url: string;
      commit: {
        message: string;
        author: { date: string };
      };
    }>;

    return data.map((c) => {
      const isoDate = c.commit.author.date;
      const fullMessage = c.commit.message.trim();
      const title = fullMessage.split("\n")[0];

      return {
        sha: c.sha,
        shortSha: c.sha.slice(0, 7),
        message: fullMessage,
        title,
        date: toShortDate(isoDate),
        relativeDate: toRelativeDate(isoDate),
        url: c.html_url,
      };
    });
  } catch {
    return [];
  }
}
