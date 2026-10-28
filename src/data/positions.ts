export interface Position {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  duties: string[]
  /** These are not departments — they sit outside the departemen structure */
  isSpecialPosition: true
}

export const specialPositions: Position[] = [
  {
    id: 'sekretaris',
    slug: 'sekretaris',
    name: 'Sekretaris',
    shortName: 'Sekretaris',
    description:
      'Posisi Sekretaris dibuka untuk mendukung kinerja Sekretaris Umum BEM FIKTI dalam mengelola administrasi, surat-menyurat, dan dokumentasi resmi organisasi selama periode 2026/2027.',
    duties: [
      'Membantu Sekretaris Umum dalam pengelolaan administrasi dan kesekretariatan organisasi.',
      'Menyusun, mengarsipkan, dan mendistribusikan surat resmi maupun dokumen internal BEM FIKTI.',
      'Mencatat notulensi rapat dan mendokumentasikan keputusan penting organisasi.',
      'Membantu koordinasi administrasi antar departemen dan biro.',
      'Menjaga kerapian dan ketersediaan arsip digital maupun fisik organisasi.',
    ],
    isSpecialPosition: true,
  },
  {
    id: 'bendahara',
    slug: 'bendahara',
    name: 'Bendahara',
    shortName: 'Bendahara',
    description:
      'Posisi Bendahara dibuka untuk mendukung kinerja Bendahara Umum BEM FIKTI dalam mengelola keuangan, pelaporan anggaran, dan administrasi kas organisasi selama periode 2026/2027.',
    duties: [
      'Membantu Bendahara Umum dalam pencatatan dan pengelolaan keuangan organisasi.',
      'Menyusun laporan keuangan program kerja dan kegiatan BEM FIKTI secara berkala.',
      'Membantu proses pengajuan anggaran dan reimbursement kegiatan.',
      'Menjaga akurasi catatan penerimaan dan pengeluaran kas organisasi.',
      'Membantu koordinasi administrasi keuangan antar departemen dan biro.',
    ],
    isSpecialPosition: true,
  },
]

export function getPositionBySlug(slug: string): Position | undefined {
  return specialPositions.find((p) => p.slug === slug)
}
