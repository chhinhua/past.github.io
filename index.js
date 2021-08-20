let now=new Date();
let kn= new Date("2017-8-21");
let ngay=Math.ceil((now-kn)/(60*60*24*1000));
document.querySelector(".times").innerHTML=ngay +" days";

// XỬ LÍ NAVBAR + XỬ LÍ SCROLLSPY
let section =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header .nav a');

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".nav");
menu.addEventListener("click",()=> {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})
window.onscroll=()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    themeToggler.classList.remove('active');
    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop -150;
        let id = sec.getAttribute('id');
        if( top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');
            });
        };
    })
    if(window.scrollY>60){
        document.querySelector(".scrool-top").classList.add('active');
    }else{
        document.querySelector(".scrool-top").classList.remove('active');
    }
}
// XỬ LÍ THEME TOGGLE 
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color',color);
    }
})

// XỬ LÍ PAGE LOADING
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,3000);
}
window.onload = fadeOut();



// XỬ LÍ SWIPER 
var swiper = new Swiper(".memoriesSwiper", {
    spaceBetween:20,
    loop: true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    }
});

// XOAY ẢNH 
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
    speed: 400
});

// CHỈNH DARKMODE 
let darkmode =document.querySelector("#darkmode");
darkmode.onclick =()=>{
    darkmode.classList.toggle("fa-sun");
    if( darkmode.classList.contains("fa-sun")){
        document.querySelector("body").classList.add("active");
    }else{
        document.querySelector("body").classList.remove("active");
    }
}