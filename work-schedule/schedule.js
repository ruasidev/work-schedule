const table = document.getElementsByTagName("table")[0];
const d = new Date()
document.querySelector('#dateDisplay').textContent = displayDate()

function displayDate(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return "Today is " + days[d.getDay()]
}


// let dates = []
// for(var i=15; i<32; i++){
//     dates.push(new Date(2022, 2, i))
// }

// console.log(dates)

for(var i=1; i<table.rows.length; i++){

    // if(isDateBeforeToday(dates[new Date().getDate()-1])){
    //     table.children[i-1].remove()
    // }

    if(table.rows[i].children[0].textContent == "Yes"){
        table.rows[i].style.backgroundColor = "#ffa6a6"
    } else {
        table.rows[i].style.backgroundColor = "lightgreen"
    }
}

// function isDateBeforeToday(date) {
//     return new Date(date.toDateString()) < new Date(new Date().toDateString());
// }