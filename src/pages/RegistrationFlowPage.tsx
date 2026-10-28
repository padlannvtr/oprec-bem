import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { recruitmentConfig } from '../config/recruitment'
import { useFadeIn } from '../hooks/useFadeIn'

type StageStatus = 'pending' | 'active' | 'done'

interface Stage {
  num: string
  title: string
  description: string
  dateKey: keyof typeof recruitmentConfig.announcementDates | 'registrationStart' | 'registrationEnd'
}

const stages: Stage[] = [
  {
    num: '01',
    title: 'Pendaftaran Staff',
    description: 'Pendaftaran dan pengisian berkas calon staff melalui formulir resmi yang tersedia.',
    dateKey: 'registrationStart',
  },
  {
    num: '02',
    title: 'Pengumuman Seleksi Berkas',
    description: 'Pengumuman hasil seleksi berkas administrasi calon staff.',
    dateKey: 'documentSelection',
  },
  {
    num: '03',
    title: 'Wawancara Online',
    description: 'Pelaksanaan wawancara secara daring bagi peserta yang lolos seleksi berkas.',
    dateKey: 'onlineInterview',
  },
  {
    num: '04',
    title: 'Pengumuman Wawancara',
    description: 'Pengumuman hasil wawancara online.',
    dateKey: 'interviewAnnouncement',
  },
  {
    num: '05',
    title: 'Pengumuman Final',
    description: 'Pengumuman akhir calon staff yang dinyatakan lolos menjadi pengurus BEM FIKTI.',
    dateKey: 'finalAnnouncement',
  },
]

function getDate(key: Stage['dateKey']): string | null {
  if (key === 'registrationStart') return recruitmentConfig.registrationStart
  if (key === 'registrationEnd') return recruitmentConfig.registrationEnd
  return recruitmentConfig.announcementDates[key as keyof typeof recruitmentConfig.announcementDates]
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: 'Asia/Jakarta',
    }).format(new Date(iso)) + ' WIB'
  } catch {
    return 'Segera diumumkan'
  }
}

function getStageStatus(dateStr: string | null): StageStatus {
  if (!recruitmentConfig.scheduleConfirmed || !dateStr) return 'pending'
  const target = new Date(dateStr).getTime()
  const now = Date.now()
  if (isNaN(target)) return 'pending'
  if (now > target + 86400000) return 'done'
  if (now > target - 86400000) return 'active'
  return 'pending'
}

const REQ_UMUM = [
  'Mahasiswa aktif Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI) Universitas Gunadarma.',
  'Berada pada semester 3 saat pendaftaran (Angkatan 2025).',
  'Tidak sedang menjalani cuti akademik.',
  'Tidak sedang menjalani sanksi akademik maupun disiplin dari fakultas atau universitas.',
  'Tidak merangkap jabatan sebagai ketua atau pengurus inti organisasi kemahasiswaan lain yang waktunya bertabrakan dengan BEM.',
  'Bersedia mengikuti seluruh rangkaian seleksi dan mematuhi keputusan panitia seleksi.',
]

const REQ_BERKAS = [
  'Formulir pendaftaran online yang sudah diisi lengkap.',
  'Foto formal berpakaian rapi (format JPG/PNG).',
  'Scan atau foto KTM (Kartu Tanda Mahasiswa) aktif.',
  'Curriculum Vitae (CV) terbaru.',
]

const REQ_TAMBAHAN = [
  'Peserta hanya dapat mendaftar pada satu departemen.',
  'Keputusan panitia seleksi bersifat final dan tidak dapat diganggu gugat.',
  'Peserta yang tidak memenuhi persyaratan secara otomatis dinyatakan gugur.',
]

export function RegistrationFlowPage() {
  const ref = useFadeIn<HTMLDivElement>()
  const reqRef = useFadeIn<HTMLDivElement>()

  useEffect(() => {
    document.title = 'Alur Pendaftaran | OPREC Staff BEM FIKTI 2026/2027'
  }, [])

  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="page-hero__inner">
          <nav className="breadcrumb" aria-label="Navigasi halaman">
            <Link to="/">Beranda</Link>
            <span className="breadcrumb__sep" aria-hidden="true">/</span>
            <span className="breadcrumb__current" aria-current="page">Alur Pendaftaran</span>
          </nav>
          <h1 className="page-hero__title">Alur Pendaftaran</h1>
          <p className="page-hero__body">
            Lima tahapan seleksi Staff BEM FIKTI 2026/2027. Jadwal akan diperbarui setelah diumumkan secara resmi.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="section section-bg-white" aria-labelledby="timeline-title" ref={ref}>
        <div className="container">
          <p className="eyebrow fade-in">Timeline Seleksi</p>
          <h2 id="timeline-title" className="section-title fade-in">Tahapan Seleksi</h2>

          {!recruitmentConfig.scheduleConfirmed && (
            <div style={{
              marginTop: 'var(--space-6)',
              padding: 'var(--space-4) var(--space-5)',
              background: 'var(--green-50)',
              border: '1px solid rgba(22,163,74,0.25)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              gap: 'var(--space-3)',
              alignItems: 'flex-start',
              fontSize: 'var(--text-sm)',
              color: 'var(--green-800)',
            }} role="status" className="fade-in">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
              </svg>
              <span>
                Jadwal seleksi akan diumumkan melalui media sosial resmi BEM FIKTI setelah pendaftaran resmi dibuka.
                Pantau Instagram <strong>@ug_bemfikti</strong>.
              </span>
            </div>
          )}

          <ol className="timeline fade-in" aria-label="Tahapan seleksi staff">
            {stages.map((stage) => {
              const dateStr = getDate(stage.dateKey)
              const status: StageStatus = getStageStatus(dateStr)
              return (
                <li key={stage.num} className="timeline-item">
                  <span
                    className={`timeline-dot${status === 'done' ? ' timeline-dot--done' : status === 'active' ? ' timeline-dot--active' : ''}`}
                    aria-label={`Tahap ${stage.num}`}
                  >
                    {stage.num}
                  </span>
                  <div className="card timeline-card">
                    <h3 className="timeline-card__title">{stage.title}</h3>
                    <p className="timeline-card__desc">{stage.description}</p>
                    <p className={`timeline-card__date${!dateStr || !recruitmentConfig.scheduleConfirmed ? ' timeline-card__date--pending' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
                      </svg>
                      {dateStr && recruitmentConfig.scheduleConfirmed
                        ? formatDate(dateStr)
                        : 'Jadwal akan diumumkan'}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Persyaratan */}
      <section className="section" aria-labelledby="req-title" ref={reqRef}>
        <div className="container">
          <p className="eyebrow fade-in">Calon Staff BEM FIKTI</p>
          <h2 id="req-title" className="section-title fade-in">Persyaratan Pendaftaran</h2>

          <div className="gunadarma-badge fade-in" style={{ marginTop: 'var(--space-4)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Khusus mahasiswa aktif Universitas Gunadarma
          </div>

          <div className="req-grid">
            {/* Persyaratan Umum */}
            <div className="req-panel fade-in">
              <h3 className="req-panel__title">
                <span className="req-panel__icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                </span>
                Persyaratan Umum
              </h3>
              <ul className="req-list">
                {REQ_UMUM.map((r, i) => (
                  <li key={i} className="req-item">
                    <span className="req-check" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 4.5 4.5L19 7" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Berkas Administrasi */}
            <div className="req-panel fade-in">
              <h3 className="req-panel__title">
                <span className="req-panel__icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </span>
                Berkas Administrasi
              </h3>
              <ul className="req-list">
                {REQ_BERKAS.map((r, i) => (
                  <li key={i} className="req-item">
                    <span className="req-check" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 4.5 4.5L19 7" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Persyaratan Khusus (placeholder) */}
            <div className="req-panel fade-in">
              <h3 className="req-panel__title">
                <span className="req-panel__icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                    <path d="M9 12h6M9 16h6M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                  </svg>
                </span>
                Persyaratan Khusus
              </h3>
              <div style={{ padding: 'var(--space-4)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Persyaratan khusus per departemen akan diumumkan bersama jadwal resmi. Pantau Instagram <strong style={{ color: 'var(--text-secondary)' }}>@ug_bemfikti</strong> untuk informasi terbaru.
              </div>
            </div>

            {/* Ketentuan Tambahan */}
            <div className="req-panel fade-in">
              <h3 className="req-panel__title">
                <span className="req-panel__icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
                    <circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                </span>
                Ketentuan Tambahan
              </h3>
              <ul className="req-list">
                {REQ_TAMBAHAN.map((r, i) => (
                  <li key={i} className="req-item">
                    <span className="req-check" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 4.5 4.5L19 7" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
