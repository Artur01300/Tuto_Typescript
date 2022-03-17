var forms = document.querySelector("#signupForm");
var inputFirstName = document.getElementById("firstName");
var ages = document.getElementById("age");
var genders = document.getElementById('gender');
forms.addEventListener('submit', function (e) {
    e.preventDefault;
    console.log(inputFirstName.value, ages.value, genders.value);
});
