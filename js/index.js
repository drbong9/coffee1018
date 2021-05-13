const titlescroll = document.querySelector('.titles');
const rulemenu = document.querySelector('.rulemenu');
const rulemenu1 = document.querySelector('.rulemenu1');
const rulemenu2 = document.querySelector('.rulemenu2');
const rulemenu3 = document.querySelector('.rulemenu3');
const ul = document.querySelector('.rule');
const ul1 = document.querySelector('.rule1');
const ul2 = document.querySelector('.rule2');
const ul3 = document.querySelector('.rule3');
const lines = document.querySelector('.lines');

window.addEventListener('scroll',() => {
    if(window.scrollY > 200){
        titlescroll.classList.add('scroll');
    }else{
        titlescroll.classList.remove('scroll');
    }
});

rulemenu.addEventListener('click',() => {
    ul.classList.toggle('active');
});
rulemenu1.addEventListener('click',() => {
    ul1.classList.toggle('active');
});
rulemenu2.addEventListener('click',() => {
    ul2.classList.toggle('active');
});
rulemenu3.addEventListener('click',() => {
    ul3.classList.toggle('active');
});


