const swiper = new Swiper('.swiper-container', {    
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    parallax: true,
    speed: 1200,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});








  /* Fetch API */
  
//   window.addEventListener('load', loadImg);

//   const slides = document.querySelectorAll('.hero-slide')
  
//   function loadImg() {
//     const url = "https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
//     const imageDiv = document.querySelector('.hero__image');
//       fetch(url)
//           .then(response => {
//               return response.json();
//           })
//           .then(data => {
//               slides.forEach((slide) => {
//                   console.log(slide)
//                     for (let i = 0; i < data.results.length; i++) {
                    
//                         /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
//                         if (data.results[i].id == "6VhPY27jdps") {
//                             let imageElement = document.createElement('img');
//                             imageElement.src = data.results[i].urls.thumb;
//                             slide.append(imageElement);
//                         }
//                     }
//               })
                 
//             });
//   }