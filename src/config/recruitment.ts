/**
 * Konfigurasi jadwal OPREC Staff BEM FIKTI 2026/2027
 * ─────────────────────────────────────────────────
 * Ubah file ini SATU KALI saat jadwal resmi sudah ditetapkan:
 *   1. Set scheduleConfirmed = true
 *   2. Isi registrationStart dengan string ISO 8601 +07:00
 *
 * Selama scheduleConfirmed = false, countdown menampilkan 00:00:00:00
 * dan semua tahapan menampilkan "Jadwal akan diumumkan".
 */
export const recruitmentConfig = {
  timezone: "Asia/Jakarta",

  /** Ubah ke true HANYA setelah jadwal resmi ditetapkan */
  scheduleConfirmed: false,

  /** ISO 8601 dengan offset +07:00, contoh: "2026-11-01T08:00:00+07:00" */
  registrationStart: null as string | null,
  registrationEnd: null as string | null,

  /** URL Google Form pendaftaran resmi (isi saat form sudah aktif) */
  registrationFormUrl: null as string | null,

  announcementDates: {
    documentSelection: null as string | null,
    onlineInterview: null as string | null,
    interviewAnnouncement: null as string | null,
    finalAnnouncement: null as string | null,
  },
} as const satisfies RecruitmentConfig;

export interface RecruitmentConfig {
  timezone: string;
  scheduleConfirmed: boolean;
  registrationStart: string | null;
  registrationEnd: string | null;
  registrationFormUrl: string | null;
  announcementDates: {
    documentSelection: string | null;
    onlineInterview: string | null;
    interviewAnnouncement: string | null;
    finalAnnouncement: string | null;
  };
}
