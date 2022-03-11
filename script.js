const form = document.getElementById('signupForm');
const firstName = document.getElementById('firstName');
const age = document.getElementById('age');

function gift(age){
    return +age + 3;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if(age.value < 18){
        console.log('Iscription refusée');
    }
    else{
        console.log(`
        BienVenue ${firstName.value}.
        Vous avez ${age.value}.
        Vous aurez droit à un cadeau quand vous ${gift(age.value)} aurez ans
        `);
    }
})