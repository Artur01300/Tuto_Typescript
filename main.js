var form = document.getElementById('signupForm');
var firstName = document.getElementById('firstName');
var age = document.getElementById('age');
function gift(age) {
    return +age + 3;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (+age.value < 18) {
        console.log('Iscription refusée');
    }
    else {
        console.log("\n        BienVenue ".concat(firstName.value, ".\n        Vous avez ").concat(age.value, ".\n        Vous aurez droit \u00E0 un cadeau quand vous ").concat(gift(+age.value), " aurez ans\n        "));
    }
});
