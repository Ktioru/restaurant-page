const ul = document.createElement("ul")
let navBar = {
    home: document.createElement("button"),
    menu: document.createElement("button"),
    contact: document.createElement("button")
}


navBar.home.addEventListener("click", () => genHome("home"))
navBar.home.innerText = "Home"



navBar.menu.addEventListener("click", () => genHome("menu"))
navBar.menu.innerText = "Menu"



navBar.contact.addEventListener("click", () => genHome("contact"))
navBar.contact.innerText = "Contact"


const nav = document.querySelector("nav")

nav.appendChild(navBar.home)
nav.appendChild(navBar.menu)
nav.appendChild(navBar.contact)



//Home Page
const content = document.querySelector(".content")
const home = {
    mainDiv: document.createElement("div"),
    textualContent: document.createElement("div"),
    image: document.createElement("img"),
    title: document.createElement("h1"),
    text: document.createElement("p"),
    quote: document.createElement("div"),
    quoteTitle: document.createElement("h2"),
    textQuote: document.createElement("p"),
    footerText: document.createElement("p"),
    

}

home.mainDiv.classList.add("home")
home.textualContent.classList.add("textualContent")

home.title.innerText = "Insert really cool words to impress the client"
home.text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum."

home.textualContent.appendChild(home.title)
home.textualContent.appendChild(home.text)

home.image.src = "../assets/homeImage.jpg"
home.image.classList.add("homeImg")
home.mainDiv.appendChild(home.textualContent)
home.mainDiv.appendChild(home.image)


home.quote.classList.add("quoteDiv")
home.quoteTitle.innerText = "When we open?"
home.quote.appendChild(home.quoteTitle)


home.textQuote.innerHTML = "Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday: 6am - 6pm <br> Wednesday: 6am - 6pm <br> Thursday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 10pm"
home.quote.appendChild(home.textQuote)

home.footerText.innerHTML = "Made by <a href='https://github.com/Ktioru' target='_blank'>Ktioru</a> "

document.querySelector("footer").appendChild(home.footerText)
document.querySelector("footer").innerHTML+= "<img width='32' height='32' src='../assets/github.png'>"

//Menu

const menu = {
    menu: document.createElement("div"),
    
}

menu.menu.classList.add("menu")
for (let c = 0; c < 9; c++) {
    let menuItem = document.createElement("div")
    menuItem.classList.add("menuItem")

    let menuText = document.createElement("h1")
    menuText.innerText = "Really Cool Fries"

    let menuImage = document.createElement("img")
    menuImage.src = "../assets/fries.jpg"

    menuItem.appendChild(menuText)
    menuItem.appendChild(menuImage)
    menu.menu.appendChild(menuItem)
    
}

//Contact
const contact = {
    contact: document.createElement("div"),
    contactTitle: document.createElement("h1"),
    phoneNumber: document.createElement("p"),
    email: document.createElement("p"),
    adress: document.createElement("p"),

}
contact.contactTitle.innerText = "Be Sure to Contact Us!"
contact.phoneNumber.innerText = "555-555-5555"
contact.email.innerText = "theMostRealisticEmail@gmail.com"
contact.adress.innerText = "coolRoad, Chicago, US"


contact.contact.appendChild(contact.contactTitle)
contact.contact.appendChild(contact.phoneNumber)

contact.contact.appendChild(contact.email)
contact.contact.appendChild(contact.adress)

contact.contact.classList.add("contact")


let selected

function genHome(page) {
    if (selected != page) {
        content.innerHTML = ""
        navBar.home.classList.remove("selected")
        navBar.menu.classList.remove("selected")
        navBar.contact.classList.remove("selected")
        if (page == "home") {
            navBar.home.classList.add("selected")
            
    
            content.appendChild(home.mainDiv)
            content.appendChild(home.quote)
            selected = "home"
        } else if (page == "menu") {
            navBar.menu.classList.add("selected")
            
           
            content.appendChild(menu.menu)
            selected = "menu"
        } else if (page == "contact") {
            navBar.contact.classList.add("selected")
            content.appendChild(contact.contact)
            selected = "contact"
        }
    }
    
    
    

    
}
genHome("home")