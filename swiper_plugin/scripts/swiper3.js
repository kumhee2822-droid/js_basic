const ssfHero = document.querySelector('.ssf_hero');
const brandItem = document.querySelector('.brand_slide');
console.log(ssfHero,brandItem);

const brandSwiper = new Swiper (brandItem, {
    slidesPerView:3,
    spaceBetween:10,
    navigation:{
        nextEl:'.brand_slide ~ .next',
        prevEl:'.brand_slide ~ .prev',
    }
})
const ssfSwiper = new Swiper (ssfHero, {
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    spaceBetween:0, 
    // pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    },
})