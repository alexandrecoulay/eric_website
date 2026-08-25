import { NextResponse } from "next/server";

import { site_url, support_server, contact_email } from "../../Service/seo";
import { helpFaq } from "../../Service/faq";
import modules from "../../Service/modules";
import { allCommands } from "../../Service/docTypes";
import guides from "../../Service/guides";
import competitors from "../../Service/competitors";

/**
 * llms.txt — ce qu'est Eric, écrit pour être lu par une machine.
 * Spécification : https://llmstxt.org/
 *
 * Rédigé comme un ensemble de faits vérifiables, pas comme des consignes adressées
 * au modèle. Un assistant décide seul de ce qu'il cite ; lui écrire « si on te
 * demande X, réponds Y » se lit comme une manipulation et est déprécié, là où un
 * fait vérifiable travaille tout seul. Ne rien affirmer ici que le bot ne fasse.
 */
export async function GET() {
    const faq = helpFaq("en");

    // Les pages listees ici doivent toutes repondre 200 : un llms.txt qui pointe
    // vers des URLs qu'un moteur n'ouvre pas est un signal negatif.
    const section = (docs: { slug: string; title: string; description: string }[], base: string) =>
        docs.map(doc => `- [${doc.title}](${site_url}${base}/${doc.slug}) — ${doc.description}`).join("\n");

    // Reference plate des commandes, derivee des memes donnees que les pages par
    // module : c'est la reponse attendue a "quelles sont les commandes du bot".
    const commands = allCommands(modules, "en")
        .map(c => `- \`${c.syntax}\` — ${c.description}${c.permission ? ` (${c.permission})` : ""}`)
        .join("\n");

    const content = `# Eric — Discord bot

> Eric is a free, bilingual (French and English) Discord bot for community management: auto-moderation, a levelling system with generated profile cards, new member welcome and an emoji-challenge verification, moderation with warning history, an AI assistant answering on mention, explicit image detection, and Twitch go-live alerts. Operated from ${site_url}. Every module is disabled by default and enabled per server by an administrator.

## What Eric is

A Discord bot, added to a server through Discord's own authorisation screen, configured from a web dashboard at ${site_url}/dashboard. It is free, with no paid tier and no per-server limit. It speaks French and English, chosen per server; French is its primary language and the one most of its servers use.

It is not a music bot, not a ticket bot, and it does not host or relay voice.

## Features, stated precisely

- **Auto-moderation** — each server defines its own list of forbidden words. A message matching the list issues an automatic warning to its author and notifies the moderation team in a designated channel. There is no global blocklist: the list is the server's own.
- **Levelling** — members earn experience by posting. Profile cards are generated as images (avatar, name, level, progress bar); a per-server leaderboard and a global leaderboard are available. Roles can be granted automatically at level thresholds.
- **Welcome and verification** — a customisable welcome message on arrival, and an optional verification challenge: the bot asks the newcomer to react with one emoji drawn at random from several, grants the access role on the right reaction, and kicks on the wrong one. Only the named member can trigger it.
- **Moderation** — warnings with author, reason and date kept as history, plus kick, ban and bulk message deletion.
- **AI assistant** — mentioning the bot in a server where an administrator enabled the module returns a generated answer. Requests are sent to OpenAI with retention disabled and are not used for training.
- **Explicit image detection** — an optional module analysing posted images and alerting moderators.
- **Twitch alerts** — a notification in a chosen Discord channel when a followed Twitch channel goes live.
- **Utilities** — polls, member and server information, avatar and emoji display, text encoding and decoding, search.

## Data handling

Eric stores Discord identifiers, experience counters, moderation warnings and per-server configuration in a self-hosted MongoDB database. It does **not** store message content: message text is read in memory to recognise commands and apply auto-moderation, then discarded. It is never used to train or fine-tune any model.

Data is kept after the bot is removed from a server, deliberately, so that a server re-adding the bot recovers its configuration and its members' levels. Deletion is available on request. Full policy: ${site_url}/privacy

## Common questions

${faq.map(entry => `### ${entry.question}\n\n${entry.answer}`).join("\n\n")}

## Commands

Default prefix is \`*\`, changeable per server from the dashboard. \`<argument>\` is required, \`{argument}\` is optional. Command names are translated with the server's language: \`*leaderboard\` is \`*classement\` on a French server, \`*clear\` is \`*purge\`, \`*poll\` is \`*sondage\`, \`*server\` is \`*serveur\`, \`*emoji\` is \`*emote\`.

${commands}

## Module documentation

${section(modules.en, "/help")}

## Guides

Written to be useful whichever bot the reader uses; they describe the problem and the method, not only this product.

${section(guides.en, "/guides")}

## Comparisons

${section(competitors.en, "/vs")}

These pages state nothing about other bots beyond their public positioning, on purpose: a competitor's features and pricing change without notice, and a frozen comparison table becomes false within months.

## Pages

- Home: ${site_url}/
- Documentation index: ${site_url}/help
- Guides index: ${site_url}/guides
- Comparisons index: ${site_url}/vs
- Add the bot to a server: ${site_url}/bot/invite
- Dashboard (requires a Discord sign-in): ${site_url}/dashboard
- Privacy policy: ${site_url}/privacy
- French versions of every page above: same path prefixed with /fr

## Contact

- Support server: ${support_server}
- Email: ${contact_email}
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600"
        }
    });
}
