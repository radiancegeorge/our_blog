

const dateElem = document.querySelector('.date input');
const timeElem = document.querySelector('.time input')
const date = new Date();
const form = document.querySelector('.forPosts');
const creatCategoryForm = document.querySelector('.createcategory')
const selectCategories = form.categories;

creatCategoryForm.addEventListener('submit',(e)=>{
  
})


// this section for getting list of categories

const fetchCategories = ()=>{
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = ()=>{
        if(xml.readyState == 4 && xml.status === 200){
            // console.log(xml.response)
            response = xml.response;
            response.forEach(data => {
                option = document.createElement('option');
                option.value = data.Tables_in_our_blog;
                option.innerText = data.Tables_in_our_blog; 
                selectCategories.appendChild(option);
            });
        }else{
            
        }
    }
    xml.open('get', 'http://localhost:7000/numberOfTb');
    xml.responseType = 'json';
    xml.setRequestHeader('header', 'application/json');
    xml.send()
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const category = e.target.categories;
    const author = e.target.author;
    const title = e.target.title;
    const body = e.target.body;
    const file = e.target.file;
    const data = [category, author, title, body, file];
    let unfilledSection = 0 ;
    data.forEach(item => {
        if(item.value === ''){
            item.style.border = '2px solid red';
            setTimeout(() => {
                item.style.border = '';
            }, 2500);
        }else{
            unfilledSection++;
            console.log(unfilledSection);
            if(unfilledSection === data.length) e.target.submit()
        }
    })
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


