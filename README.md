# Website Company Profile — PT. Grindak Artha Prima

Website statis (HTML/CSS/JS murni, tanpa build tool) yang dibuat berdasarkan
isi Company Profile perusahaan. Semua bagian dibuat mudah dikustomisasi.

## Cara menjalankan
Cukup buka `index.html` di browser, atau upload seluruh folder ini ke hosting
statis mana pun (Netlify, Vercel, GitHub Pages, cPanel, dll).

## Struktur folder
```
site/
├── index.html        # struktur halaman (biasanya tidak perlu diedit)
├── css/style.css      # semua warna, font, spacing → lewat CSS variables
├── js/script.js       # SEMUA TEKS & KONTEN ada di sini (siteConfig)
├── assets/            # logo & foto (dari Company Profile asli)
└── README.md
```

## Yang paling sering Anda edit

### 1. Ganti teks, layanan, portofolio, kontak
Buka `js/script.js`, edit objek `siteConfig` di bagian paling atas file.
Semua judul, paragraf, daftar layanan/komitmen/produk, item portofolio,
dan info kontak ada di situ — tidak perlu menyentuh HTML.

### 2. Ganti warna & font
Buka `css/style.css`, edit nilai di dalam `:root { ... }` pada baris paling
atas file, misalnya:
```css
--navy:  #1B3A5C;   /* warna utama brand */
--ember: #C23B2E;   /* warna aksen */
--font-display: 'Oswald', sans-serif;  /* font judul */
--font-body: 'Source Sans 3', sans-serif; /* font teks */
```

### 3. Ganti logo & foto
Ganti file di dalam folder `assets/` dengan file Anda sendiri, pastikan
namanya sama persis (atau ubah juga path-nya di `js/script.js`).

### 4. Sambungkan form kontak ke email/CRM sungguhan
Form kontak saat ini hanya demo (tidak mengirim email). Buka
`js/script.js`, cari fungsi `setupContactForm()`, lalu ganti isinya dengan
pemanggilan API/endpoint Anda sendiri (mis. `fetch('/api/contact-us', ...)`
seperti pada contoh di prompt markdown yang menyertai file ini).

## Animasi & fitur kosmetik yang sudah disiapkan
- **Hero load-in** — judul, tagline, tombol muncul bertahap saat halaman dibuka (sekali saja, tidak diulang).
- **Parallax halus** — foto di hero bergeser tipis mengikuti gerakan mouse.
- **Reveal on scroll** — teks & kartu (layanan, komitmen, produk, portofolio) muncul fade-up saat masuk layar.
- **Header mengecil + bayangan** saat halaman discroll, dan **menu aktif** ikut menyorot section yang sedang dilihat.
- **Statistik otomatis** di bawah hero (jumlah layanan/komitmen/produk/portofolio) dengan animasi hitung naik — angkanya otomatis berubah kalau Anda menambah/mengurangi item di `siteConfig`.
- **Lightbox foto portofolio** — klik foto proyek untuk melihat versi lebih besar (Esc atau klik luar untuk menutup).
- **Tombol "kembali ke atas"** muncul setelah scroll ke bawah.
- **Tombol kirim form** menampilkan spinner loading singkat sebelum pesan status muncul.
- Semua animasi otomatis dimatikan untuk pengguna yang mengaktifkan "reduce motion" di sistem operasinya (aksesibilitas).

Semua ini murni CSS + JavaScript vanilla (tidak ada library animasi eksternal), jadi ringan dan mudah dimodifikasi — cari komentar `/* --- ... --- */` di `css/style.css` dan fungsi `setup...()` di `js/script.js`.

## Galeri foto per proyek (portofolio)
Tiap card portofolio sekarang bisa memuat BANYAK foto (bukan cuma 1). Saat card
diklik, muncul lightbox dengan slider — bisa digeser lewat tombol panah, titik
(dots) di bawah, tombol panah kiri/kanan keyboard, atau swipe di HP.

Untuk menambah/mengganti foto sebuah proyek, edit array `images` pada item
terkait di `siteConfig.portfolio` (di `js/script.js`), lalu taruh file fotonya
di `assets/portfolio/<nama-folder>/`. Urutan array = urutan slide.

## Catatan
Foto-foto di folder `assets/` diambil dari file Company Profile (PDF) yang
Anda unggah, sudah dikompres agar ringan untuk web. Ganti dengan foto resolusi
tinggi asli Anda bila tersedia.
