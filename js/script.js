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

  // Setiap item portofolio: title, tag (klien/kategori), image (path di /assets)
  portfolio: [
    { title: "Shelter Limbah Chemical MB2", tag: "PHE ONWJ", image: "assets/portfolio-shelter-limbah.jpg" },
    { title: "Fabrikasi Living Quarter KLA F/S", tag: "PHE ONWJ", image: "assets/portfolio-living-quarter.jpg" },
    { title: "Re-design Public Toilet & Mushola Zulu F/S", tag: "PHE ONWJ", image: "assets/portfolio-toilet-zulu.jpg" },
    { title: "Re-design Public Toilet PAPA F/S", tag: "PHE ONWJ", image: "assets/portfolio-toilet-papa.jpg" },
    { title: "Re-design VTS Room PAPA F/S", tag: "PHE ONWJ", image: "assets/portfolio-vts-room.jpg" },
    { title: "Re-design & Fabrikasi Mushola Mike Mike F/S", tag: "PHE ONWJ", image: "assets/portfolio-mushola-mikemike.jpg" },
    { title: "Re-design & Fabrikasi Gym Mike Mike F/S", tag: "PHE ONWJ", image: "assets/portfolio-gym-mikemike.jpg" },
    { title: "Re-design & Fabrikasi Shelter Fire Truck & Jetty MB2", tag: "PHE ONWJ", image: "assets/portfolio-firetruck-jetty.jpg" },
    { title: "Positioning Survey", tag: "Jasa Survey", image: "assets/portfolio-positioning-survey.jpg" },
    { title: "Super Dome", tag: "Jasa Sewa Onshore & Offshore", image: "assets/portfolio-super-dome.jpg" },
    { title: "Mooring Set", tag: "Jasa Sewa Onshore & Offshore", image: "assets/portfolio-mooring-set.jpg" },
    { title: "AGD — Automatic Gas Detector", tag: "Jasa Sewa Onshore & Offshore", image: "assets/portfolio-agd.jpg" },
  ],

  contact: {
    heading: "Mari diskusikan proyek Anda.",
    address: "Griya Loka BSD, Jl. Melinjo No.11 Blok C3, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan",
    email: "grindakarthaprima.pt@gmail.com",
    fax: "(021) 87782019",
    // Untuk menghubungkan form ke email sungguhan, ganti fungsi handleContactSubmit()
    // di bawah dengan pemanggilan API/endpoint Anda sendiri (mis. fetch ke /api/contact-us).
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

  document.getElementById("portfolio-grid").innerHTML = cfg.portfolio
    .map(
      (p) => `
      <article class="portfolio-card">
        <figure>
          <img src="${p.image}" alt="${p.title}">
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
    ".reveal, .service-grid > *, .commit-grid > *, .product-list > *, .portfolio-grid > *"
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

/* ---------------- Portfolio lightbox ---------------- */
function setupLightbox() {
  const grid = document.getElementById("portfolio-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  function open(src, title, tag) {
    lightboxImg.src = src;
    lightboxImg.alt = title;
    caption.textContent = `${title} — ${tag}`;
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
    const img = card.querySelector("img");
    const title = card.querySelector("h3")?.textContent || "";
    const tag = card.querySelector(".tag")?.textContent || "";
    open(img.src, title, tag);
  });
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
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
  setupLightbox();
  setupBackToTop();
});
