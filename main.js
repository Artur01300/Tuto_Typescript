var pseudo = 'Superman';
var total = 200;
var isLoading = false;
//IntelliSense - VScode
var totalString = total.toString();
console.log(totalString);
//backtick littéraux de gabarit convertie les ints en chene de caractaire 
var msgInfo = "\n    Bienvenue ".concat(pseudo, ",\n    Vous avez ").concat(total, " points ").concat(isLoading, "\n");
console.log(msgInfo);
