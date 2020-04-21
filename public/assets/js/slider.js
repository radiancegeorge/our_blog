// HTMLCollection.prototype.push = Array.prototype.push
// sliderErap does the main translation   
const sliderWrap = document.querySelector('.slider .wrap');
const sliderContainer = document.querySelector('.slider')

const clone = ()=>{
    const firstImage = sliderWrap.firstElementChild;
    const lastImage = sliderWrap.lastElementChild;
    for(let i = 1, number = sliderWrap.children.length; i <= 2; i++){
        let div = document.createElement('div');
        div.className = 'images';
        let img = document.createElement('img');
        if(i != 2 ){
            img.src = firstImage.firstElementChild.src;
            sliderWrap.appendChild(div);
        }else{
            img.src = lastImage.firstElementChild.src;
            sliderWrap.prepend(div)
        }
        div.appendChild(img);
    }  
}
clone();

let multiple = document.querySelectorAll('.slider .wrap .images').length - 1;
let determinant = 1;
const slide = ()=>{
    let height = sliderContainer.clientHeight;
    let actualHeight = determinant * height
    sliderWrap.style.transform = `translateY(-${actualHeight }px)`;
    if(determinant != multiple){
        determinant++;
    }else {
        determinant = 1
    }
    
    sliderWrap.addEventListener('transitionend',()=>{
        if(determinant === 1){
             sliderWrap.style.transition = 'none';
        }
    });
    if (determinant === (multiple - 1)) {
        sliderWrap.style.transition = '';

    }
}
setInterval(() => {
    slide()
}, 3000);