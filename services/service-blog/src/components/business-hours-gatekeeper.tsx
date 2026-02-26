"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ClosedOverlay } from '@/components/ui/closed-overlay'
import { BUSINESS_HOURS_LOGIC } from '@/lib/constants'

export function BusinessHoursGatekeeper() {
    const [isOpen, setIsOpen] = useState<boolean | null>(null)
    const [isMounted, setIsMounted] = useState(false)
    const [isUnlocked, setIsUnlocked] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined" && sessionStorage.getItem("emadelmar_unlocked") === "true") {
            setIsUnlocked(true)
        }
    }, [pathname])

    useEffect(() => {
        if (!isMounted) return

        const checkStatus = () => {
            try {
                const options: Intl.DateTimeFormatOptions = {
                    timeZone: BUSINESS_HOURS_LOGIC.timezone,
                    hour: 'numeric',
                    minute: 'numeric',
                    weekday: 'short',
                    hour12: false
                }

                const formatter = new Intl.DateTimeFormat('en-US', options)
                const parts = formatter.formatToParts(new Date())

                const getPart = (type: string) => parts.find(p => p.type === type)?.value

                const weekday = getPart('weekday')
                const hour = parseInt(getPart('hour') || '0', 10)
                const minute = parseInt(getPart('minute') || '0', 10)

                if (weekday === BUSINESS_HOURS_LOGIC.closedDay) {
                    setIsOpen(false)
                } else {
                    const currentTimeInMinutes = hour * 60 + minute
                    const openTimeInMinutes = BUSINESS_HOURS_LOGIC.openHour * 60
                    const closeTimeInMinutes = BUSINESS_HOURS_LOGIC.closeHour * 60

                    if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
                        setIsOpen(true)
                    } else {
                        setIsOpen(false)
                    }
                }
            } catch (error) {
                console.error("Error checking business hours:", error)
                setIsOpen(true)
            }
        }

        checkStatus()
        const interval = setInterval(checkStatus, 60000)
        return () => clearInterval(interval)
    }, [isMounted])

    if (!isMounted) return null

    if (isUnlocked) return null

    const shouldShowOverlay = isOpen === false

    if (!shouldShowOverlay) return null

    return <ClosedOverlay onUnlock={() => setIsUnlocked(true)} />
}
