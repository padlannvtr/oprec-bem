import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  useEffect(() => {
    document.title = '404 – Halaman Tidak Ditemukan | BEM FIKTI'
  }, [])

  return (
    <div className="not-found" role="main" aria-label="Halaman tidak ditemukan">
      <p className="not-found__code" aria-hidden="true">404</p>
      <h1 className="not-found__title">Halaman Tidak Ditemukan</h1>
      <p className="not-found__body" style={{ marginTop: 'var(--space-3)' }}>
        Halaman yang kamu cari tidak ada atau telah dipindahkan.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-8)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">
          Kembali ke Beranda
        </Link>
        <Link to="/departemen" className="btn btn-outline">
          Lihat Departemen
        </Link>
      </div>
    </div>
  )
}
