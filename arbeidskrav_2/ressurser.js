const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]



const HTML = resources.filter((category) => category.category === "HTML")
document.getElementById("default").innerHTML = HTML.map(data => `${data.category}`)
document.getElementById("HTML").innerHTML =  HTML.map(data => `
        <h2>${data.category}</h2>
        <p>${data.text}</p>
        <li><a href="${data.sources[0].url}">${data.sources[0].title}</a></li>
        <li><a href="${data.sources[1].url}">${data.sources[1].title}</a></li>
        <li><a href="${data.sources[2].url}">${data.sources[2].title}</a></li>
`)




const CSS = resources.filter((category) => category.category === "CSS")
document.getElementById("default2").innerHTML = CSS.map(data => `${data.category}`)
document.getElementById("CSS").innerHTML = CSS.map(data => `
        <h2>${data.category}</h2>
        <p>${data.text}</p>
        <li><a href="${data.sources[0].url}">${data.sources[0].title}</a></li>
        <li><a href="${data.sources[1].url}">${data.sources[1].title}</a></li>
        <li><a href="${data.sources[2].url}">${data.sources[2].title}</a></li>
        <li><a href="${data.sources[3].url}">${data.sources[3].title}</a></li>

`)

const JavaScript = resources.filter((category) => category.category === "JavaScript")
document.getElementById("default3").innerHTML = JavaScript.map(data => `${data.category}`)
document.getElementById("JavaScript").innerHTML = JavaScript.map(data => `
        <h2>${data.category}</h2>
        <p>${data.text}</p>
        <li><a href="${data.sources[0].url}">${data.sources[0].title}</a></li>
        <li><a href="${data.sources[1].url}">${data.sources[1].title}</a></li>
        <li><a href="${data.sources[2].url}">${data.sources[2].title}</a></li>
`)

const React = resources.filter((category) => category.category === "React")
document.getElementById("default4").innerHTML = React.map(data => `${data.category}`)
document.getElementById("React").innerHTML = React.map(data => `
        <h2>${data.category}</h2>
        <p>${data.text}</p>
        <li><a href="${data.sources[0].url}">${data.sources[0].title}</a></li>
        <li><a href="${data.sources[1].url}">${data.sources[1].title}</a></li>
        <li><a href="${data.sources[2].url}">${data.sources[2].title}</a></li>
`)

const Sanity = resources.filter((category) => category.category === "Sanity and headless CMS")
document.getElementById("default5").innerHTML = Sanity.map(data => `${data.category}`)
document.getElementById("Sanity").innerHTML = Sanity.map(data => `
        <h2>${data.category}</h2>
        <p>${data.text}</p>
        <li><a href="${data.sources[0].url}">${data.sources[0].title}</a></li>
        <li><a href="${data.sources[1].url}">${data.sources[1].title}</a></li>
        <li><a href="${data.sources[2].url}">${data.sources[2].title}</a></li>
`)


function openCity(evt, category) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("default").click();

   


//https://www.w3schools.com/howto/howto_js_tabs.asp 