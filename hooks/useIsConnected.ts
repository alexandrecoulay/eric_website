import { useSyncExternalStore } from "react";

const STORAGE_KEY = "access_token";

/**
 * Présence d'un jeton de session dans le localStorage.
 *
 * `useSyncExternalStore` plutôt qu'un useState alimenté par un useEffect : c'est
 * le primitif prévu pour lire une source extérieure à React. Il fournit un
 * instantané serveur explicite — donc pas d'écart d'hydratation — et se
 * resynchronise quand un autre onglet se déconnecte, ce que la version à effet
 * ne faisait pas.
 */
function subscribe(onChange: () => void): () => void {
    window.addEventListener("storage", onChange);
    return () => window.removeEventListener("storage", onChange);
}

function getSnapshot(): boolean {
    try {
        return !!localStorage.getItem(STORAGE_KEY);
    } catch {
        // Navigation privée ou stockage bloqué : on considère l'utilisateur déconnecté.
        return false;
    }
}

/** Le serveur ne connaît aucune session : il rend toujours l'état déconnecté. */
function getServerSnapshot(): boolean {
    return false;
}

export default function useIsConnected(): boolean {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
