// swiper-1.js
const wrap = document.querySelector('#wrap');
const web = document.querySelector('.web');
const gWrap = document.querySelector('#graphic_wrap');
const wrapSwiper = new Swiper(wrap,{
    //옵션:값, 옵션:{옵션:값,},
    mousewheel:true,
    speed:1400,
    direction:'vertical',
});
console.log(wrap,gWrap);
const webSwiper = new Swiper(web,{
    // effect:'fade',
    autoplay:{delay:16000,},
    loop:true,
    pagination:{
        // 페이지 대상 HTML연결, 모양, 동적옵션
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', //bullets(기본값), fraction(페이지번호),
        /* dynamicBullets:true, */ //type이 bullets(기본값)일때만 가능
    },
});
const gWrapSwiper = new Swiper(gWrap, {
    pagination:{
        el:'#graphic_wrap + .g_page',
        type : 'bullets',
    }
})