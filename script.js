/* btn.style.backgroundColor = "red";
btn.style.color = "white"; */

/* const service = document.getElementsByClassName("services ");
console.log(service);
const newSection = document.createElement("section");
newSection.innerHTML +=
  "<div><h1>Je suis l'intru parmi les sections</h1></div>";
service[0].insertAdjacentHTML("beforeBegin", newSection.outerHTML);
 */

/* function checkInputName() {
  if (fullName.value == "") {
    login.style.display = "none";
    name_message_error.style.color = "red";
    name_message_error.style.display = "block";
    
  } else {
    name_message_error.style.display = "none";
    login.style.display = "none";
  }
}
 */
function datatogglevisibility() {
  const btn = document.querySelectorAll(".banner_left_link");
  btn[0].classList.toggle("hidden");
}

const services = document.querySelectorAll(".services_list_item");
console.log(services);
  
services.forEach((item, index) => {
  item.addEventListener("click", function () {
    services.forEach((items, id) => {
      if (index !== id) {
        items.classList.toggle("active", false);
      }
    });
    item.classList.toggle("active");
  });
});

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const object = document.getElementById("Object");
const message = document.getElementById("message");
const form = document.getElementById("form");
const button = document.getElementById("button");
const login = document.getElementById("login");
const name_message_error = document.querySelector(".name_message_error");
const email_message_error = document.querySelector(".email_message_error");
const object_message_error = document.querySelector(".object");

button.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  name_message_error.innerHTML = "";
  email_message_error.innerHTML = "";
  object_message_error.innerHTML = "";

  if (fullName.value !== "" && email.value !== "" && object.value !== "") {
    if (
      fullName.value == "Sossou gabriel" &&
      email.value == "gabriel@gmail.com"
    ) {
      console.log("je suis dans le 2e si");
      login.style.backgroundColor = "greenŧ";
      login.style.display = "block";
      login.innerHTML = "Connexion réussi";
    }
  } else if (email.value == "" || fullName.value == "" || object.value == "") {
    if (fullName.value == "") {
      console.log("jhsdfbsj");
      name_message_error.style.display = "block";
      name_message_error.style.color = "red";
      name_message_error.innerHTML = "Le champ nom est vide";
    }
    if (email.value == "") {
      email_message_error.style.display = "block";
      email_message_error.style.color = "red";
      email_message_error.innerHTML = "Le champ email est vide";
    }
    if (object.value == "") {
      object_message_error.style.display = "block";
      object_message_error.style.color = "red";
      object_message_error.innerHTML = "Le champ objet est vide";
    }
  } 
}
console.log(email_message_error);
