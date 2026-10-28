export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__meta-name">Kabinet Revolusi Karsa · 2026/2027</p>
          <p className="footer__meta-copy">
            © 2026 BEM FIKTI Universitas Gunadarma
          </p>
          <p style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-1)', color: 'rgba(255,255,255,0.35)' }}>
            Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi
          </p>
        </div>
        <ul className="footer__social" aria-label="Media sosial BEM FIKTI">
          <li>
            <a
              href="https://instagram.com/ug_bemfikti"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram BEM FIKTI"
              title="Instagram @ug_bemfikti"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".5" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@ug.bemfikti"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="TikTok BEM FIKTI"
              title="TikTok @ug.bemfikti"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M14 3v11a4 4 0 1 1-4-4M14 3c.5 2.5 2.5 4.5 5 5" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@bemfikti"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="YouTube BEM FIKTI"
              title="YouTube BEM FIKTI"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="2.5" y="5" width="19" height="14" rx="4" />
                <path d="m10 9 5 3-5 3V9Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/bemfikti/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn BEM FIKTI"
              title="LinkedIn BEM FIKTI"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13a2.5 2.5 0 0 1 5 0v3" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__purple-bar" aria-hidden="true" />
    </footer>
  )
}
