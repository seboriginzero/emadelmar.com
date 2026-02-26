import { PSCContent } from "@/components/pages/p-si-c-content"

export const metadata = {
    title: "Parteneri și Clienți",
    description: "Companiile și partenerii care au ales calitatea și rafinamentul Ema del Mar.",
}

import styles from "./styles.module.css"

export default function PSCPage() {
    return (
        <main className={styles.page}>
            <PSCContent />
        </main>
    )
}
