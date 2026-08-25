import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/**
 * Link, redirect et les hooks de navigation conscients de la locale : ils
 * préfixent automatiquement les chemins par la langue courante, sauf pour la
 * locale par défaut (localePrefix "as-needed").
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
