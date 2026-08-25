import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { inviteboturl } from "../../../../Service/constante";
import { pageMetadata } from "../../../../Service/seo";
import type { Locale } from "../../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    return pageMetadata({
        locale,
        path: "/bot/invite",
        title: locale === "fr" ? "Ajouter Eric à un serveur Discord" : "Add Eric to a Discord server",
        description: locale === "fr"
            ? "Ajoutez le bot Discord Eric à votre serveur en un clic, avec les permissions nécessaires à la modération, aux niveaux et aux alertes Twitch."
            : "Add the Eric Discord bot to your server in one click, with the permissions needed for moderation, levels and Twitch alerts.",
        // Page de redirection : elle n'a pas de contenu propre à indexer, mais les
        // liens qu'elle reçoit doivent continuer à transmettre leur signal.
        noIndex: true
    });
}

/**
 * Redirection serveur vers l'écran d'autorisation Discord.
 *
 * L'ancienne version poussait la redirection depuis le navigateur après
 * hydratation : la page restait blanche le temps du chargement du JavaScript, et
 * un crawler n'y voyait rien du tout.
 */
export default function InvitePage() {
    redirect(inviteboturl);
}
