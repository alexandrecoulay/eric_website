import { ImageResponse } from "next/og";

/**
 * Image de partage, générée plutôt que stockée.
 *
 * L'ancienne balise og:image pointait vers /assets/favicons/favicon.ico : un .ico
 * de 32 pixels en URL relative, que ni les réseaux sociaux ni les moteurs
 * n'acceptent. Une carte sociale exige une image absolue d'au moins 1200x630.
 *
 * La générer ici évite d'avoir à maintenir un fichier binaire dans le dépôt et
 * garantit qu'elle reste synchronisée avec le nom et la baseline du bot.
 */
export const contentType = "image/png";

export const size = { width: 1200, height: 630 };

export function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0f0f14 0%, #1c1c2b 100%)",
                    color: "#ffffff",
                    fontFamily: "sans-serif"
                }}>
                <div style={{ fontSize: 140, fontWeight: 800, letterSpacing: -4 }}>Eric</div>
                <div style={{ fontSize: 40, opacity: 0.85, marginTop: 12 }}>
                    Bot Discord — modération, niveaux, IA, Twitch
                </div>
                <div style={{ fontSize: 30, opacity: 0.55, marginTop: 36 }}>boteric.fr</div>
            </div>
        ),
        size
    );
}
