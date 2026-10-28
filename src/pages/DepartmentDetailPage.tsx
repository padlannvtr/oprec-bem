import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getDepartmentBySlug } from '../data/departments'
import { useFadeIn } from '../hooks/useFadeIn'

export function DepartmentDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const dep = slug ? getDepartmentBySlug(slug) : undefined
  const ref = useFadeIn<HTMLDivElement>()

  useEffect(() => {
    if (dep) document.title = `${dep.shortName} | OPREC Staff BEM FIKTI 2026/2027`
  }, [dep])

  if (!dep) return <Navigate to="/404" replace />

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
            <span className="breadcrumb__current" aria-current="page">{dep.shortName}</span>
          </nav>

          <Link to="/departemen" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Semua Departemen
          </Link>

          <span
            className={`dep-card__tag dep-card__tag--${dep.category === 'Eksternal' ? 'ext' : 'int'}`}
            style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}
          >
            {dep.category}
          </span>

          <h1 className="page-hero__title">{dep.name}</h1>
          <p className="page-hero__body">{dep.tagline}</p>
        </div>
      </div>

      {/* Content */}
      <div ref={ref}>
        {/* About */}
        <section className="section section-bg-white" aria-labelledby={`about-${dep.id}`}>
          <div className="container">
            <p className="eyebrow fade-in">Tentang Departemen</p>
            <h2 id={`about-${dep.id}`} className="section-title fade-in">{dep.name}</h2>
            <p className="section-body fade-in" style={{ maxWidth: '72ch' }}>{dep.about}</p>

            {/* Department-level programs (e.g. GEMA BUMI for SosMas) */}
            {dep.deptPrograms.length > 0 && (
              <div style={{ marginTop: 'var(--space-8)' }} className="fade-in">
                <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Program Departemen</p>
                <div className="dep-grid" style={{ marginTop: 0 }}>
                  {dep.deptPrograms.map((prog, i) => (
                    <div key={i} className="card pillar-card">
                      <p className="pillar-card__num">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="pillar-card__title">{prog.name}</h3>
                      <p className="pillar-card__body">{prog.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Biro sections */}
        {dep.biro.map((biro, bi) => (
          <section
            key={bi}
            className={`section ${bi % 2 === 0 ? 'section-bg-subtle' : 'section-bg-white'}`}
            aria-labelledby={`biro-${dep.id}-${bi}`}
          >
            <div className="container">
              <div className="dept-detail-grid">
                {/* Main: biro info + programs */}
                <div>
                  {/* Biro header */}
                  <div className="fade-in">
                    <span
                      className={`dep-card__tag dep-card__tag--${dep.category === 'Eksternal' ? 'ext' : 'int'}`}
                      style={{ marginBottom: 'var(--space-3)' }}
                    >
                      Biro {bi + 1} dari {dep.biro.length}
                    </span>
                    <h2
                      id={`biro-${dep.id}-${bi}`}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(var(--text-xl), 3vw, var(--text-3xl))',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--space-4)',
                      }}
                    >
                      {biro.name}
                    </h2>
                    <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '72ch' }}>
                      {biro.description}
                    </p>
                  </div>

                  {/* Program kerja biro */}
                  {biro.programs.length > 0 && (
                    <div style={{ marginTop: 'var(--space-8)' }} className="fade-in">
                      <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
                        Program Kerja · {biro.programs.length} program
                      </p>
                      {biro.programs.map((prog, pi) => (
                        <div key={pi} className="dept-program-item fade-in">
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                            <span style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: 'var(--text-xs)',
                              fontWeight: 700,
                              color: dep.category === 'Internal' ? 'var(--purple-700)' : 'var(--green-700)',
                              background: dep.category === 'Internal' ? 'var(--purple-50)' : 'var(--green-50)',
                              padding: '2px 8px',
                              borderRadius: '999px',
                              flexShrink: 0,
                              marginTop: 2,
                              whiteSpace: 'nowrap',
                            }}>
                              {String(pi + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <p className="dept-program-item__name">{prog.name}</p>
                              <p className="dept-program-item__desc">{prog.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {biro.programs.length === 0 && (
                    <div style={{
                      marginTop: 'var(--space-6)',
                      padding: 'var(--space-4)',
                      background: 'var(--surface-muted)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-muted)',
                    }} className="fade-in">
                      Detail program kerja akan diumumkan bersama jadwal resmi.
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <aside>
                  <div className="dept-sidebar-card fade-in">
                    <p className="dept-sidebar-card__title">Biro dalam {dep.shortName}</p>
                    <div className="dept-sidebar-card__biro">
                      {dep.biro.map((b, idx) => (
                        <div
                          key={idx}
                          className="dept-sidebar-card__biro-item"
                          style={{
                            borderLeft: b.name === biro.name
                              ? `2px solid ${dep.category === 'Internal' ? 'var(--purple-600)' : 'var(--green-600)'}`
                              : '2px solid transparent',
                            fontWeight: b.name === biro.name ? 600 : 400,
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke={b.name === biro.name
                              ? dep.category === 'Internal' ? 'var(--purple-600)' : 'var(--green-600)'
                              : 'var(--gray-400)'}
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                            <path d="m9 6 6 6-6 6" />
                          </svg>
                          {b.name}
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border)' }}>
                      <Link to="/alur-pendaftaran" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                        Lihat Alur Seleksi
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        ))}

        {/* Back / navigation */}
        <section className="section section-bg-white">
          <div className="container">
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }} className="fade-in">
              <Link to="/departemen" className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
                Semua Departemen
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
