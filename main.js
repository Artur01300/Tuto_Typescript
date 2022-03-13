//pour JS
var users1 = {
    pseudo: 'Batman',
    leval: 2
};
if (users1.leval === 2) {
    console.log("\n    Bienvenue ".concat(users1.pseudo, "\n    vous travillez au service support ").concat(users1.leval, "\n  "));
}
/*
  1.le nome qu'on donne, comme ici <Level>, doit commancer un majuscule
  2.Sans les définires les valeurs qui se trouve dans <Level> seront énumérer, cest à dire: ADMIN a la valeur 0,
    MODERATOR la valeur 1 etc.
*/
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
var users = {
    pseudo: 'Batman',
    leval: Level.SUPPORT
};
if (users.leval === Level.SUPPORT) {
    //Level.SUPPORT, dans le console.log, affichee 2
    console.log("\n    Bienvenue ".concat(users.pseudo, "\n    vous travillez au service support ").concat(Level.SUPPORT, "\n  "));
}
/*
   1. On peut modivier les valeurs Level
*/
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["bleu"] = 2] = "bleu";
})(Color || (Color = {}));
var c = Color.green;
/*
  ici il affiche la valeur 1 car le green se trouve en 2em position dans <Color>.
  ici il faut pas penser à sa valeur en chaine de caractaire, il faut penser à ça valeur numérique
*/
console.log(c);
//2. on peut changer les indices de la valeur <Color>:
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["green"] = 2] = "green";
    Color2[Color2["bleu"] = 3] = "bleu";
})(Color2 || (Color2 = {}));
var b = Color2.green;
/*
 ici le Color.green a la valeur numérique 2 car on a attribué la valeur 1 à red
*/
console.log(b);
//3. on peut dener des valeur aléatoirement:
var Color3;
(function (Color3) {
    Color3[Color3["red"] = 1] = "red";
    Color3[Color3["green"] = 9] = "green";
    Color3[Color3["bleu"] = 6] = "bleu";
})(Color3 || (Color3 = {}));
var bb = Color3.green;
console.log(bb);
//4. on peut par exemple afficher lavaleur green
var Color4;
(function (Color4) {
    Color4[Color4["red"] = 1] = "red";
    Color4[Color4["green"] = 9] = "green";
    Color4[Color4["bleu"] = 6] = "bleu";
})(Color4 || (Color4 = {}));
var colorName = Color4[9];
console.log(colorName);
