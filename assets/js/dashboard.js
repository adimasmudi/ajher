
// element selection
const barButton = document.querySelector(".bar-dashboard-menu");
const sidebar = document.querySelector(".sidebar-menu");
const sidebarLogo = document.querySelector(".sidebar-logo");
const allScreen = document.querySelector(".all-screen");

window.addEventListener('resize',function(){
    if(window.screen.availWidth < 600){
        sidebar.classList.add("hidden")
    }else{
        sidebar.classList.remove("hidden")
    }
})

barButton.addEventListener('click',function(){
    sidebarLogo.classList.remove("hidden");
    sidebar.classList.remove("hidden");
    allScreen.classList.remove('hidden');
});
sidebar.addEventListener('click',function(){
    if(window.screen.availWidth < 600){
        sidebarLogo.classList.add("hidden");
        sidebar.classList.add("hidden")
        allScreen.classList.add('hidden');
    }  
});

allScreen.addEventListener('click',function(){
    sidebarLogo.classList.add("hidden");
    sidebar.classList.add("hidden")
    allScreen.classList.add('hidden');
});