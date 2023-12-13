let personal_info = document.getElementById("personal_info");
let age = 0

window.addEventListener("load", function () {
    let date = new Date
    let present_day = date.getDate()
    let present_month = date.getMonth() +1
    let present_year = date.getFullYear()
    let birth_date = 2004
    if (present_month > 3) {
       age = present_year - birth_date
        console.log(age)
    }else{
         age = present_year -1- birth_date;
    }
    
    personal_info.innerHTML = `Juan Guerrero | ${age} `;
});

console.log(age)
