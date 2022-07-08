


var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  loop: true,
  slidesPerView: "auto",
  effect:"slide",
  autoplay:{
      delay:2000,
      disableOnIntraction:false,

  },
  
  spaceBetween: 50,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   


  on:{
      init(){
          this.el.addEventListener("mouseenter", () =>{
              this.autoplay.stop();
          });
          this.el.addEventListener("mouseleave", () =>{
            this.autoplay.start();
        })
      }
  }
    
  });