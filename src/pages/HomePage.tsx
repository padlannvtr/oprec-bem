import { Link } from 'react-router-dom'
import { useCountdown } from '../hooks/useCountdown'
import { useFadeIn } from '../hooks/useFadeIn'
import { departments } from '../data/departments'
import { specialPositions } from '../data/positions'
import { recruitmentConfig } from '../config/recruitment'

export function HomePage() {
  const countdown = useCountdown()
  const heroRef = useFadeIn<HTMLDivElement>()
  const statsRef = useFadeIn<HTMLDivElement>()
  const whyRef = useFadeIn<HTMLDivElement>()
  const roleRef = useFadeIn<HTMLDivElement>()
  const deptRef = useFadeIn<HTMLDivElement>()
  const programRef = useFadeIn<HTMLDivElement>()
  const ctaRef = useFadeIn<HTMLDivElement>()

  const ctaDisabled = !recruitmentConfig.scheduleConfirmed || !recruitmentConfig.registrationFormUrl

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg-wordmark" aria-hidden="true">REVOLUSI KARSA</div>
        <div className="hero__glow-left" aria-hidden="true" />
        <div className="hero__glow-purple" aria-hidden="true" />

        <div className="hero__inner" ref={heroRef}>
          {/* Left column */}
          <div>
            <span className="hero__pill-gunadarma fade-in">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Universitas Gunadarma
            </span>

            <h1 id="hero-title" className="hero__title fade-in">
              OPREC Staff<br />
              <span>BEM FIKTI UG</span>
            </h1>

            <p className="hero__org fade-in">
              Badan Eksekutif Mahasiswa<br />
              Fakultas Ilmu Komputer dan Teknologi Informasi<br />
              Universitas Gunadarma
            </p>

            <p className="hero__tagline fade-in">Kabinet Revolusi Karsa · 2026/2027</p>
            <p className="hero__tagline-sub fade-in">#Revolusi Pergerakan, Ciptakan Perubahan</p>

            {/* Countdown */}
            <div className="countdown fade-in" role="timer" aria-label="Hitung mundur pembukaan pendaftaran" aria-live="off">
              <div className="countdown__unit">
                <span className="countdown__num">{countdown.days}</span>
                <span className="countdown__label">Hari</span>
              </div>
              <span className="countdown__sep" aria-hidden="true">:</span>
              <div className="countdown__unit">
                <span className="countdown__num">{countdown.hours}</span>
                <span className="countdown__label">Jam</span>
              </div>
              <span className="countdown__sep" aria-hidden="true">:</span>
              <div className="countdown__unit">
                <span className="countdown__num">{countdown.minutes}</span>
                <span className="countdown__label">Menit</span>
              </div>
              <span className="countdown__sep" aria-hidden="true">:</span>
              <div className="countdown__unit">
                <span className="countdown__num">{countdown.seconds}</span>
                <span className="countdown__label">Detik</span>
              </div>
            </div>

            {!recruitmentConfig.scheduleConfirmed && (
              <p className="countdown__status" role="status">
                Jadwal pendaftaran akan segera diumumkan
              </p>
            )}
            {countdown.reached && (
              <p className="countdown__status" role="status" style={{ color: 'var(--blue-400)' }}>
                Pendaftaran sudah dibuka!
              </p>
            )}

            {/* CTAs */}
            <div className="hero__actions fade-in">
              {ctaDisabled ? (
                <span className="badge-soon" role="status">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                  </svg>
                  Pendaftaran Segera Dibuka
                </span>
              ) : (
                <a
                  href={recruitmentConfig.registrationFormUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Daftar Sekarang
                </a>
              )}
              <Link to="/departemen" className="btn btn-outline">
                Lihat Departemen
              </Link>
              <Link to="/alur-pendaftaran" className="btn btn-outline">
                Alur Pendaftaran
              </Link>
            </div>

            <div className="hero__note fade-in">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" />
              </svg>
              <span>
                Informasi resmi diumumkan melalui Instagram{' '}
                <strong>@ug_bemfikti</strong>.
              </span>
            </div>
          </div>

          {/* Right panel */}
          <div className="fade-in">
            <div className="hero__panel" aria-label="Daftar departemen dan posisi">
              <div className="panel__header">
                <div>
                  <p className="panel__label">Pendaftaran Terbuka</p>
                  <p className="panel__count">7 Departemen · 15 Biro · 2 Posisi Khusus</p>
                </div>
              </div>
              <ul className="panel__list">
                {departments.map((dep) => (
                  <li key={dep.id}>
                    <Link to={`/departemen/${dep.slug}`} className="panel__item">
                      <span className="panel__item-name">{dep.shortName}</span>
                      <span className="panel__item-meta">
                        <span>{dep.biro.length} biro</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                          <path d="m9 6 6 6-6 6" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
                {/* Special positions */}
                <li>
                  <div
                    style={{
                      padding: 'var(--space-2) var(--space-5)',
                      borderTop: '1px solid rgba(255,255,255,0.07)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                      Posisi Khusus
                    </p>
                  </div>
                </li>
                {specialPositions.map((pos) => (
                  <li key={pos.id}>
                    <Link to={`/posisi/${pos.slug}`} className="panel__item">
                      <span className="panel__item-name">{pos.name}</span>
                      <span className="panel__item-meta">
                        <span style={{ color: 'var(--blue-400)', fontWeight: 500, fontSize: '0.7rem' }}>Terbuka</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                          <path d="m9 6 6 6-6 6" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section aria-label="Statistik organisasi" ref={statsRef}>
        <div className="stats-bar">
          <div className="stats-bar__inner fade-in">
            <div className="stat-item">
              <span className="stat-label">Departemen</span>
              <span className="stat-value">7</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Biro</span>
              <span className="stat-value">15</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Posisi Khusus</span>
              <span className="stat-value">2</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Pilar Kabinet</span>
              <span className="stat-value stat-value--purple">4</span>
            </div>
          </div>
        </div>
      </section>


      {/* ── 3. MENGAPA BERGABUNG ── */}
      <section id="mengapa" className="section section-bg-subtle" aria-labelledby="why-title" ref={whyRef}>
        <div className="container">
          <p className="eyebrow fade-in">Alasan Bergabung</p>
          <h2 id="why-title" className="section-title fade-in">Mengapa Bergabung BEM FIKTI?</h2>
          <p className="section-body fade-in">
            Organisasi menjadi sarana nyata untuk mengasah kepemimpinan, komunikasi, dan skill praktis yang melengkapi kompetensi akademik agar siap bersaing setelah lulus.
          </p>

          <ul className="pillar-grid" role="list">
            {[
              {
                num: 'Pilar 1', title: 'Kebersamaan',
                body: 'Membangun lingkungan organisasi yang inklusif, suportif, dan berlandaskan kekeluargaan untuk mempererat persatuan antarmahasiswa FIKTI.',
                icon: <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />,
              },
              {
                num: 'Pilar 2', title: 'Advokasi',
                body: 'Menghadirkan layanan advokasi aspirasi yang responsif dan transparan, sekaligus memperkuat kolaborasi harmonis bersama civitas akademika.',
                icon: <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1ZM16 8.5a5 5 0 0 1 0 7M19 5.5a9 9 0 0 1 0 13" />,
              },
              {
                num: 'Pilar 3', title: 'Potensi',
                body: 'Memfasilitasi pengembangan kapasitas mahasiswa melalui peningkatan keahlian, kepemimpinan, dan kreativitas guna mencetak mahasiswa berdaya saing.',
                icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
              },
              {
                num: 'Pilar 4', title: 'Aksi Nyata',
                body: 'Menginisiasi kepedulian sosial yang solutif dan aplikatif melalui pemanfaatan ilmu teknologi demi memberi dampak bagi masyarakat sekitar.',
                icon: <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />,
              },
            ].map((p) => (
              <li key={p.num} className="card pillar-card fade-in">
                <div className="pillar-card__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    {p.icon}
                  </svg>
                </div>
                <p className="pillar-card__num">{p.num}</p>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__body">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. PERAN STAF ── */}
      <section className="section section-bg-white" aria-labelledby="role-title" ref={roleRef}>
        <div className="container">
          <div className="role-grid">
            <div>
              <p className="eyebrow fade-in">Struktur Organisasi</p>
              <h2 id="role-title" className="section-title fade-in">Peran Staf Biro</h2>
              <p className="section-body fade-in">
                Staf biro adalah eksekutor lapangan yang menjalankan program kerja sehari-hari, mendukung kepala biro, dan memastikan kegiatan berjalan dari awal sampai selesai.
              </p>
            </div>
            <ol className="role-list" aria-label="Struktur organisasi BEM FIKTI">
              {[
                {
                  n: '1', variant: 'light', title: 'Kepala Departemen', badge: null,
                  desc: 'Pemimpin departemen yang duduk di jajaran Badan Pengurus Harian untuk merumuskan arah kebijakan kabinet dan membimbing kepala biro.',
                },
                {
                  n: '2', variant: 'light', title: 'Kepala Biro', badge: null,
                  desc: 'Manajer operasional yang menerjemahkan arahan Kepala Departemen ke rencana teknis, membagi jobdesk, dan memantau kinerja staf.',
                },
                {
                  n: '3', variant: 'dark', title: 'Staf Biro', badge: 'Posisi dibuka',
                  desc: 'Eksekutor lapangan yang menjalankan tugas teknis harian, kepanitiaan, dan operasional kegiatan biro dari awal sampai selesai.',
                },
              ].map((r) => (
                <li key={r.n} className="role-item fade-in">
                  <span className={`role-num role-num--${r.variant}`} aria-hidden="true">{r.n}</span>
                  <div>
                    <p className="role-title">
                      {r.title}
                      {r.badge && <span className="role-badge">{r.badge}</span>}
                    </p>
                    <p className="role-desc">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 5. DEPARTEMEN PREVIEW ── */}
      <section className="section" aria-labelledby="dep-preview-title" ref={deptRef}>
        <div className="container">
          <p className="eyebrow fade-in">7 Departemen</p>
          <h2 id="dep-preview-title" className="section-title fade-in">Pilih Jalurmu</h2>
          <p className="section-body fade-in">
            Setiap departemen membuka peluang yang berbeda. Temukan yang paling sesuai dengan minat dan kompetensimu.
          </p>

          {/* All-biro announcement banner */}
          <div className="all-biro-banner fade-in" role="note">
            <div className="all-biro-banner__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M22 8.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z" />
                <path d="M6 12h.01M12 12h.01M18 12h.01" />
              </svg>
            </div>
            <div className="all-biro-banner__content">
              <p className="all-biro-banner__title">
                Open Recruitment Staff BEM FIKTI 2026/2027 dibuka untuk seluruh biro.
              </p>
              <p className="all-biro-banner__body">
                Kamu bisa mendaftar ke biro mana saja di antara 7 departemen yang tersedia, sesuai minat dan kompetensimu.
              </p>
            </div>
          </div>

          <div className="dep-grid">
            {departments.map((dep) => (
              <article key={dep.id} className="card dep-card fade-in">
                <span className={`dep-card__tag dep-card__tag--${dep.category === 'Eksternal' ? 'ext' : 'int'}`}>
                  {dep.category}
                </span>
                <h3 className="dep-card__name">{dep.shortName}</h3>
                <p className="dep-card__tagline">{dep.tagline}</p>
                <ul className="dep-card__biro" aria-label="Biro dalam departemen ini">
                  {dep.biro.map((b) => (
                    <li key={b.name} className="dep-card__biro-item">
                      <span className="dep-card__biro-dot" aria-hidden="true" />
                      {b.name}
                    </li>
                  ))}
                </ul>
                <div className="dep-card__footer">
                  <Link to={`/departemen/${dep.slug}`} className="dep-card__link" aria-label={`Lihat detail ${dep.shortName}`}>
                    Lihat Departemen
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ── 6. PROGRAM UNGGULAN ── */}
      <section className="section section-bg-forest" aria-labelledby="program-title" ref={programRef}>
        <div className="container">
          <p className="eyebrow eyebrow--white fade-in" style={{ color: 'rgba(255,255,255,0.5)' }}>Program Kerja</p>
          <h2 id="program-title" className="section-title section-title--white fade-in">Program Unggulan</h2>

          <ul className="program-grid" role="list">
            {[
              { num: '01', title: 'Hero of Education and Social', desc: 'Pengabdian masyarakat di desa yang membutuhkan perhatian dan memiliki keterbatasan sosial.' },
              { num: '02', title: 'FIKTI Space 5.0', desc: 'Kompetisi olahraga, seni, dan esports untuk meningkatkan kreativitas dan sportivitas mahasiswa.' },
              { num: '03', title: 'TechnoFair 13.0', desc: 'Seminar, workshop, dan kompetisi di bidang perkembangan industri teknologi informasi.' },
              { num: '04', title: 'Internship with BEM FIKTI', desc: 'Program yang memfasilitasi mahasiswa untuk terlibat langsung dalam proyek dan alur kerja BEM FIKTI.' },
            ].map((p) => (
              <li key={p.num} className="program-card fade-in">
                <p className="program-card__num">{p.num}</p>
                <h3 className="program-card__title">{p.title}</h3>
                <p className="program-card__desc">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 7. CTA PENUTUP ── */}
      <section className="section" aria-labelledby="cta-title" ref={ctaRef}>
        <div className="container">
          <div className="cta-band fade-in">
            <div className="cta-band__bg" aria-hidden="true" />
            <div>
              <h2 id="cta-title" className="cta-band__title">Revolusi Pergerakan, Ciptakan Perubahan</h2>
              <p className="cta-band__body">
                Gerak adalah jalan untuk menemukan arah kembali. Perubahan tidak menunggu keadaan membaik, melainkan lahir dari langkah pertama yang berani.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flexShrink: 0 }}>
              {ctaDisabled ? (
                <span className="badge-soon" role="status">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                  </svg>
                  Jadwal Akan Diumumkan
                </span>
              ) : (
                <a href={recruitmentConfig.registrationFormUrl!} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Daftar Sekarang
                </a>
              )}
              <Link to="/alur-pendaftaran" className="btn btn-outline" style={{ justifyContent: 'center' }}>
                Lihat Alur Pendaftaran
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
