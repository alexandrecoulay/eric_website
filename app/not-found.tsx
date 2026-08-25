import React from "react";
import Link from "next/link";

/**
 * 404 des routes App Router. Le Pages Router garde son propre pages/404.js pour
 * le tableau de bord.
 */
export default function NotFound() {
    return (
        <html lang="en">
            <body style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                gap: "16px",
                fontFamily: "sans-serif",
                background: "#0f0f14",
                color: "#ffffff"
            }}>
                <h1 style={{ fontSize: "64px", margin: 0 }}>404</h1>
                <p style={{ opacity: 0.7 }}>This page does not exist.</p>
                <Link href="/" style={{ color: "#8ab4ff" }}>boteric.fr</Link>
            </body>
        </html>
    );
}
