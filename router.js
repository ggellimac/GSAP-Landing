// document.addEventListener("click", (e) => {
//     const {target} = e
//     if (!target.matches("nav ul li a")){
//         return
//     }
//     e.preventDefault()
//     route()
// })

// const routes = {
//     404: {
//         template: "/templates/404.html",
//         title: "",
//         description: ""
//     },
//     "Parallax/": {
//         template: "/templates/index.html",
//         title: "",
//         description: ""
//     },
//     "Parallax/about": {
//         template: "/templates/about.html",
//         title: "",
//         description: ""
//     },
//     "Parallax/resume": {
//         template: "/templates/resume.html",
//         title: "",
//         description: ""
//     },
//     "Parallax/contact": {
//         template: "/templates/contact.html",
//         title: "",
//         description: ""
//     },
// }


// const route = (event) => {
//     event = event || window.event
//     event.preventDefault()
//     window.history.pushState({}, '', event.target.href)
//     urlLocationHandler()
// }

// const urlLocationHandler = async () => {
//     const location = window.location.pathname
//     if (location.length == 0) {
//         location = "/"
//     }

//     const route = routes[location] || routes[404]
//     const html = await fetch(route.template).then ((response) => 
//     response.text())
//     document.getElementById("content").innerHTML = html
// }

// window.onpopstate = urlLocationHandler
// window.route = route

// urlLocationHandler();