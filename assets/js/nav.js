$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
});
// nav change focus
const navItemList = document.querySelectorAll('.nav-item');
const changeNavFocus = function(element, typeAction){
    const classArr = ['active','text-active','text-garis'];
    classArr.forEach(function(cArr){
        if(typeAction === 'add'){
            element.children[0].classList.add(cArr);
        }else{
            element.children[0].classList.remove(cArr);
        }
    });
}
navItemList.forEach(function(data){
    changeNavFocus(data,'remove');
    if(data.dataset.page === window.location.href.split('/').slice(-1)[0].split('.')[0]){
        const elementActive = document.querySelector(`[data-page="${data.dataset.page}"]`);
        changeNavFocus(elementActive,'add');
    }

    if(window.location.href.split('/').slice(-1)[0].split('.')[0] === ''){
        const elementActive = document.querySelector(`[data-page="index"]`);
        changeNavFocus(elementActive,'add');
    }
});
