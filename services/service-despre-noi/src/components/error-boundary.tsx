"use client"

import React from "react"

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Layout Error Boundary caught:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // Guard against infinite refresh loops
            if (typeof window !== "undefined") {
                const now = Date.now()
                const lastRetry = parseInt(sessionStorage.getItem("error_retry_time") || "0")
                const retryCount = parseInt(sessionStorage.getItem("error_retry_count") || "0")

                // If less than 10 seconds since last retry, increment count
                if (now - lastRetry < 10000) {
                    if (retryCount >= 3) {
                        return (
                            <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
                                <h2 className="text-2xl font-serif font-bold mb-4">Ups! Ne cerem scuze.</h2>
                                <p className="text-muted-foreground mb-6 max-w-md">
                                    Pagina a întâmpinat o eroare repetată. Te rugăm să încerci din nou mai târziu sau să contactezi echipa de suport.
                                </p>
                                <button
                                    onClick={() => {
                                        sessionStorage.removeItem("error_retry_count")
                                        window.location.reload()
                                    }}
                                    className="px-8 py-3 bg-primary text-white font-serif uppercase tracking-widest hover:bg-primary/90 transition-colors"
                                >
                                    Încearcă din nou
                                </button>
                            </div>
                        )
                    }
                    sessionStorage.setItem("error_retry_count", (retryCount + 1).toString())
                } else {
                    sessionStorage.setItem("error_retry_count", "1")
                }
                sessionStorage.setItem("error_retry_time", now.toString())

                // Auto-reload once to try recovering
                window.location.reload()
                return null
            }

            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
                    <h2 className="text-2xl font-serif font-bold mb-4">Ups! Ceva n-a mers bine.</h2>
                    <p className="text-muted-foreground mb-6">Încercăm să rezolvăm problema. Te rugăm să reîncarci pagina.</p>
                    <button
                        onClick={() => {
                            window.location.reload()
                        }}
                        className="px-8 py-3 bg-primary text-white font-serif uppercase tracking-widest hover:bg-primary/90 transition-colors"
                    >
                        Reîncarcă Pagina
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}
