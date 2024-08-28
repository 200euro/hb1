const swiper = new Swiper('.swiper', {

   loop: true,
   slidesPerView: 1,
   autoplay:{
      delay:2000
   },

   // effect: "fade",   
   // effect: "cube",   
   // effect: "coverflow",   
   // effect: "flip",   
   

   breakpoints:{

      100:{
         slidesPerView: 1
      },
      700:{
         slidesPerView: 1
      },
      400: {
         slidesPerView:1
      },

   },

 
  
   pagination: {
     el: '.swiper-pagination',
   },
 

   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });