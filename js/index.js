const titlescroll = document.querySelector('.titles');

window.addEventListener('scroll',() => {
    if(window.scrollY > 200){
        titlescroll.classList.add('scroll');
    }else{
        titlescroll.classList.remove('scroll');
    }
});