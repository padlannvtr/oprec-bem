import { useEffect, useRef, useState } from 'react'
import { recruitmentConfig } from '../config/recruitment'

interface CountdownValues {
  days: string
  hours: string
  minutes: string
  seconds: string
  /** true when countdown is active and ticking */
  active: boolean
  /** true when target has been reached */
  reached: boolean
}

const PAD = (n: number) => String(n).padStart(2, '0')

function computeValues(targetMs: number): CountdownValues {
  const now = Date.now()
  const diff = targetMs - now

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', active: false, reached: true }
  }

  const totalSec = Math.floor(diff / 1000)
  const days    = Math.floor(totalSec / 86400)
  const hours   = Math.floor((totalSec % 86400) / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60

  return {
    days:    String(days),
    hours:   PAD(hours),
    minutes: PAD(minutes),
    seconds: PAD(seconds),
    active:  true,
    reached: false,
  }
}

export function useCountdown(): CountdownValues {
  const { scheduleConfirmed, registrationStart } = recruitmentConfig

  /* Not confirmed: always show zeroes */
  if (!scheduleConfirmed || !registrationStart) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', active: false, reached: false }
  }

  const targetMs = new Date(registrationStart).getTime()

  /* Invalid date guard */
  if (isNaN(targetMs)) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', active: false, reached: false }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState<CountdownValues>(() => computeValues(targetMs))
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const tick = () => {
      const next = computeValues(targetMs)
      setValues(next)
      if (next.reached && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    tick()
    intervalRef.current = setInterval(tick, 1000)

    /* Recalculate when tab becomes visible again */
    const onVisible = () => {
      if (document.visibilityState === 'visible') tick()
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [targetMs])

  return values
}
