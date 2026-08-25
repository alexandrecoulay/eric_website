import React from "react";

/**
 * Injecte un ou plusieurs blocs schema.org.
 *
 * Le site n'émettait aucune donnée structurée : ni ce qu'est Eric, ni qui l'édite,
 * ni de quoi construire un extrait enrichi. C'est le format que les moteurs
 * génératifs recopient le plus volontiers, donc le plus rentable à ajouter.
 */
function JsonLd({ data }: { data: object | object[] }) {
    const blocks = Array.isArray(data) ? data : [data];

    return (
        <>
            {
                blocks.map((block, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
                    />
                ))
            }
        </>
    );
}

export default JsonLd;
