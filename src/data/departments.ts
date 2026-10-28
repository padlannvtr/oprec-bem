export interface Program {
  name: string
  description: string
}

export interface Biro {
  name: string
  description: string
  programs: Program[]
}

export interface Department {
  id: string
  slug: string
  name: string
  shortName: string
  category: 'Eksternal' | 'Internal'
  tagline: string
  about: string
  /** Department-level programs (shown at dept level, not biro) */
  deptPrograms: Program[]
  biro: Biro[]
}

export const departments: Department[] = [
  /* ────────────────────────────────────────────────────────── */
  /*  1. SOSIAL MASYARAKAT                                     */
  /* ────────────────────────────────────────────────────────── */
  {
    id: 'sosial-masyarakat',
    slug: 'sosial-masyarakat',
    name: 'Departemen Sosial Masyarakat',
    shortName: 'Sosial Masyarakat',
    category: 'Eksternal',
    tagline: 'Kepedulian yang diwujudkan dalam aksi nyata',
    about:
      'Perubahan besar berawal dari kepedulian sederhana yang diwujudkan melalui aksi nyata. Departemen Sosial Masyarakat hadir sebagai wadah bagi mahasiswa FIKTI untuk berkontribusi dan memberikan manfaat bagi sesama maupun lingkungan. Melalui kegiatan sosial, pengabdian masyarakat, dan kepedulian terhadap lingkungan, setiap langkah kecil diharapkan mampu membawa perubahan positif.',
    deptPrograms: [
      {
        name: 'GEMA BUMI',
        description:
          'Kampanye digital yang mengangkat isu sosial dan lingkungan melalui konten edukasi, peringatan hari besar, dan kampanye interaktif (challenge) di media sosial BEM FIKTI Universitas Gunadarma.',
      },
    ],
    biro: [
      {
        name: 'Biro Pemberdayaan Sosial',
        description:
          'Biro Pemberdayaan Sosial hadir sebagai wadah bagi mahasiswa FIKTI untuk terlibat dalam kegiatan sosial dan pengabdian masyarakat, mulai dari berbagi kebahagiaan hingga membantu mereka yang membutuhkan. Melalui setiap aksi, kami ingin menumbuhkan empati, mempererat solidaritas, dan menghadirkan dampak positif bagi sesama.',
        programs: [
          {
            name: 'HERO OF EDUCATION AND SOCIAL (HEROES)',
            description:
              'Kegiatan pengabdian sosial masyarakat yang dilaksanakan oleh Mahasiswa/i FIKTI UG di wilayah yang memiliki suatu permasalahan dalam keseharian. Acara ini terdapat kegiatan seperti melakukan sosialisasi tentang teknologi, kerja bakti, dan kegiatan sosial lainnya.',
          },
          {
            name: 'SEUTAS HARAPAN TULUS DARI HATI (SEHATI)',
            description:
              'Kegiatan bakti sosial yang berisi beberapa rangkaian acara yang dilaksanakan di suatu panti/yayasan yang bertujuan untuk berbagi kasih terhadap mereka yang kurang beruntung.',
          },
        ],
      },
      {
        name: 'Biro Lingkungan Hidup',
        description:
          'Biro Lingkungan Hidup hadir untuk mengajak mahasiswa lebih peduli terhadap lingkungan, memahami berbagai permasalahannya, dan mengambil bagian dalam menciptakan perubahan. Melalui edukasi, kampanye digital, serta aksi nyata pelestarian lingkungan, kami ingin membangun kebiasaan sederhana yang membawa dampak berkelanjutan.',
        programs: [
          {
            name: 'FIKTI TERRA (FIKTERRA)',
            description:
              'Program kerja yang berfokus pada peningkatan kepedulian mahasiswa terhadap penghijauan dan pelestarian lingkungan melalui kegiatan aksi nyata yang dipadukan dengan edukasi mengenai tanaman, keanekaragaman hayati, dan ekosistem.',
          },
          {
            name: 'FIKTI UPCYCLE LAB (FUPCYCLE)',
            description:
              'Program Kerja yang berfokus pada edukasi dan praktik pengolahan barang bekas menjadi produk baru yang memiliki nilai guna.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  /*  2. POLITIK DAN KEMAHASISWAAN (POLKESMA)                  */
  /* ────────────────────────────────────────────────────────── */
  {
    id: 'politik-kemahasiswaan',
    slug: 'politik-kemahasiswaan',
    name: 'Departemen Politik dan Kemahasiswaan',
    shortName: 'Politik dan Kemahasiswaan',
    category: 'Eksternal',
    tagline: 'Aspirasi mahasiswa, advokasi yang nyata',
    about:
      'Bertugas sebagai penghubung dan pelayanan kebutuhan terhadap Mahasiswa/i FIKTI UG dengan pemangku kebijakan, pengadvokasian kebijakan internal kampus terhadap isu-isu yang berkembang, serta roda penggerak dalam pergerakan Mahasiswa/i FIKTI UG.',
    deptPrograms: [],
    biro: [
      {
        name: 'Biro Advokasi Mahasiswa',
        description:
          'Biro yang bertugas menjembatani komunikasi antara mahasiswa dan pihak birokrasi kampus serta memperjuangkan hak-hak mahasiswa.',
        programs: [
          {
            name: 'FIKTI Information (FIKTION)',
            description:
              'Sarana penyebarluasan informasi kampus yang relevan dan terkini dengan mengoptimalkan pemanfaatan media sosial.',
          },
          {
            name: 'HOTLINE FIKTI',
            description:
              'Platform terpusat bagi Mahasiswa/i FIKTI untuk mendapatkan informasi akademik dan non-akademik serta dukungan mental bagi yang membutuhkan via WhatsApp.',
          },
          {
            name: 'Bincang Bareng FIKTI (BBF)',
            description:
              'Forum diskusi antara BEM FIKTI dengan Mahasiswa/i FIKTI yang membahas topik terkini seputar perkuliahan serta isu terkini tanpa mengandung SARA.',
          },
        ],
      },
      {
        name: 'Biro Kajian dan Aksi Strategis',
        description:
          'Biro yang berfungsi sebagai pusat pengkajian, analisis, serta pengawalan isu-isu strategis baik di tingkat kampus, daerah, maupun nasional.',
        programs: [
          {
            name: 'FIKTI Aware About Issue (FAAI)',
            description:
              'Wadah bagi Mahasiswa/i FIKTI bersama BEM FIKTI untuk mengawal dan memberikan sikap atas isu yang sedang terjadi.',
          },
          {
            name: 'FIKTI Bersuara Opini Terkini (FIBEROPTIK)',
            description:
              'Wadah bagi Mahasiswa/i FIKTI untuk menyalurkan ide, gagasan, dan kritik konstruktif terhadap isu-isu terkini baik dari internal maupun eksternal.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  /*  3. OLAHRAGA DAN SENI BUDAYA (ORSB)                       */
  /* ────────────────────────────────────────────────────────── */
  {
    id: 'olahraga-seni-budaya',
    slug: 'olahraga-seni-budaya',
    name: 'Departemen Olahraga dan Seni Budaya',
    shortName: 'Olahraga dan Seni Budaya',
    category: 'Eksternal',
    tagline: 'Sportivitas dan kreativitas mahasiswa FIKTI',
    about:
      'Departemen ORSB (Olahraga dan Seni Budaya) adalah salah satu departemen dari struktur pengurus BEM FIKTI yang berfokus pada kegiatan non-akademik seperti olahraga dan seni. Departemen ORSB mewadahi mahasiswa FIKTI yang memiliki minat atau bakat pada seni dan olahraga, oleh karena itu Departemen ORSB menyediakan beberapa program kerja untuk mahasiswa FIKTI agar tidak terlalu berfokus pada akademik.',
    deptPrograms: [],
    biro: [
      {
        name: 'Biro Olahraga',
        description:
          'Biro Olahraga adalah salah satu biro di bawah Departemen ORSB yang memfokuskan pada kegiatan non-akademik di bidang olahraga serta mewadahi mahasiswa FIKTI yang memiliki bakat di bidang olahraga.',
        programs: [
          {
            name: 'FIKTI SPORT AND COMMUNITY',
            description:
              'Sebuah program untuk mewadahi Mahasiswa FIKTI melatih bakatnya di bidang Futsal, Badminton, dan Mobile Legend. Program ini berlangsung selama 1 periode.',
          },
          {
            name: 'FIKTI PLAYDAY',
            description:
              'Sebuah program untuk merekatkan ikatan antara mahasiswa FIKTI dengan menyelenggarakan kegiatan olahraga yang menyenangkan. Cabor yang diselenggarakan antara lain Futsal, Mini Soccer, Badminton, dan Basket.',
          },
          {
            name: 'FIKTI SPACE (FIKTI Sport & Art Championship)',
            description:
              'Rangkaian kompetisi olahraga dan seni untuk menumbuhkan sportivitas dan kreativitas, menjadi wadah mahasiswa Gunadarma khususnya FIKTI menyalurkan minat bakat olahraga dan seni, sekaligus hiburan bagi mahasiswa FIKTI.',
          },
        ],
      },
      {
        name: 'Biro Seni Budaya',
        description:
          'Biro Seni Budaya adalah salah satu biro di bawah Departemen ORSB yang memfokuskan pada kegiatan non-akademik di bidang Seni Budaya, agar mahasiswa FIKTI tetap menjaga dan tidak lupa pada budaya yang ada.',
        programs: [
          {
            name: 'TBA (Talk Bout Art)',
            description:
              'Program kerja dari biro seni yang bertujuan untuk memberikan informasi atau fakta-fakta tentang seni kepada mahasiswa FIKTI atau masyarakat media sosial, berupa postingan ataupun reels pada Instagram BEM.',
          },
          {
            name: 'MINAT BAKAT BAND',
            description:
              'Program kerja yang diadakan untuk mewadahi para mahasiswa FIKTI yang memiliki bakat di bidang seni musik berbentuk band.',
          },
          {
            name: 'GELAR BUDAYA',
            description:
              'Program kerja yang memberikan ruang berekspresi bagi mahasiswa FIKTI ataupun masyarakat Gunadarma dan khalayak umum yang berupa event musik.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  /*  4. AKADEMIK                                              */
  /* ────────────────────────────────────────────────────────── */
  {
    id: 'akademik',
    slug: 'akademik',
    name: 'Departemen Akademik',
    shortName: 'Akademik',
    category: 'Eksternal',
    tagline: 'Mendorong mahasiswa FIKTI berprestasi dan siap kerja',
    about:
      'Departemen Akademik hadir sebagai wadah strategis yang menjembatani kehidupan perkuliahan mahasiswa di kampus dengan realita kebutuhan industri teknologi informasi saat ini. Departemen ini tidak hanya berfokus pada pendampingan dan pemenuhan kebutuhan akademis harian mahasiswa, tetapi juga berkomitmen untuk mengakselerasi kesiapan kerja melalui program pelatihan berbasis kompetensi teknis (hardskill), pengembangan soft skills, wadah kompetisi, hingga pembinaan karir yang terarah. Melalui pendekatan yang adaptif dan solutif, Departemen Akademik siap membantu mahasiswa FIKTI meraih prestasi akademis setinggi-tingginya sekaligus tampil percaya diri dan berdaya saing tinggi saat melangkah ke dunia profesional.',
    deptPrograms: [],
    biro: [
      {
        name: 'Biro Pengembangan Kompetensi',
        description:
          'Biro Pengembangan Kompetensi bertindak sebagai sarana utama dalam mengasah dan mengoptimalkan potensi intelektual serta keahlian teknis mahasiswa FIKTI. Biro ini bertanggung jawab menyelenggarakan berbagai ruang belajar yang inklusif dan terstruktur mulai dari kelas tutoring sebaya, bootcamp dan micro-learning berbasis proyek, hingga seminar teknologi terkini. Selain memperkuat pemahaman materi perkuliahan dan tren hardskill industri, biro ini juga menjadi wadah penyaluran minat dan bakat mahasiswa melalui pengelolaan ajang kompetisi akademis, sehingga mahasiswa tidak hanya menguasai teori, tetapi juga memiliki portofolio karya yang nyata.',
        programs: [
          {
            name: 'TechnoFair',
            description:
              'Ajang tahunan pameran kompetisi dan seminar teknologi informasi yang diselenggarakan sebagai wadah untuk memperkenalkan perkembangan teknologi digital terkini, memamerkan inovasi karya, serta mengasah bakat mahasiswa Universitas Gunadarma maupun masyarakat umum.',
          },
          {
            name: 'FIKTI DevAcademy',
            description:
              'Program pengembangan minat bakat bagi mahasiswa FIKTI UG yang dilaksanakan dalam bentuk bootcamp dengan minimal 4 kali pertemuan selama 1 bulan, pemberian assignment pada setiap pertemuan, dan final project di akhir pertemuan.',
          },
          {
            name: 'MiniClass Tech',
            description:
              'Program pelatihan intensif berbentuk kelas-kelas kecil (micro-learning) yang berfokus pada pengembangan keterampilan teknis (hardskill) spesifik di bidang teknologi informasi melalui sesi pembelajaran interaktif, praktik langsung (hands-on), serta bimbingan terarah yang diakhiri dengan pembuatan mini project.',
          },
        ],
      },
      {
        name: 'Biro Akselerasi Karir',
        description:
          'Biro Akselerasi Karir bertugas sebagai kompas dan penggerak utama dalam mempersiapkan mahasiswa FIKTI menghadapi alur rekrutmen serta dinamika dunia kerja pasca-kampus. Biro ini berfokus pada perluasan akses informasi peluang magang dan karir di bidang IT, penyelenggaraan pelatihan pembuatan CV dan portofolio berstandar industri, hingga pelaksanaan sesi pembekalan rekrutmen (mock interview & career talkshow). Dengan memfasilitasi interaksi langsung bersama alumni, praktisi, dan perusahaan teknologi, biro ini mendorong mahasiswa agar lebih siap, matang, dan tangguh dalam membangun jejak karir impian mereka.',
        programs: [
          {
            name: 'Career Insight Forum',
            description:
              'Program kerja bertema talkshow dengan pembahasan karir di bidang IT, menghadirkan praktisi dan alumni yang berbagi pengalaman nyata dari industri.',
          },
          {
            name: 'FIKTI Corporate Exposure',
            description:
              'Program kerja BEM FIKTI UG yang bekerja sama dengan perusahaan IT maupun perusahaan lain yang berkaitan dengan FIKTI untuk memberikan informasi penting mengenai dunia karir atau perusahaan yang bersangkutan.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  /*  5. PENGEMBANGAN SDM (PSDM)                               */
  /* ────────────────────────────────────────────────────────── */
  {
    id: 'pengembangan-sdm',
    slug: 'pengembangan-sdm',
    name: 'Departemen Pengembangan Sumber Daya Manusia',
    shortName: 'Pengembangan SDM',
    category: 'Internal',
    tagline: 'Membangun kapasitas pengurus BEM dari dalam',
    about:
      'Sebuah departemen yang menjaga efektivitas dan kerjasama para pengurus BEM FIKTI 2026/2027 dengan monitoring, evaluasi, dan aktivitas melalui beberapa program kerja.',
    deptPrograms: [],
    biro: [
      {
        name: 'Biro Pengendali Internal',
        description:
          'Monitoring dan evaluasi produktivitas setiap pengurus BEM FIKTI sebagai friendly supervisor & advisor yang selalu mengutamakan pengurus terlebih dahulu.',
        programs: [
          {
            name: 'BUDDY PSDM',
            description:
              'Teman pendamping tiap departemen yang hadir untuk mendengarkan, menemani, dan menjembatani tiap kebutuhan anggota pengurus departemen secara keseluruhan (termasuk Biro).',
          },
          {
            name: 'Bonding Day!',
            description:
              'Acara untuk seluruh pengurus BEM FIKTI guna menguatkan ikatan pertemanan antara satu sama lain dalam satu hari yang besar.',
          },
          {
            name: 'Internship with BEM FIKTI',
            description:
              'Program yang memfasilitasi mahasiswa untuk hands-on pada program kerja nyata dan berpartisipasi aktif pada kegiatannya.',
          },
        ],
      },
      {
        name: 'Biro Pengembangan dan Kaderisasi',
        description:
          'Fokus pada keberlangsungan organisasi dan program kerja yang melibatkan pengurus BEM FIKTI UG dan calon penerus baru melalui program-program pengelolaan SDM.',
        programs: [
          {
            name: 'LFA (Learn From Anywhere)',
            description:
              'Program kerja yang bertujuan untuk menambah wawasan para pengurus baru demi melancarkan program kerja atau cara bekerja dalam berorganisasi dengan cara apapun, siapapun, dan dimanapun yang dibutuhkan.',
          },
          {
            name: 'Award is a Must!',
            description:
              'Program yang bertujuan untuk memberikan apresiasi kepada pengurus BEM FIKTI beserta para internship atas kerja keras mereka selama periode Kabinet Revarsa berlangsung.',
          },
          {
            name: 'Karsa Care',
            description:
              'Program kerja yang berfungsi sebagai saluran khusus penanganan konflik, mediasi netral, serta penanganan burnout atau ghosting pengurus, sehingga terpisah dari fungsi penilaian kinerja harian.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  /*  6. MEDIA KOMUNIKASI                                      */
  /* ────────────────────────────────────────────────────────── */
  {
    id: 'media-komunikasi',
    slug: 'media-komunikasi',
    name: 'Departemen Media Komunikasi',
    shortName: 'Media Komunikasi',
    category: 'Internal',
    tagline: 'Suara BEM FIKTI yang menjangkau semua',
    about:
      'Departemen internal BEM FIKTI yang berfokus pada pengelolaan media, informasi, komunikasi, dan teknologi untuk menunjang kebutuhan internal organisasi. Berperan mengelola penyampaian informasi, mendukung kebutuhan media dan publikasi, menjaga komunikasi antarbagian, serta menyediakan dukungan teknologi agar kegiatan dan koordinasi internal BEM FIKTI berjalan dengan baik.',
    deptPrograms: [],
    biro: [
      {
        name: 'Biro Media Kreatif',
        description:
          'Mengembangkan dan mengelola komunikasi kreatif organisasi melalui berbagai media visual dan digital; menerjemahkan informasi, gagasan, program kerja, serta identitas BEM FIKTI Universitas Gunadarma ke dalam konten yang informatif, menarik, relevan, dan mudah dipahami audiens.',
        programs: [
          {
            name: 'Media Partner',
            description:
              'Mendukung publikasi eksternal: desain feeds, banner, poster, dan kebutuhan desain lain lewat kolaborasi dengan biro/departemen lain.',
          },
          {
            name: 'Hari Besar',
            description:
              'Informasi hari besar dan isu terkini dalam bentuk desain Instagram Story/Feeds.',
          },
          {
            name: 'Videografi dan Dokumentasi BEM FIKTI',
            description:
              'Dokumentasi program kerja dan videografi (after movie program unggulan dan inovasi).',
          },
          {
            name: 'Content Creative by Media',
            description:
              'Konten video informatif seputar dunia digital di media sosial BEM FIKTI Universitas Gunadarma.',
          },
        ],
      },
      {
        name: 'Biro Hubungan Masyarakat',
        description:
          'Membangun, mengelola, dan menjaga hubungan komunikasi antara BEM FIKTI Universitas Gunadarma dengan mahasiswa FIKTI maupun pihak internal dan eksternal organisasi; memastikan informasi tersampaikan efektif, relevan, dan tepat sasaran, sekaligus mengembangkan strategi komunikasi untuk meningkatkan visibilitas dan citra BEM FIKTI Universitas Gunadarma.',
        programs: [
          {
            name: 'Sosial Media Strategy (Content Analyst & Content Creative)',
            description:
              'Riset, analisis, dan pengembangan konten untuk memperkuat branding serta mengelola media sosial BEM FIKTI.',
          },
          {
            name: 'Humas Partner (Internal, Eksternal)',
            description:
              'Mengelola tawaran kerja sama internal dan eksternal (media partner) serta penjadwalan konten biro/departemen.',
          },
          {
            name: 'Info FIKTI',
            description:
              'Informasi perkuliahan yang cepat, tepat, dan akurat melalui media resmi BEM (feeds/instastory).',
          },
          {
            name: 'FIKTI Comparative Study',
            description:
              'Sharing session dengan BEM fakultas/organisasi kampus lain untuk membandingkan praktik terbaik.',
          },
        ],
      },
      {
        name: 'Biro Teknologi Informasi',
        description:
          'Mengembangkan, mengelola, dan mengoptimalkan pemanfaatan teknologi informasi berbasis website untuk mendukung kebutuhan organisasi serta mahasiswa FIKTI Universitas Gunadarma: pengembangan dan pengelolaan website BEM FIKTI, kolaborasi dengan biro/departemen lain, serta penerapan inovasi teknologi.',
        programs: [
          {
            name: 'Teknologi Informasi Service',
            description:
              'Wadah bagi biro/departemen yang ingin program kerjanya dipublikasikan lewat website (target minimal 5 website).',
          },
          {
            name: 'Revamp',
            description:
              'Pengkajian ulang tata letak, fungsi, dan responsivitas website agar efisien dan aksesibel lintas perangkat.',
          },
          {
            name: 'Upgrading Skill at Teknologi Informasi',
            description:
              'Sharing session web development untuk internal biro, 2× per bulan.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  /*  7. BISNIS DAN KEMITRAAN                                  */
  /* ────────────────────────────────────────────────────────── */
  {
    id: 'bisnis-kemitraan',
    slug: 'bisnis-kemitraan',
    name: 'Departemen Bisnis dan Kemitraan',
    shortName: 'Bisnis dan Kemitraan',
    category: 'Internal',
    tagline: 'Kolaborasi strategis untuk keberlanjutan program',
    about:
      'Pilar pencari dana mandiri untuk kebutuhan program kerja departemen dan membangun kerja sama dengan perusahaan.',
    deptPrograms: [],
    biro: [
      {
        name: 'Biro Bisnis Kreatif',
        description:
          'Mengelola merchandise FIKTI dan Dana Usaha mandiri untuk program kerja BEM dan kas organisasi.',
        programs: [],
      },
      {
        name: 'Biro Kemitraan',
        description:
          'Menjaring pihak sponsor, media partner, dan perusahaan luar untuk mendukung pendanaan acara BEM.',
        programs: [],
      },
    ],
  },
]

/* ── Helpers ── */
export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug)
}

/** Flat list of biro names (for stats bar) */
export function getAllBiroNames(): string[] {
  return departments.flatMap((d) => d.biro.map((b) => b.name))
}
