"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"

interface ZoomImageProps {
    src: string
    alt: string
    zoomLevel?: number
    transitionDuration?: number
    className?: string
}

export function ZoomImage({
    src,
    alt,
    zoomLevel = 1.3,
    transitionDuration = 0.5,
    className = ""
}: ZoomImageProps) {
    const [isHovering, setIsHovering] = useState(false)
    const [origin, setOrigin] = useState({ x: 50, y: 50 })
    const containerRef = useRef<HTMLDivElement>(null)
    const rectRef = useRef<DOMRect | null>(null)

    const updateRect = useCallback(() => {
        if (containerRef.current) {
            rectRef.current = containerRef.current.getBoundingClientRect()
        }
    }, [])

    useEffect(() => {
        window.addEventListener("resize", updateRect, { passive: true })
        return () => window.removeEventListener("resize", updateRect)
    }, [updateRect])

    const handleMouseEnter = () => {
        updateRect()
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
        setOrigin({ x: 50, y: 50 })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!rectRef.current) return
        // Only run on desktop essentially
        const x = ((e.clientX - rectRef.current.left) / rectRef.current.width) * 100
        const y = ((e.clientY - rectRef.current.top) / rectRef.current.height) * 100
        setOrigin({ x, y })
    }

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{ isolation: "isolate" }}
        >
            <div
                className="w-full h-full transition-transform will-change-transform"
                style={{
                    transform: isHovering ? `scale(${zoomLevel})` : "scale(1)",
                    transformOrigin: `${origin.x}% ${origin.y}%`,
                    transition: isHovering
                        ? `transform ${transitionDuration}s cubic-bezier(0.16, 1, 0.3, 1)`
                        : `transform ${transitionDuration}s cubic-bezier(0.16, 1, 0.3, 1)`,
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                />
            </div>
        </div>
    )
}
