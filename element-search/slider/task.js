const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
let sliderLength = sliderItems.length;
let findSlideIndex;
const sliderItemsArr = Array.from(sliderItems);

function findActiveSlideIndex() {
    findSlideIndex = sliderItemsArr.findIndex(item => item.classList.contains('slider__item_active'));
}

function activeDot() {
    dots.forEach(item => item.classList.remove('slider__dot_active'));
    dots[findSlideIndex].classList.add('slider__dot_active');
}

function removeActiveSlide() {
    sliderItemsArr[findSlideIndex].classList.remove('slider__item_active');
}
function AddActiveSlide() {
    sliderItemsArr[findSlideIndex].classList.add('slider__item_active');
}

findActiveSlideIndex();
activeDot();

dots.forEach((item,i) => {
    item.onclick = function() {
        sliderItemsArr.forEach(item => item.classList.remove('slider__item_active'));
        sliderItemsArr[i].classList.add('slider__item_active');    
        findActiveSlideIndex();
        activeDot();
    }
});

prev.onclick = function () {
    findActiveSlideIndex();
    removeActiveSlide() 
    findSlideIndex--;
    if (findSlideIndex == -1) {
        findSlideIndex = sliderLength - 1;
    }
    AddActiveSlide()
    activeDot();
}

next.onclick = function () {
    findActiveSlideIndex();
    removeActiveSlide() 
    findSlideIndex++;
    if (findSlideIndex == sliderLength) {
        findSlideIndex = 0;
    }
    AddActiveSlide()
    activeDot();
}