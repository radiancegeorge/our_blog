// sliderErap does the main translation   
const sliderWrap = document.querySelector('.slider .wrap');
const sliderContainer = document.querySelector('.slider')
let multiple = document.querySelectorAll('.slider .wrap .images').length - 1;
determinant = 0;

// console.log(multiple)
// console.log(sliderContainer.clientHeight)
// console.log(sliderContainer.scrollHeight)
const slide = ()=>{
    let height = sliderContainer.clientHeight;
    let actualHeight = determinant * height
    sliderWrap.style.transform = `translateY(-${actualHeight }px)`;
    determinant === multiple ? determinant = 0 : determinant ++
}


setInterval(() => {
    slide()
}, 4000);