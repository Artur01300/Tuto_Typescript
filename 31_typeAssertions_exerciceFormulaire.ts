
const forms = document.querySelector("#signupForm") as HTMLFormElement;
const inputFirstName = document.getElementById("firstName") as HTMLInputElement;
const ages = document.getElementById("age") as HTMLInputElement;
const genders = document.getElementById('gender') as HTMLSelectElement


forms.addEventListener('submit', (e)=>{
  e.preventDefault;

  console.log(inputFirstName.value, ages.value, genders.value);
})
