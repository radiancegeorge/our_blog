const menu = document.querySelector('.menu');
const navItem = document.querySelector('.nav-items');
const closeIcon = document.querySelector('.close')
const togglemenu = (elem)=>{
    elem.addEventListener('click',()=>{
        navItem.classList.toggle('show-items');
        closeIcon.firstElementChild.classList.toggle('rotate45deg')

    })
}
togglemenu(menu);
togglemenu(closeIcon);