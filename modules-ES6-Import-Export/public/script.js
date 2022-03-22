/*
    Modules ES6 - Imort -Export

    1. On désactive le tsconfig.json/"outFile": "./public/bundle.js"
    2. tsconfig.json/"module": "amd", on remplace par < "module": "es2015" >
    3. on supprime le fichier bundle.js
    4. dans le fichier main.html/script on ajoute < type="module" > et on renseigne le fichier script.js

    5. dans le fichierPersonInterface.ts on supprime le < namespace App { ..... }
    6. et on apport le fichier PersonInterface.js dans le srcript.ts

    Attantion ! on amporte PersonInterface.js et non pas PersonInterface.ts

   
*/
import { Person } from "./PersonInterface.js";
const person = new Person("Alexid", 2);
console.log('%cscript.ts line:21 person', 'color: #007acc;', person);
