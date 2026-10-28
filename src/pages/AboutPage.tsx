import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'

export function AboutPage() {
  const contentRef = useFadeIn<HTMLDivElement>()

  useEffect(() => {
    document.title = 'Tentang BEM FIKTI | OPREC Staff 2026/2027'
  }, [])

  return (
    <>
      {/* Page hero */}
      <div className="page-hero" role="banner">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="page-hero__inner">
          <nav className="breadcrumb" aria-label="Navigasi halaman">
            <Link to="/">Beranda</Link>
            <span className="breadcrumb__sep" aria-hidden="true">/</span>
            <span className="breadcrumb__current" aria-current="page">Tentang</span>
          </nav>
          <h1 className="page-hero__title">Tentang BEM FIKTI</h1>
          <p className="page-hero__body">
            Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi Universitas Gunadarma.
          </p>
        </div>
      </div>

      <div ref={contentRef}>
        {/* Profil — dengan foto + overlay */}
        <section className="section section-bg-white" aria-labelledby="profil-title">
          <div className="container">
            {/* Photo hero dengan overlay */}
            <div className="about-photo-hero fade-in">
              <img
                src="/assets/img/ldk-bem-fikti.jpg"
                alt="Latihan Dasar Kepemimpinan BEM FIKTI Universitas Gunadarma"
                style={{ objectPosition: 'center 60%' }}
              />
              <div className="about-photo-hero__overlay" aria-hidden="true" />
              <div className="about-photo-hero__caption">
                <p className="about-photo-hero__caption-text">BEM FIKTI</p>
                <p className="about-photo-hero__caption-sub">
                  Universitas Gunadarma · Kabinet Revolusi Karsa 2026/2027
                </p>
              </div>
            </div>

            <p className="eyebrow fade-in">Profil Organisasi</p>
            <h2 id="profil-title" className="section-title fade-in">BEM FIKTI Universitas Gunadarma</h2>
            <div className="about-content">
              <p className="fade-in">
                Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi (BEM FIKTI) Universitas Gunadarma adalah organisasi kemahasiswaan tingkat fakultas yang mewadahi aspirasi, kreativitas, dan pengembangan diri mahasiswa FIKTI.
              </p>
              <p className="fade-in">
                BEM FIKTI berperan sebagai representasi mahasiswa sekaligus mitra strategis institusi dalam menjalankan tri dharma perguruan tinggi, khususnya pada dimensi pengabdian kepada masyarakat dan kehidupan kemahasiswaan.
              </p>
              <p className="fade-in">
                Pada periode 2026/2027, BEM FIKTI mengusung kabinet bertajuk <strong>Revolusi Karsa</strong> dengan semangat "#Revolusi Pergerakan, Ciptakan Perubahan", mendorong mahasiswa untuk bergerak aktif, berpikir kritis, dan memberi dampak nyata bagi kampus maupun masyarakat.
              </p>
            </div>
          </div>
        </section>

        {/* Visi Misi — dengan foto split */}
        <section className="section" aria-labelledby="visimisi-title">
          <div className="container">
            <p className="eyebrow fade-in">Arah Gerak</p>
            <h2 id="visimisi-title" className="section-title fade-in">Visi dan Misi</h2>

            {/* Split: Kiri (Visi atas, Misi bawah) | Kanan (Foto) */}
            <div className="about-split fade-in" style={{ marginTop: 'var(--space-8)' }}>
              {/* Sisi Kiri: Visi (atas) dan Misi (bawah) */}
              <div className="about-split__content">
                {/* Visi */}
                <div className="visi-card visi-card--green">
                  <p className="visi-card__label">Visi</p>
                  <h3 className="visi-card__title">
                    Mewujudkan BEM FIKTI yang berdampak, inklusif, dan adaptif dalam memberdayakan mahasiswa FIKTI
                  </h3>
                </div>

                {/* Misi */}
                <div className="visi-card visi-card--purple">
                  <p className="visi-card__label">Misi</p>
                  <ul className="visi-card__list" role="list">
                    {[
                      'Membangun ekosistem organisasi yang inklusif dan suportif bagi seluruh mahasiswa FIKTI.',
                      'Memperkuat layanan advokasi dan aspirasi mahasiswa secara responsif dan transparan.',
                      'Mendorong pengembangan potensi mahasiswa melalui kegiatan akademik, seni, olahraga, dan sosial.',
                      'Menjalin kemitraan strategis dengan berbagai pihak untuk memperluas dampak program BEM FIKTI.',
                      'Menginisiasi aksi nyata yang memanfaatkan kompetensi teknologi informasi untuk masyarakat.',
                    ].map((misi, i) => (
                      <li key={i} className="visi-card__list-item">
                        <span className="visi-card__list-bullet" aria-hidden="true" />
                        {misi}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sisi Kanan: Foto samping Visi & Misi */}
              <div className="about-split__img">
                <img
                  src="/assets/img/kegiatan-bem-fikti.jpg"
                  alt="Kegiatan BEM FIKTI Universitas Gunadarma"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div className="about-split__img-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pilar */}
        <section className="section section-bg-subtle" aria-labelledby="pilar-title">
          <div className="container">
            <p className="eyebrow fade-in">Landasan Kabinet</p>
            <h2 id="pilar-title" className="section-title fade-in">4 Pilar Revolusi Karsa</h2>

            <div className="dep-grid">
              {[
                { num: '01', label: 'Kebersamaan', color: 'var(--blue-700)', desc: 'Membangun lingkungan organisasi yang inklusif, suportif, dan berlandaskan kekeluargaan.' },
                { num: '02', label: 'Advokasi', color: 'var(--blue-700)', desc: 'Menghadirkan layanan advokasi aspirasi yang responsif dan transparan bagi mahasiswa FIKTI.' },
                { num: '03', label: 'Potensi', color: 'var(--green-700)', desc: 'Memfasilitasi pengembangan keahlian, kepemimpinan, dan kreativitas mahasiswa.' },
                { num: '04', label: 'Aksi Nyata', color: 'var(--green-700)', desc: 'Menginisiasi kepedulian sosial yang solutif melalui pemanfaatan ilmu teknologi mahasiswa.' },
              ].map((p) => (
                <div key={p.num} className="card pillar-card fade-in">
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: p.color, lineHeight: 1, marginBottom: 'var(--space-3)' }}>
                    {p.num}
                  </p>
                  <h3 className="pillar-card__title">{p.label}</h3>
                  <p className="pillar-card__body">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Informasi belum terverifikasi */}
        <section className="section section-bg-white">
          <div className="container">
            <div style={{
              padding: 'var(--space-5) var(--space-6)',
              background: 'var(--blue-50)',
              border: '1px solid rgba(61,79,187,0.2)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              gap: 'var(--space-4)',
              alignItems: 'flex-start',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" />
              </svg>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--blue-800)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                  Informasi Masih Dikonfirmasi
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--blue-700)', lineHeight: 1.6 }}>
                  Detail visi, misi, dan profil resmi kabinet akan diperbarui setelah dokumen resmi tersedia. Pantau Instagram <strong>@ug_bemfikti</strong> untuk informasi terbaru.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
