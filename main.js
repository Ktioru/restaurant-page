(()=>{document.createElement("ul");let e={home:document.createElement("button"),menu:document.createElement("button"),contact:document.createElement("button")};e.home.addEventListener("click",(()=>m("home"))),e.home.innerText="Home",e.menu.addEventListener("click",(()=>m("menu"))),e.menu.innerText="Menu",e.contact.addEventListener("click",(()=>m("contact"))),e.contact.innerText="Contact";const t=document.querySelector("nav");t.appendChild(e.home),t.appendChild(e.menu),t.appendChild(e.contact);const n=document.querySelector(".content"),a={mainDiv:document.createElement("div"),textualContent:document.createElement("div"),image:document.createElement("img"),title:document.createElement("h1"),text:document.createElement("p"),quote:document.createElement("div"),quoteTitle:document.createElement("h2"),textQuote:document.createElement("p"),footerText:document.createElement("p")};a.mainDiv.classList.add("home"),a.textualContent.classList.add("textualContent"),a.title.innerText="Insert really cool words to impress the client",a.text.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum.",a.textualContent.appendChild(a.title),a.textualContent.appendChild(a.text),a.image.src="../assets/homeImage.jpg",a.image.classList.add("homeImg"),a.mainDiv.appendChild(a.textualContent),a.mainDiv.appendChild(a.image),a.quote.classList.add("quoteDiv"),a.quoteTitle.innerText="When we open?",a.quote.appendChild(a.quoteTitle),a.textQuote.innerHTML="Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday: 6am - 6pm <br> Wednesday: 6am - 6pm <br> Thursday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 10pm",a.quote.appendChild(a.textQuote),a.footerText.innerHTML="Made by <a href='https://github.com/Ktioru' target='_blank'>Ktioru</a> ",document.querySelector("footer").appendChild(a.footerText),document.querySelector("footer").innerHTML+="<img width='32' height='32' src='../assets/github.png'>";const d={menu:document.createElement("div")};function m(t){if("home"==t)e.home.classList.add("selected"),n.appendChild(a.mainDiv),n.appendChild(a.quote);else if("menu"==t){e.menu.classList.add("selected");for(let e=0;e<9;e++){let e=document.createElement("div");e.classList.add("menuItem");let t=document.createElement("h1");t.innerText="Really Cool Fries";let n=document.createElement("img");n.src="../assets/fries.jpg",e.appendChild(t),e.appendChild(n),d.menu.appendChild(e)}n.appendChild(d.menu)}}d.menu.classList.add("menu")})();