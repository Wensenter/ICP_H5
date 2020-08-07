// swiper
var BannerSwiper = new Swiper('.banner-swiper', {
    autoplay: true,//可选选项，自动滑动
    loop:true,
    pagination: {
        el: '.swiper-pagination'
    }
})

var TextSwiper = new Swiper('.text-swiper', {
    direction:'vertical',
    autoplay: true,//可选选项，自动滑动
    loop:true
})


var TagSwiper = new Swiper('.swiper-tag', {
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    }
})

//备案流程查看切换
function checkoutInfo(el){
    $(el).hide()
    $(el).siblings('a').show()
    $('.info-model').show()
    $('.des-model').hide()
}

function checkoutDes(el){
    $(el).hide()
    $(el).siblings('a').show()
    $('.info-model').hide()
    $('.des-model').show()
}

//切换标签
$('.question-tags a').click(function(){
    $('.question-tags a').removeClass('active')
    $(this).addClass('active')
})