var swiper = new Swiper('.home', {
    spaceBetween:30,
    direction: 'horizontal', // Set direction to horizontal
    clickable:true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


  