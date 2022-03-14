const table = document.getElementsByTagName("table")[0];
const d = new Date()
function display(){
    document.querySelector('#dateDisplay').textContent = `Today is ${getDate()} and the current time is ${getCurrentTime()}:${getSeconds()}`
}
display()
setInterval(display, 1000)


function displayDate(){
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[d.getDay()]
}


// let dates = []
// for(var i=15; i<32; i++){
//     dates.push(new Date(2022, 2, i))
// }

// console.log(dates)

let times = []

for(var i=1; i<table.rows.length; i++){

    // if(isDateBeforeToday(dates[new Date().getDate()-1])){
    //     table.children[i-1].remove()
    // }

    times.push(table.rows[i].children[2].textContent)

    if(table.rows[i].children[0].textContent == "Yes"){
        table.rows[i].style.backgroundColor = "#ffa6a6"
    } else {
        table.rows[i].style.backgroundColor = "lightgreen"
    }
}

function getCurrentTime(){
    let hours = new Date().getHours()
    if(hours.toLocaleString().length == 1){hours = `0${hours}`}
    let minutes = new Date().getMinutes()
    if(minutes.toLocaleString().length == 1){minutes = `0${minutes}`}
    return `${hours}:${minutes}`
}

function getSeconds(){
    let seconds = new Date().getSeconds().toLocaleString()
    if(seconds.length == 1) return `0${seconds}`
    return seconds
}

function getDate(){
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = new Date().getMonth().toLocaleString()
    let date = new Date().getDate().toLocaleString()
    return `${displayDate()}, ${months[month]} ${date}`
}

// function isDateBeforeToday(date) {
//     return new Date(date.toDateString()) < new Date(new Date().toDateString());
// }
