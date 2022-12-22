
function lockScreenDateTime() {
    const d = new Date()
    
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    
    //converts from military time
    let hour = d.getHours()
    hour > 12 ? hour -= 12 : hour
    hour === 0 ? hour = 12 : hour

    //adds 0 in front of minutes less than 10 ex: 12:08
    let minutes = d.getMinutes()
    minutes < 10 ? minutes = "0" + minutes : minutes

    document.getElementById("date").innerHTML = weekdays[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate()
    document.getElementById("time").innerHTML = hour + ":" + minutes
}

function notifAnimation() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}})
    tl.to(".notification", { y: "0%", duration: 1, delay: 1})
    tl.to(".bottom-bar", { y: "0%", duration: 1})
    tl.to(".scroll-text", { y: "0%", duration: 1})
}

function handleMouseWheel() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}})
    tl.to("#lockscreen", { y: "-100%", duration: 0.8 })
}

setTimeout(lockScreenDateTime,1000)
notifAnimation()

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader-hidden")
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader")
    })
})