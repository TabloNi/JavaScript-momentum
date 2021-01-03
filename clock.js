const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1")

function getTime(){
    const date = new Date()
    const minute = date.getMinutes()
    const hour = date.getHours()
    clockTitle.innerHTML = `${hour}:${minute}`
}

function init(){


}
getTime()
init()