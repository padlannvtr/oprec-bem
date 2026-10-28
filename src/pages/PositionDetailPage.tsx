import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getPositionBySlug } from '../data/positions'
import { useFadeIn } from '../hooks/useFadeIn'
import { recruitmentConfig } from '../config/recruitment'

export function PositionDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const position = slug ? getPositionBySlug(slug) : undefined
  const ref = useFadeIn<HTMLDivElement>()

  useEffect(() => {
    if (position) {
      document.title = `${position.name} | OPREC Staff BEM FIKTI 2026/2027`
    }
  }, [position])

  if (!position) return <Navigate to="/404" replace />

  const ctaDisabled =
    !recruitmentConfig.scheduleConfirmed || !recruitmentConfig.registrationFormUrl

  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="page-hero__inner">
          <nav className="breadcrumb" aria-label="Navigasi halaman">
            <Link to="/">Beranda</Link>
            <span className="breadcrumb__sep" aria-hidden="true">/</span>
            <Link to="/departemen">Departemen</Link>
            <span className="breadcrumb__sep" aria-hidden="true">/</span>
            <span className="breadcrumb__current" aria-current="page">
              {position.name}
            </span>
          </nav>

          <Link to="/departemen" className="back-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Semua Posisi
          </Link>

          <span
            className="dep-card__tag dep-card__tag--special"
            style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}
          >
            Posisi Khusus
          </span>

          <h1 className="page-hero__title">{position.name}</h1>
          <p className="page-hero__body">{position.description}</p>
        </div>
      </div>

      {/* Content */}
      <div ref={ref}>
        {/* Duties */}
        <section
          className="section section-bg-white"
          aria-labelledby={`duties-${position.id}`}
        >
          <div className="container">
            <div className="dept-detail-grid">
              <div>
                <p className="eyebrow fade-in">Tugas dan Tanggung Jawab</p>
                <h2
                  id={`duties-${position.id}`}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(var(--text-xl), 3vw, var(--text-3xl))',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 'var(--space-3) 0 var(--space-6)',
                  }}
                  className="fade-in"
                >
                  Peran {position.name}
                </h2>

                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)',
                  }}
                  aria-label={`Tugas ${position.name}`}
                >
                  {position.duties.map((duty, i) => (
                    <li
                      key={i}
                      className="dept-program-item fade-in"
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 700,
                          color: 'var(--green-700)',
                          background: 'var(--green-50)',
                          padding: '2px 8px',
                          borderRadius: '999px',
                          flexShrink: 0,
                          marginTop: 3,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p
                        style={{
                          fontSize: 'var(--text-base)',
                          lineHeight: 1.65,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {duty}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar */}
              <aside>
                <div className="dept-sidebar-card fade-in">
                  <p className="dept-sidebar-card__title">Posisi Terbuka</p>

                  {/* The other special position */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-2)',
                    }}
                  >
                    {(['sekretaris', 'bendahara'] as const).map((s) => (
                      <Link
                        key={s}
                        to={`/posisi/${s}`}
                        className="dept-sidebar-card__biro-item"
                        style={{
                          textDecoration: 'none',
                          borderLeft:
                            s === position.slug
                              ? '2px solid var(--green-600)'
                              : '2px solid transparent',
                          fontWeight: s === position.slug ? 600 : 400,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-3)',
                        }}
                        aria-current={s === position.slug ? 'page' : undefined}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={
                            s === position.slug
                              ? 'var(--green-600)'
                              : 'var(--gray-400)'
                          }
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="m9 6 6 6-6 6" />
                        </svg>
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </Link>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 'var(--space-6)',
                      paddingTop: 'var(--space-5)',
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    {ctaDisabled ? (
                      <span
                        className="badge-soon"
                        role="status"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 3" />
                        </svg>
                        Pendaftaran Segera Dibuka
                      </span>
                    ) : (
                      <a
                        href={recruitmentConfig.registrationFormUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        Daftar Sekarang
                      </a>
                    )}
                    <Link
                      to="/alur-pendaftaran"
                      className="btn btn-ghost"
                      style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-3)' }}
                    >
                      Lihat Alur Seleksi
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Back / navigation */}
        <section className="section section-bg-subtle">
          <div className="container">
            <div
              style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}
              className="fade-in"
            >
              <Link to="/departemen" className="btn btn-ghost">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
                Semua Posisi
              </Link>
              <Link to="/alur-pendaftaran" className="btn btn-primary">
                Lihat Alur Pendaftaran
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
