$(document).ready(function () {
    $(window).scroll(function(){
        // scroll-up button show/hide script
        
        if(this.scrollY > 170){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html,body').animate({scrollTop: $(".nav-modal")},'fast');
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });
});

// element selection
const body = document.querySelector("body");
const barButton = document.querySelector(".bar-dashboard-menu");
const sidebar = document.querySelector(".sidebar-menu");
const sidebarLogo = document.querySelector(".sidebar-logo");
const allScreen = document.querySelector(".all-screen");

window.addEventListener('resize',function(){
    if(window.screen.availWidth < 600){
        sidebar.classList.add("hide")
    }else{
        sidebar.classList.remove("hide")
    }
})

barButton.addEventListener('click',function(){
    sidebarLogo.classList.remove("hidden");
    sidebar.classList.remove("hide");
    allScreen.classList.remove('hidden');
    body.style.overflow = 'hidden';
});
sidebar.addEventListener('click',function(){
    if(window.screen.availWidth < 600){
        sidebarLogo.classList.add("hidden");
        sidebar.classList.add("hide")
        allScreen.classList.add('hidden');
        body.style.overflow = 'visible';
    }  
});

allScreen.addEventListener('click',function(){
    sidebarLogo.classList.add("hidden");
    sidebar.classList.add("hide")
    allScreen.classList.add('hidden');
    body.style.overflow = 'visible';
});

// sidebar event when click

const sidebarBtn = document.querySelectorAll(".menu-item");
sidebarBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        sidebarBtn.forEach((btn)=>btn.classList.remove('menu-item__active'));
        console.log(btn.dataset.menu)
        btn.classList.add('menu-item__active');
    })
})