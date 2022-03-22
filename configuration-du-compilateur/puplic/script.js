"use strict";
/**
    TypeScript Compiler

*/
// --out
// tsc --w         pour lancer touts les fichier ts
// tsc --init
//Compiler les fichiers avec des arguments < tsc main.ts --out output-file.js >
// dossier puplic === tous les fichiers déployés
// dossier src === tous les fichiers qui vent nous servier pendant le développement
/*
    "rootDir": "./src"
    "outDir": "./puplic"
*/
/*  **************    exclude    ****************

    pour exclure un fichier à compiler en .ts:
    - dans le fichier tsconfig.json on ajouter en objet < "exclude": [chemin/nom de fichier] >
    -  "exclude": [
        "./src/test.ts"
    ]

    - on peut également exclure un dossier :
    "exclude": [
        "./src"
    ]

    - on peut exclure tous les fichier qui se terminent par leur point términésons (.ts, .js, .dev etc...):
    - Attention ! il faut metre l'étoile < * >
     "exclude": [
        "./src/*.dev.ts"
    ]

    - on peut exclure le mode_module:
    - Attention ! il faut metre l'étoile < * >
     "exclude": [
        "mode_module"
    ]

    */
// - on peut présiser au niveau de l'application pour tous les fichier ou un ficher (.ts, .js, .dev etc...):
// - Attention ! il faut metre l'étoile < ** * >
{
    "exclude";
    [
        "**/*.dev"
    ];
}
/* **************    "include" ou "files"    ****************
    si on prècise le fichier (ou les fichiers) qui vont être inclure dans ce tableau, à ce mement là les fichiers qui n'ont
    pas été prècient ne seront pas automatiquement compiler
    - dans "include" je peux inclure un dossier


     "include": [
        "./src/test.ts"
    ]

    - dans le cas "files" je ne peux pas inclure un dossier, je peut uniqument inclur des ou un fichiers:

      "files": [
        "./src/test.ts"
    ]

*/
/*  "sourceMap": true,

    permet afficher dans le navigateur internet:
    - Firefox/Débogeur/src/script.ts
    - GoogleChrom/Sources/src/script.ts

    - en résumé ça permet de débeger le code plus facilement, surtout si on a un projet complex
    - il créer des fichier script.js.map et test.js.map

*/
console.log("Hello Je suis le main.js");
//# sourceMappingURL=script.js.map