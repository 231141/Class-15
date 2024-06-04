console.log("hello");

let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

function getValues(event){
    event.preventDefault();

    let formData = {
        "name": this.name.value,
        "bio": this.bio.value,
        "fav-color": this['fav-color'].value,
        "gender": this.gender.value,
        "fav-food": []
    }

    let favFoods = document.querySelectorAll(".fav-foods");
    for (let food of favFoods){
        if(food.checked == true){
            formData['fav-food'].push(food.value);
        }
    }

let out = `
    <p>Name: <span>${formData.name}</span></p>
    <p>Bio: <span>${formData.bio}</span></p>
    <p>Fav Color: <span>${formData['fav-colour']}</span></p>
    <p>Gender: <span>${formData.gender}</span></p>
    <p>Fav Food: <span>${formData['fav-food']}</span></p>
`;

document.querySelector(".out code").innerHTML = out;


alert("Hi " + formData.name + ". Thank you for you message");
//PrintHello(formData.name);

sessionStorage.setItem("userBio", formData.bio)
PracticalJokeDahmYouStudentsAreQuiet();

localStorage.setItem("userName", formData.name);

}

function PracticalJokeDahmYouStudentsAreQuiet() {
    let temp1 = sessionStorage.getItem("userBio");
    alert("Wow, I cried when you said: " + temp1)
}

function PracticalJokeDahmYouStudentsAreQuiet(nameToSave)
{
    console. log("Trying to Save User Name" + nameToSave); 
    localStorage. setItem ("userName", nameToSave);  
}

function DisplaySavedUserName ()
{
let temp = localStorage.getItem ("userName");
//alert ("Welcome back" + temp);
console.log("The user said " + temp);
//console.log("The user said" + sessionStorage.getItem("userBio"));
}