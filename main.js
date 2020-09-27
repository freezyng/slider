
let position         = 0;
const slidesToShow   = 4;   // отображаемые слайды
const slidesToScroll = 1;   // сколько прокрутить
const container      = document.querySelector('.slider-container');
const track          = document.querySelector('.slider-track');
const items          = document.querySelectorAll('.slider-item');
const btnPrev        = document.querySelector('.btn-prev');
const btnNext        = document.querySelector('.btn-next');
const itemsCount     = items.length; 
const itemWidth      = container.clientWidth / slidesToShow;    // вычисляем ширину одного слайда
const movePosition   = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
});


btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;   // количество слайдов оставшихся слева
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})
btnNext.addEventListener('click', () => {
    const itemsRight = itemsCount - (Math.abs(position) +  slidesToShow * itemWidth) / itemWidth;   // количество слайдов оставшихся справа
    position -= itemsRight >= slidesToScroll ? movePosition : itemsRight * itemWidth;

    setPosition();
    checkBtns();
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}
checkBtns();