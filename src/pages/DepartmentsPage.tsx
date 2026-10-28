import { useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { departments, type Department } from '../data/departments'
import { specialPositions } from '../data/positions'

type Category = 'internal' | 'eksternal' | 'posisi-khusus'

const VALID_CATEGORIES: Category[] = ['internal', 'eksternal', 'posisi-khusus']

export function DepartmentsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  // Plain ref for the tab-reveal effect — not tied to useFadeIn's observer.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionRef = useRef<any>(null)

  const rawKategori = searchParams.get('kategori') ?? 'internal'
  const kategori: Category = VALID_CATEGORIES.includes(rawKategori as Category)
    ? (rawKategori as Category)
    : 'internal'

  useEffect(() => {
    document.title = 'Departemen | OPREC Staff BEM FIKTI 2026/2027'
  }, [])

  // The IntersectionObserver in useFadeIn only observes elements present on
  // initial mount. Cards that appear when switching tabs are rendered after
  // mount and never receive .visible, leaving them at opacity 0. This effect
  // runs after each tab change and forces .visible on any unresolved cards.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const reveal = () => {
      el.querySelectorAll<HTMLElement>('.fade-in:not(.visible)').forEach((t) =>
        t.classList.add('visible'),
      )
    }
    // Immediate pass for elements already in DOM
    reveal()
    // Next frame pass for React elements rendered after this effect fires
    const id = requestAnimationFrame(reveal)
    return () => cancelAnimationFrame(id)
  }, [kategori])

  function setKategori(k: Category) {
    setSearchParams({ kategori: k }, { replace: false })
  }

  const filterTabs: { label: string; key: Category; count: number }[] = [
    {
      label: 'Internal',
      key: 'internal',
      count: departments.filter((d) => d.category === 'Internal').length,
    },
    {
      label: 'Eksternal',
      key: 'eksternal',
      count: departments.filter((d) => d.category === 'Eksternal').length,
    },
    {
      label: 'Posisi Khusus',
      key: 'posisi-khusus',
      count: specialPositions.length,
    },
  ]

  const filteredDepts: Department[] =
    kategori === 'internal'
      ? departments.filter((d) => d.category === 'Internal')
      : kategori === 'eksternal'
      ? departments.filter((d) => d.category === 'Eksternal')
      : []

  const showPosisiKhusus = kategori === 'posisi-khusus'

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="page-hero__inner">
          <nav className="breadcrumb" aria-label="Navigasi halaman">
            <Link to="/">Beranda</Link>
            <span className="breadcrumb__sep" aria-hidden="true">/</span>
            <span className="breadcrumb__current" aria-current="page">Departemen</span>
          </nav>
          <h1 className="page-hero__title">Departemen BEM FIKTI</h1>
          <p className="page-hero__body">
            7 departemen dengan 15 biro, ditambah posisi Sekretaris dan Bendahara.
            Temukan departemen atau posisi yang paling sesuai dengan minatmu.
          </p>
        </div>
      </div>

      <section className="section section-bg-white" ref={sectionRef}>
        <div className="container">

          {/* ── Category tabs ── */}
          <div
            role="tablist"
            aria-label="Kategori departemen"
            className="dep-category-tabs"
          >
            {filterTabs.map((tab) => {
              const isActive = kategori === tab.key
              return (
                <button
                  key={tab.key}
                  id={`dep-tab-${tab.key}`}
                  type="button"
                  role="tab"
                  onClick={() => setKategori(tab.key)}
                  aria-selected={isActive}
                  aria-controls={`dep-panel-${tab.key}`}
                  className={[
                    'dep-tab',
                    isActive ? 'dep-tab--active' : '',
                    tab.key === 'posisi-khusus' ? 'dep-tab--special' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <span className="dep-tab__label">{tab.label}</span>
                  <span className="dep-tab__count" aria-hidden="true">
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* ── Internal panel ── */}
          <div
            id="dep-panel-internal"
            role="tabpanel"
            aria-labelledby="dep-tab-internal"
            hidden={kategori !== 'internal'}
          >
            {kategori === 'internal' && (
              <>
                <h2 id="dep-list-title" className="dep-section-label">
                  Departemen Internal
                </h2>
                <div className="dep-grid" style={{ marginTop: 0 }}>
                  {filteredDepts.map((dep) => (
                    <DeptCard key={dep.id} dep={dep} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Eksternal panel ── */}
          <div
            id="dep-panel-eksternal"
            role="tabpanel"
            aria-labelledby="dep-tab-eksternal"
            hidden={kategori !== 'eksternal'}
          >
            {kategori === 'eksternal' && (
              <>
                <h2 className="dep-section-label">
                  Departemen Eksternal
                </h2>
                <div className="dep-grid" style={{ marginTop: 0 }}>
                  {filteredDepts.map((dep) => (
                    <DeptCard key={dep.id} dep={dep} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Posisi Khusus panel ── */}
          <div
            id="dep-panel-posisi-khusus"
            role="tabpanel"
            aria-labelledby="dep-tab-posisi-khusus"
            hidden={!showPosisiKhusus}
          >
            {showPosisiKhusus && (
              <div className="posisi-khusus-section">
                <h2 className="dep-section-label dep-section-label--special">
                  Posisi Khusus
                </h2>
                <p className="posisi-khusus-section__desc">
                  Dua posisi ini berada di luar struktur departemen dan mendukung langsung
                  kinerja Sekretaris Umum dan Bendahara Umum BEM FIKTI.
                </p>

                <div className="open-position-grid">
                  {specialPositions.map((pos) => (
                    <article
                      key={pos.id}
                      className="open-position-card open-position-card--special fade-in"
                      aria-label={`Posisi ${pos.name}`}
                    >
                      <span className="open-position-card__badge open-position-card__badge--special">
                        Posisi Khusus
                      </span>
                      <h3 className="open-position-card__name">{pos.name}</h3>
                      <p className="open-position-card__duty">
                        {pos.id === 'sekretaris'
                          ? 'Membantu Sekretaris Umum.'
                          : 'Membantu Bendahara Umum.'}
                      </p>
                      <div className="open-position-card__footer open-position-card__footer--special">
                        <Link
                          to={`/posisi/${pos.slug}`}
                          className="open-position-card__link open-position-card__link--special"
                          aria-label={`Lihat detail posisi ${pos.name}`}
                        >
                          Lihat Posisi
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
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  )
}

function DeptCard({ dep }: { dep: Department }) {
  return (
    <article className="card dep-card fade-in" aria-label={dep.name}>
      <span
        className={`dep-card__tag dep-card__tag--${dep.category === 'Eksternal' ? 'ext' : 'int'}`}
      >
        {dep.category}
      </span>
      <h3 className="dep-card__name">{dep.shortName}</h3>
      <p className="dep-card__tagline">{dep.tagline}</p>

      <ul className="dep-card__biro" aria-label={`Biro dalam ${dep.shortName}`}>
        {dep.biro.map((b) => (
          <li key={b.name} className="dep-card__biro-item">
            <span className="dep-card__biro-dot" aria-hidden="true" />
            {b.name}
          </li>
        ))}
      </ul>

      <div className="dep-card__footer">
        <Link
          to={`/departemen/${dep.slug}`}
          className="dep-card__link"
          aria-label={`Lihat detail Departemen ${dep.shortName}`}
        >
          Lihat Departemen
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
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
