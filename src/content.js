

const ul = document.createElement("ul")

const navBar = {
    home: document.createElement("li"),
    menu: document.createElement("li"),
    contact: document.createElement("li")
}


navBar.home.addEventListener("click", () => genHome())
navBar.home.innerText = "Home"
ul.appendChild(navBar.home)

navBar.menu.addEventListener("click", () => console.log("hey"))
navBar.menu.innerText = "Menu"
ul.appendChild(navBar.menu)

navBar.contact.addEventListener("click", () => console.log("hey"))
navBar.contact.innerText = "Contact"
ul.appendChild(navBar.contact)

const nav = document.querySelector("nav")

nav.appendChild(ul)

function genHome() {
    const content = document.querySelector(".content")
    
}
