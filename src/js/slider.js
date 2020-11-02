async function loadSliders() {
    return (await fetch('https://node-project01-karanda.herokuapp.com/api/slider-home')).json()
}

document.addEventListener("DOMContentLoaded", async() => {
    let sliders = []

    try {
        sliders = await loadSliders()
        slidersList = await sliders.map(slide => {
            return `<div class="swiper-slide hero-slide">
                        <figure class="hero__image">
                            <img src="${slide.img}" alt="${slide.alt}">
                            <figcaption class="hero__image_caption">
                                <div class="summary">
                                    <div class="text" data-swiper-parallax="-5000">
                                        ${slide.text}
                                    </div>
                                    <div class="price" data-swiper-parallax="-3000">
                                        ${slide.price}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>`
        }).join("")
        document.querySelector('.hero-slider').innerHTML = slidersList

        const swiper = await (new Swiper('.swiper-container', {    
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
        }))
    } catch (error) {
        console.log(error)
    }
})