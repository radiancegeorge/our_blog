const dateElem = document.querySelector('.date input');
const timeElem = document.querySelector('.time input')
const date = new Date();
const form = document.querySelector('form')





setInterval(() => {
    let hours = `${date.getHours()}`
    let minutes = `${date.getMinutes()}`
    let exactYear = date.getFullYear();
    let exactMonth = `${date.getMonth()}`
    let exactDay = `${date.getDate()}`
    exactDay.length < 2 ? exactDay = `0${exactDay}` : exactDay;
    exactMonth.length < 2 ? exactMonth = `0${exactMonth}` : exactMonth ;
    hours.length < 2 ? hours = `0${hours}` : hours ;
    minutes.length < 2 ? minutes = `0${minutes}` : minutes ;

    dateElem.value = `${exactYear}-${exactMonth}-${exactDay}`;
    timeElem.value = `${hours}:${minutes}`
}, 1000);





