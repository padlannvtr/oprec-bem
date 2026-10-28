import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { recruitmentConfig } from '../config/recruitment'

const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Departemen', to: '/departemen' },
  { label: 'Alur Pendaftaran', to: '/alur-pendaftaran' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  /* Scrolled shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close sidebar on route change */
  useEffect(() => {
    closeSidebar()
  }, [location])

  /* Escape closes sidebar (R-32) */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) closeSidebar()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [sidebarOpen])

  /* Lock body scroll when sidebar open */
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    if (sidebarOpen) firstFocusRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  /* Close on viewport widening past mobile */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e: MediaQueryListEvent) => { if (e.matches) closeSidebar() }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)

  const ctaHref = recruitmentConfig.registrationFormUrl
  const ctaDisabled = !recruitmentConfig.scheduleConfirmed || !ctaHref

  return (
    <>
      <a href="#main-content" className="skip-link">Lewati ke konten</a>

      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="navbar__inner">
          <NavLink to="/" className="brand" aria-label="BEM FIKTI Universitas Gunadarma, beranda">
            <img
              src="/assets/img/logo-bem-fikti.jpg"
              alt="Logo BEM FIKTI Universitas Gunadarma"
              width={36}
              height={36}
              className="brand__logo"
            />
            <span className="brand__text">
              <span className="brand__name">BEM FIKTI</span>
              <span className="brand__sub">OPREC Staff 2026/2027</span>
            </span>
          </NavLink>

          {/* Desktop navigation */}
          <nav className="nav-desktop" aria-label="Menu utama">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {ctaDisabled ? (
            <span className="nav-cta nav-cta--disabled" aria-label="Pendaftaran belum dibuka">
              Segera Dibuka
            </span>
          ) : (
            <a
              href={ctaHref!}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Daftar Sekarang
            </a>
          )}

          {/* Hamburger */}
          <button
            type="button"
            className="nav-hamburger"
            aria-label="Buka menu navigasi"
            aria-expanded={sidebarOpen}
            aria-controls="mobile-sidebar"
            onClick={openSidebar}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Mobile sidebar */}
      <div
        id="mobile-sidebar"
        className={`sidebar${sidebarOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Menu navigasi"
        aria-modal="true"
        ref={sidebarRef}
      >
        <div className="sidebar__header">
          <div className="sidebar__brand">
            <img
              src="/assets/img/logo-bem-fikti.jpg"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              className="sidebar__logo"
            />
            <div className="sidebar__brand-text">
              <span className="sidebar__brand-name">BEM FIKTI UG</span>
              <span className="sidebar__brand-sub">OPREC 2026/2027</span>
            </div>
          </div>
          <button
            type="button"
            className="sidebar__close"
            aria-label="Tutup menu navigasi"
            onClick={closeSidebar}
            ref={firstFocusRef}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="sidebar__nav" aria-label="Menu seluler">
          <ul className="sidebar__nav-list">
            {navItems.map((item, i) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `sidebar__nav-item${isActive ? ' active' : ''}`}
                  onClick={closeSidebar}
                >
                  <span className="sidebar__nav-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__footer">
          <p className="sidebar__ig">
            Instagram: <strong>@ug_bemfikti</strong>
          </p>
        </div>
      </div>
    </>
  )
}


