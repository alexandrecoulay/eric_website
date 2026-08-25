import { useEffect, type RefObject } from "react";

/**
 * Appelle `handler` quand un clic ou un touch se produit hors de `ref`.
 *
 * Remplace `react-outside-click-handler`, dont la peer dependency plafonne à
 * React 16 et qui bloquait le passage à React 19.
 *
 * L'écoute est posée en phase de capture : un enfant qui appelle
 * stopPropagation ne doit pas empêcher la fermeture du menu.
 */
export default function useOutsideClick(
    ref: RefObject<HTMLElement | null>,
    handler: () => void
): void {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const element = ref.current;
            if (!element || element.contains(event.target as Node)) return;
            handler();
        };

        document.addEventListener("mousedown", listener, true);
        document.addEventListener("touchstart", listener, true);

        return () => {
            document.removeEventListener("mousedown", listener, true);
            document.removeEventListener("touchstart", listener, true);
        };
    }, [ref, handler]);
}
