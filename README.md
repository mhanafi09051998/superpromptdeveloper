# Claude Superprompts untuk Developer

> 10 superprompt production-grade yang mengubah Claude dari sekadar chatbot menjadi senior engineer sesuai kebutuhan proyekmu.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![Lucide React](https://img.shields.io/badge/Lucide-React-f97316?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## Apa ini?

Kebanyakan developer memakai Claude seperti Stack Overflow yang bisa ngobrol. Padahal Claude bisa jauh lebih powerful kalau diberi **konteks peran yang tepat sebelum mulai bekerja**.

Website ini mengumpulkan **10 superprompt** yang dirancang untuk mengaktifkan mode berpikir spesifik di Claude — bukan sekadar "jawab pertanyaanku", tapi "bertindaklah sebagai senior engineer yang bertanggung jawab atas sistem ini."

**Salin → Tempel ke Claude → Sertakan kode/konteks proyekmu → Dapatkan output berkualitas senior.**

---

## Daftar Superprompt

| # | Nama | Kegunaan |
|---|------|----------|
| 01 | **Tim Engineering Startup Lengkap** | Rancang & bangun MVP dari nol |
| 02 | **Audit Codebase Senior Engineer** | Temukan technical debt & risiko tersembunyi |
| 03 | **Debugging Engineer Level Produksi** | Selesaikan bug produksi dengan analisis root cause |
| 04 | **Engineer Optimasi Performa** | Hunting bottleneck, memory leak, dan operasi mahal |
| 05 | **Rebuild Clean Architecture** | Refactor codebase berantakan tanpa ubah behavior |
| 06 | **Arsitek Backend Startup** | Desain sistem backend scalable layer-by-layer |
| 07 | **Senior Frontend Engineer** | UI components production-grade dengan semua edge case |
| 08 | **Mode Tech Lead AI** | Thinking strategis sebelum menulis satu baris kode |
| 09 | **Audit Keamanan Produksi** | Security review berbasis OWASP dengan severity classification |
| 10 | **Senior DevOps & Deployment** | CI/CD, observability, dan infrastructure as code |

---

## Stack Teknologi

```
Next.js 16 (App Router)   — Framework
TypeScript 5              — Type safety
Tailwind CSS 4            — Styling
Lucide React              — Icons
next-themes               — Dark / Light / System mode
```

Tidak ada backend. Tidak ada database. Tidak ada auth. Deploy static ke mana saja.

---

## Menjalankan Lokal

```bash
git clone https://github.com/mhanafi09051998/superpromptdeveloper.git
cd superpromptdeveloper
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## Deploy ke Netlify

1. Fork atau clone repo ini
2. Buka [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Pilih repo ini, lalu set:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. Klik **Deploy site**

Netlify akan otomatis mendeteksi Next.js dan menggunakan `@netlify/plugin-nextjs`.

---

## Struktur Proyek

```
app/
├── globals.css           # CSS variables, dark/light theme, focus-visible
├── layout.tsx            # Root layout + ThemeProvider
└── page.tsx              # Hero, cara pakai, footer

components/
├── PromptCard.tsx        # Card dengan copy, expand, dan error state
├── PromptGrid.tsx        # Grid + search + filter
├── ThemeProvider.tsx     # next-themes wrapper
├── ThemeToggle.tsx       # Toggle terang/gelap/sistem
└── Toast.tsx             # Notifikasi copy berhasil

lib/
├── types.ts              # FilterKey, Prompt interface
├── filters.ts            # Array filter kategori
├── prompts.ts            # Aggregator — re-export semua prompt
└── data/
    ├── prompt-01.ts      # Full-Stack MVP
    ├── prompt-02.ts      # Code Audit
    ├── prompt-03.ts      # Debugging
    ├── prompt-04.ts      # Performance
    ├── prompt-05.ts      # Clean Architecture
    ├── prompt-06.ts      # Backend Systems
    ├── prompt-07.ts      # Frontend Engineer
    ├── prompt-08.ts      # Tech Lead
    ├── prompt-09.ts      # Security Audit
    └── prompt-10.ts      # DevOps
```

Batas 300 baris per file — setiap file punya satu tanggung jawab.

---

## Menambah Prompt Baru

1. Buat `lib/data/prompt-11.ts` mengikuti struktur yang ada
2. Import dan tambahkan ke array di `lib/prompts.ts`
3. Jika perlu kategori baru: tambahkan ke `FilterKey` di `lib/types.ts` dan `lib/filters.ts`

---

## Fitur

- Mode terang / gelap / sistem (mengikuti preferensi OS secara default)
- Search real-time berdasarkan judul, tag, atau deskripsi
- Filter per kategori
- Expand / collapse prompt dengan animasi CSS grid row
- Copy ke clipboard dengan fallback `execCommand` untuk HTTP / browser lama
- Error state jika clipboard gagal
- Focus-visible ring — fully keyboard accessible
- ARIA compliant — screen reader friendly
- Responsive mobile 320px hingga desktop 1280px+

---

## Kontribusi

Pull request terbuka. Untuk perubahan besar, buka issue dulu.

Setiap prompt yang ditambahkan harus:
- Punya persona yang jelas (`Act like a senior X`)
- Punya constraint eksplisit (apa yang TIDAK boleh dilakukan)
- Punya output format terstruktur (deliverables konkret)
- Sudah diuji langsung di Claude

---

## Lisensi

MIT — bebas digunakan, dimodifikasi, dan dibagikan.

---

Dikurasi dari **@itsaiguide** · Dibangun dengan Claude
