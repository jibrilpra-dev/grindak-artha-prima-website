/* ==========================================================================
   PT. GRINDAK ARTHA PRIMA — Content Config
   -------------------------------------------------------------------------
   Semua teks, daftar layanan, komitmen, produk, portofolio dan info kontak
   ada di satu objek "siteConfig" di bawah ini. Untuk mengganti isi website
   ke perusahaan/brand lain, Anda HANYA perlu mengedit objek ini —
   tidak perlu menyentuh HTML/CSS. Warna & font dikustomisasi lewat CSS
   variables di bagian atas css/style.css.
   ========================================================================== */

const siteConfig = {
  brand: {
    name: "PT. Grindak Artha Prima",
    tagline: "Design & Builder",
  },

  hero: {
    title: "PT. GRINDAK<br>ARTHA PRIMA",
    tagline: "Design &amp; Builder — Contractor &amp; Developer",
    desc: "Perencanaan, konstruksi (steel &amp; concrete), interior &amp; exterior, hingga survey — untuk kebutuhan pembangunan onshore dan offshore.",
  },

  about: {
    text: `Dalam melaksanakan pembangunan, tidak semata-mata mencari keuntungan, tetapi
      mengedepankan kepuasan bagi klien atas kualitas bangunan, efisiensi biaya, ketepatan
      waktu, dan perawatan purna jual. Dengan didukung sumber daya manusia yang berpengalaman
      dan berkualitas, jajaran management yang solid menjadikan PT. Grindak Artha Prima siap
      bersaing dan berkompetisi, yang akhirnya menjadi pilihan terbaik bagi konsumen.`,
    scope: ["Perencanaan", "Konstruksi (Steel & Concrete)", "Interior & Exterior", "Survey"],
  },

  visi: `Menjadi perusahaan jasa perencanaan, <em>steel structure &amp; concrete</em> yang unggul dan berkualitas.`,

  misi: [
    "Memenuhi kebutuhan masyarakat dan institusi akan perumahan dan jasa pembangunan lainnya",
    "Selalu melakukan perubahan sesuai dengan nilai-nilai perkembangan pembangunan di dunia modern",
    "Memberikan kepuasan kepada klien dengan standar kualitas tinggi",
    "Menjadi mitra pembangunan nasional dan sekaligus meningkatkan kesejahteraan masyarakat melalui penyediaan lapangan kerja",
  ],

  services: [
    {
      title: "Perencanaan",
      desc: "Studi kelayakan dan pengumpulan kebutuhan berdasarkan survey lokasi dan konsultasi klien, dituangkan ke gambar pra-rencana, sketsa desain, hingga gambar kerja detail struktur & arsitektur.",
    },
    {
      title: "Konstruksi",
      desc: "Pelaksanaan pekerjaan berdasarkan gambar kerja, RKS, spektek, dan RAB yang disepakati bersama — dengan manajemen mutu, efisiensi waktu dan biaya demi kepuasan klien.",
    },
    {
      title: "Renovasi",
      desc: "Perbaikan struktural dan arsitektural sesuai kebutuhan dan kemampuan keuangan klien, mengubah tampilan lama menjadi lebih baru dan modern.",
    },
    {
      title: "Interior",
      desc: "Penuangan ide dan gagasan untuk perubahan suasana bagian dalam bangunan (rumah, kantor, dll.) dengan memperhatikan fungsi ruangan dan citra seni.",
    },
    {
      title: "Landscape",
      desc: "Arsitektur lingkungan luar bangunan — rumah, kantor, ruang terbuka umum, hingga pertamanan kota — dengan citra alami, hijau, teduh dan nyaman.",
    },
    {
      title: "Konsultan Pengawas",
      desc: "Pengawasan pembangunan dan pelaksanaan konstruksi, memperhatikan metode kerja, teknis, spesifikasi bahan, serta pengendalian waktu dan biaya.",
    },
  ],

  commitments: [
    { title: "Profesionalitas", desc: "Profesionalitas dalam kerja sebagai jaminan bagi integritas perusahaan." },
    { title: "Mutu", desc: "Menempatkan jaminan mutu dalam setiap karya dan kepuasan klien sebagai orientasi utama." },
    { title: "Efisiensi", desc: "Menerapkan manajemen mutu serta pengendalian waktu dan biaya secara efisien." },
    { title: "Inovasi", desc: "Terus berinovasi dengan kreativitas dan teknologi demi karya yang sesuai tuntutan zaman." },
    { title: "Kearifan Lokal & Tradisional", desc: "Menjaga nilai-nilai kearifan lokal dan tradisional warisan masa lalu." },
    { title: "Ramah Lingkungan", desc: "Membangun tanpa mengabaikan keramahan lingkungan demi masa depan generasi mendatang." },
  ],

  products: [
    "Structure Steel & Concrete",
    "Konsultan Pengawasan",
    "Positioning Survey",
    "Re-Design",
    "Interior & Exterior",
    "Jasa Sewa Onshore & Offshore",
  ],

  /* SERTIFIKASI — tambahkan sesuai kebutuhan Anda */
  certifications: [
    { icon: "🏆", name: "ISO 9001:2015", desc: "Manajemen Mutu" },
    { icon: "🌍", name: "ISO 14001:2015", desc: "Manajemen Lingkungan" },
    { icon: "⚠️", name: "ISO 45001:2018", desc: "Keselamatan & Kesehatan Kerja" },
    { icon: "🛡️", name: "BOSIET / OPITO", desc: "Sertifikasi Offshore" },
    { icon: "📋", name: "TKDN", desc: "Tingkat Komponen Dalam Negeri" },
    { icon: "✓", name: "Approved Contractor", desc: "Sertifikasi Klien Utama" },
  ],

  /* WHATSAPP — ganti dengan nomor Anda (format internasional: +62 812...) */
  contact: {
    heading: "Mari diskusikan proyek Anda.",
    address: "Griya Loka BSD, Jl. Melinjo No.11 Blok C3, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan",
    email: "grindakarthaprima.pt@gmail.com",
    fax: "(021) 87782019",
    whatsapp: "+62 812 9999 8888",  /* GANTI DENGAN NOMOR WHATSAPP ANDA */
  },

  /* GOOGLE REVIEWS — jika punya Google Business Profile, embed di section review */
  googleReviews: {
    rating: "4.8",
    totalReviews: "48+",
    profileUrl: "https://www.google.com/search?q=PT+Grindak+Artha+Prima",
  },

  footer: {
    note: "Contractor & Developer",
  },
};

/* ==========================================================================
   RENDERER — tidak perlu diedit untuk kustomisasi konten biasa
   ========================================================================== */
function renderSite(cfg) {
  document.getElementById("brand-name").textContent = cfg.brand.name;
  document.getElementById("brand-tagline").textContent = cfg.brand.tagline;
  document.getElementById("footer-name").textContent = cfg.brand.name;

  document.getElementById("hero-title").innerHTML = cfg.hero.title;
  document.getElementById("hero-tagline").innerHTML = cfg.hero.tagline;
  document.getElementById("hero-desc").innerHTML = cfg.hero.desc;

  document.getElementById("about-text").textContent = cfg.about.text;
  document.getElementById("scope-tags").innerHTML = cfg.about.scope
    .map((s) => `<li>${s}</li>`).join("");

  document.getElementById("visi-text").innerHTML = `&ldquo;${cfg.visi}&rdquo;`;
  document.getElementById("misi-list").innerHTML = cfg.misi
    .map((m) => `<li>${m}</li>`).join("");

  document.getElementById("service-grid").innerHTML = cfg.services
    .map((s) => `<div class="service-card"><h3>${s.title}</h3><p>${s.desc}</p></div>`)
    .join("");

  document.getElementById("commit-grid").innerHTML = cfg.commitments
    .map((c) => `<div class="commit-card"><h3>${c.title}</h3><p>${c.desc}</p></div>`)
    .join("");

  document.getElementById("product-list").innerHTML = cfg.products
    .map((p) => `<li>${p}</li>`).join("");

  /* --- SERTIFIKASI BADGES --- */
  document.getElementById("certifications-grid").innerHTML = cfg.certifications
    .map((cert) => `
      <div class="certification-badge">
        <span class="cert-icon">${cert.icon}</span>
        <h3>${cert.name}</h3>
        <p>${cert.desc}</p>
      </div>
    `).join("");

  document.getElementById("portfolio-grid").innerHTML = cfg.portfolio
    .map(
      (p, i) => `
      <article class="portfolio-card" data-index="${i}">
        <figure>
          <img src="${p.images[0]}" alt="${p.title}">
          ${p.images.length > 1 ? `<span class="photo-count">${p.images.length} foto</span>` : ""}
        </figure>
        <figcaption>
          <span class="tag">${p.tag}</span>
          <h3>${p.title}</h3>
        </figcaption>
      </article>`
    )
    .join("");

  document.getElementById("contact-heading").textContent = cfg.contact.heading;
  document.getElementById("contact-address").textContent = cfg.contact.address;
  document.getElementById("contact-email").textContent = cfg.contact.email;
  document.getElementById("contact-fax").textContent = cfg.contact.fax;
  
  /* --- WHATSAPP LINK --- */
  const whatsappLink = document.getElementById("whatsapp-link");
  const whatsappNumber = cfg.contact.whatsapp.replace(/\D/g, '');
  const whatsappMsg = encodeURIComponent("Halo, saya ingin konsultasi tentang proyek saya.");
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;
  whatsappLink.textContent = cfg.contact.whatsapp;
  
  document.getElementById("whatsapp-widget").href = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;
  document.getElementById("whatsapp-widget").title = `Chat via WhatsApp: ${cfg.contact.whatsapp}`;

  const year = new Date().getFullYear();
  document.getElementById("footer-copy").textContent =
    `© ${year} ${cfg.brand.name}. All rights reserved.`;

  // Stats strip: dihitung otomatis dari jumlah item di config, tidak dikarang manual.
  const stats = [
    { label: "Pelayanan", value: cfg.services.length },
    { label: "Komitmen", value: cfg.commitments.length },
    { label: "Produk & Jasa Sewa", value: cfg.products.length },
    { label: "Proyek Terpilih", value: cfg.portfolio.length },
  ];
  document.getElementById("stats-strip").innerHTML = stats
    .map(
      (s) => `
      <div class="stat">
        <span class="stat-num" data-count-to="${s.value}">0</span>
        <span class="stat-label">${s.label}</span>
      </div>`
    )
    .join("");
}

/* Setiap item portofolio: title, tag (klien/kategori), images (array foto di /assets/portfolio/<slug>/)
   Foto pertama di array jadi cover di grid; semua foto bisa digeser (slider) saat card diklik. */
const portfolio = [
  {
    title: "Shelter Limbah Chemical MB2",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/shelter-limbah/01.jpg",
      "assets/portfolio/shelter-limbah/02.jpg",
      "assets/portfolio/shelter-limbah/03.jpg",
      "assets/portfolio/shelter-limbah/04.jpg",
      "assets/portfolio/shelter-limbah/05.jpg",
    ],
  },
  {
    title: "Fabrikasi Living Quarter KLA F/S",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/living-quarter/01.jpg",
      "assets/portfolio/living-quarter/02.jpg",
      "assets/portfolio/living-quarter/03.jpg",
      "assets/portfolio/living-quarter/04.jpg",
      "assets/portfolio/living-quarter/05.jpg",
      "assets/portfolio/living-quarter/06.jpg",
      "assets/portfolio/living-quarter/07.jpg",
      "assets/portfolio/living-quarter/08.jpg",
      "assets/portfolio/living-quarter/09.jpg",
      "assets/portfolio/living-quarter/10.jpg",
    ],
  },
  {
    title: "Re-design Public Toilet & Mushola Zulu F/S",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/toilet-zulu/01.jpg",
      "assets/portfolio/toilet-zulu/02.jpg",
      "assets/portfolio/toilet-zulu/03.jpg",
      "assets/portfolio/toilet-zulu/04.jpg",
      "assets/portfolio/toilet-zulu/05.jpg",
      "assets/portfolio/toilet-zulu/06.jpg",
      "assets/portfolio/toilet-zulu/07.jpg",
      "assets/portfolio/toilet-zulu/08.jpg",
    ],
  },
  {
    title: "Re-design Public Toilet PAPA F/S",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/toilet-papa/01.jpg",
      "assets/portfolio/toilet-papa/02.jpg",
      "assets/portfolio/toilet-papa/03.jpg",
      "assets/portfolio/toilet-papa/04.jpg",
      "assets/portfolio/toilet-papa/05.jpg",
      "assets/portfolio/toilet-papa/06.jpg",
    ],
  },
  {
    title: "Re-design VTS Room PAPA F/S",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/vts-room/01.jpg",
      "assets/portfolio/vts-room/02.jpg",
      "assets/portfolio/vts-room/03.jpg",
      "assets/portfolio/vts-room/04.jpg",
      "assets/portfolio/vts-room/05.jpg",
    ],
  },
  {
    title: "Re-design & Fabrikasi Mushola Mike Mike F/S",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/mushola-mikemike/01.jpg",
      "assets/portfolio/mushola-mikemike/02.jpg",
      "assets/portfolio/mushola-mikemike/03.jpg",
      "assets/portfolio/mushola-mikemike/04.jpg",
      "assets/portfolio/mushola-mikemike/05.jpg",
      "assets/portfolio/mushola-mikemike/06.jpg",
      "assets/portfolio/mushola-mikemike/07.jpg",
    ],
  },
  {
    title: "Re-design & Fabrikasi Gym Mike Mike F/S",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/gym-mikemike/01.jpg",
      "assets/portfolio/gym-mikemike/02.jpg",
      "assets/portfolio/gym-mikemike/03.jpg",
      "assets/portfolio/gym-mikemike/04.jpg",
      "assets/portfolio/gym-mikemike/05.jpg",
      "assets/portfolio/gym-mikemike/06.jpg",
      "assets/portfolio/gym-mikemike/07.jpg",
    ],
  },
  {
    title: "Re-design & Fabrikasi Shelter Fire Truck & Jetty MB2",
    tag: "PHE ONWJ",
    images: [
      "assets/portfolio/firetruck-jetty/01.jpg",
      "assets/portfolio/firetruck-jetty/02.jpg",
      "assets/portfolio/firetruck-jetty/03.jpg",
      "assets/portfolio/firetruck-jetty/04.jpg",
      "assets/portfolio/firetruck-jetty/05.jpg",
      "assets/portfolio/firetruck-jetty/06.jpg",
    ],
  },
  {
    title: "Positioning Survey",
    tag: "Jasa Survey",
    images: [
      "assets/portfolio/positioning-survey/01.jpg",
      "assets/portfolio/positioning-survey/02.jpg",
      "assets/portfolio/positioning-survey/03.jpg",
      "assets/portfolio/positioning-survey/04.jpg",
      "assets/portfolio/positioning-survey/05.jpg",
      "assets/portfolio/positioning-survey/06.jpg",
      "assets/portfolio/positioning-survey/07.jpg",
    ],
  },
  {
    title: "Super Dome",
    tag: "Jasa Sewa Onshore & Offshore",
    images: ["assets/portfolio-super-dome.jpg"],
  },
  {
    title: "Mooring Set",
    tag: "Jasa Sewa Onshore & Offshore",
    images: [
      "assets/portfolio/mooring-set/01.jpg",
      "assets/portfolio/mooring-set/02.jpg",
      "assets/portfolio/mooring-set/03.jpg",
      "assets/portfolio/mooring-set/04.jpg",
      "assets/portfolio/mooring-set/05.jpg",
      "assets/portfolio/mooring-set/06.jpg",
      "assets/portfolio/mooring-set/07.jpg",
    ],
  },
  {
    title: "AGD — Automatic Gas Detector",
    tag: "Jasa Sewa Onshore & Offshore",
    images: [
      "assets/portfolio/agd/01.jpg",
      "assets/portfolio/agd/02.jpg",
      "assets/portfolio/agd/03.jpg",
    ],
  },
  {
    title: "Chiksan Pipe for Temporary Flow Line",
    tag: "Jasa Sewa Onshore & Offshore",
    images: [
      "assets/portfolio/chiksan/01.jpg",
      "assets/portfolio/chiksan/02.jpg",
      "assets/portfolio/chiksan/03.jpg",
      "assets/portfolio/chiksan/04.jpg",
    ],
  },
];

siteConfig.portfolio = portfolio;

/* ---------------- Mobile nav toggle ---------------- */
function setupNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}

/* ---------------- Contact form (demo) ----------------
   Ganti isi fungsi ini untuk mengirim data ke email/API/CRM Anda sendiri,
   misalnya dengan fetch("/api/contact-us", { method:"POST", body: ... }).
------------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const button = form.querySelector("button[type=submit]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    button.classList.add("is-loading");
    button.disabled = true;

    // Simulasi pengiriman (ganti dengan fetch ke server Anda).
    setTimeout(() => {
      button.classList.remove("is-loading");
      button.disabled = false;
      status.textContent = "Terima kasih! Pesan Anda telah dicatat (demo — belum terhubung ke server).";
      status.classList.remove("visible");
      void status.offsetWidth; // restart animasi
      status.classList.add("visible");
      form.reset();
    }, 700);
  });
}

/* ---------------- Sticky header: shrink + shadow on scroll ---------------- */
function setupHeaderScroll() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------- Active nav link follows scroll position ---------------- */
function setupActiveNav() {
  const links = Array.from(document.querySelectorAll(".main-nav a[href^='#']"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        links.forEach((a) =>
          a.classList.toggle("active-link", a.getAttribute("href") === id)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ---------------- Reveal-on-scroll for .reveal + grid children ---------------- */
function setupRevealAnimations(reduceMotion) {
  const targets = document.querySelectorAll(
    ".reveal, .service-grid > *, .commit-grid > *, .product-list > *, .portfolio-grid > *, .certifications-grid > *"
  );
  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => observer.observe(el));
}

/* ---------------- Count-up animation for the stats strip ---------------- */
function setupStatsCountUp(reduceMotion) {
  const nums = document.querySelectorAll("[data-count-to]");
  if (!nums.length) return;
  if (reduceMotion) {
    nums.forEach((el) => (el.textContent = el.dataset.countTo));
    return;
  }
  const animate = (el) => {
    const target = parseInt(el.dataset.countTo, 10) || 0;
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((el) => observer.observe(el));
}

/* ---------------- Hero: one-time load-in + subtle parallax ---------------- */
function setupHero(reduceMotion) {
  const hero = document.querySelector(".hero");
  requestAnimationFrame(() => hero.classList.add("loaded"));

  if (reduceMotion) return;
  const layers = hero.querySelectorAll(".hero-img");
  hero.addEventListener("mousemove", (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w - 0.5) * 14; // max ~14px shift
    const y = (e.clientY / h - 0.5) * 14;
    layers.forEach((img, i) => {
      const depth = i === 0 ? 1 : 1.8;
      img.style.transform = `translate(${x * depth}px, ${y * depth}px) scale(1.03)`;
    });
  });
  hero.addEventListener("mouseleave", () => {
    layers.forEach((img) => (img.style.transform = ""));
  });
}

/* ---------------- Portfolio lightbox (gallery slider) -------- */
function setupLightbox(cfg) {
  const grid = document.getElementById("portfolio-grid");
  const lightbox = document.getElementById("lightbox");
  const track = document.getElementById("lightbox-track");
  const caption = document.getElementById("lightbox-caption");
  const counter = document.getElementById("lightbox-counter");
  const dotsWrap = document.getElementById("lightbox-dots");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  let images = [];
  let title = "";
  let tag = "";
  let index = 0;

  function renderSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
    caption.textContent = `${title} — ${tag}`;
    counter.textContent = `${index + 1} / ${images.length}`;
    dotsWrap.querySelectorAll("button").forEach((d, i) =>
      d.classList.toggle("active", i === index)
    );
    prevBtn.style.visibility = images.length > 1 ? "visible" : "hidden";
    nextBtn.style.visibility = images.length > 1 ? "visible" : "hidden";
  }

  function goTo(i) {
    index = (i + images.length) % images.length;
    renderSlide();
  }

  function open(project, startIndex) {
    images = project.images;
    title = project.title;
    tag = project.tag;
    index = startIndex || 0;

    track.innerHTML = images
      .map((src) => `<div class="lightbox-slide"><img src="${src}" alt="${title}"></div>`)
      .join("");
    dotsWrap.innerHTML =
      images.length > 1
        ? images.map((_, i) => `<button aria-label="Foto ${i + 1}"></button>`).join("")
        : "";

    renderSlide();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".portfolio-card");
    if (!card) return;
    const i = parseInt(card.dataset.index, 10);
    open(cfg.portfolio[i], 0);
  });

  dotsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    goTo(Array.from(dotsWrap.children).indexOf(btn));
  });

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") goTo(index + 1);
    if (e.key === "ArrowLeft") goTo(index - 1);
  });

  // Swipe support (touch devices)
  let touchStartX = null;
  track.addEventListener(
    "touchstart",
    (e) => (touchStartX = e.touches[0].clientX),
    { passive: true }
  );
  track.addEventListener(
    "touchend",
    (e) => {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? index + 1 : index - 1);
      touchStartX = null;
    },
    { passive: true }
  );
}

/* ---------------- WhatsApp Widget visibility on scroll -------- */
function setupWhatsAppWidget() {
  const widget = document.getElementById("whatsapp-widget");
  const onScroll = () => {
    widget.classList.toggle("visible", window.scrollY > 300);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------- Back to top button ---------------- */
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener(
    "scroll",
    () => btn.classList.toggle("visible", window.scrollY > 600),
    { passive: true }
  );
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  renderSite(siteConfig);
  setupNav();
  setupContactForm();
  setupHeaderScroll();
  setupActiveNav();
  setupRevealAnimations(reduceMotion);
  setupStatsCountUp(reduceMotion);
  setupHero(reduceMotion);
  setupLightbox(siteConfig);
  setupWhatsAppWidget();
  setupBackToTop();
});
