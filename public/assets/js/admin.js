const dateElem = document.querySelector('.date input');
const timeElem = document.querySelector('.time input')
const date = new Date();
const form = document.querySelector('form');
const selectCategories = form.categories;


const fetchCategories = ()=>{
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = ()=>{
        if(xml.readyState == 4){
            // console.log(xml.response)
            response = xml.response;
            response.forEach(data => {
                option = document.createElement('option');
                option.value = data.Tables_in_our_blog;
                option.innerText = data.Tables_in_our_blog; 
                selectCategories.appendChild(option)
            });
        }else{
            console.log('nothing')
        }
    }
    xml.open('get', 'http://localhost:7000/numberOfTb');
    xml.responseType = 'json';
    xml.setRequestHeader('header', 'application/json');
    xml.send()
}




form.addEventListener('submit', (e)=>{
    e.preventDefault()
})



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


document.body.addEventListener('load', fetchCategories())


