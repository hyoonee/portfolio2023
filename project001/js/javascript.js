$(document).ready(function(){
    

// 히어로 이미지 설정

// btn을 클릭했을때 slogan img 가 이동해라.

//     $('.hero_circle span').click(function(){

//     let i = $(this).index();
//         stop(clearInterval)
//         $('.hero_circle span').removeClass('on')
//         $('.hero_circle span').eq(i).addClass('on')

//         $('.slogan img').removeClass('on')
//         $('.slogan img').eq(i).addClass('on')
       
//         $('.slogan img').eq(ii-1).css('left','0').stop().animate({'left':'-100%'},800);
//   $('.slogan img').eq(ii).css('left','100%').stop().animate({'left':"0"},800)
//         });

        var ii = 0;
        setInterval(function(){
        
        ii++;
        if(ii==3)ii=0
         //왼쪽으로 이동해라.
  $('.slogan img').eq(ii-1).css('left','0').removeClass('on').stop().animate({'left':'-100%'},800);
  $('.slogan img').eq(ii).css('left','100%').addClass('on').stop().animate({'left':"0"},800)
  
  $('.hero_circle span').removeClass('on')
  $('.hero_circle span').eq(ii).addClass('on')
  },4000);



// 포토갤러리 슬라이드 설정

$(".box1-3 .tab li").click(function(){
    let i = $(this).index()

    $('.photoimg .imgBox ul').removeClass('on')
    $('.photoimg .imgBox ul').eq(i).addClass('on');

    $('.box1-3 .tab li span').removeClass('on')
    $('.box1-3 .tab li span').eq(i).addClass('on');

    
    // console.log(i)



});





$(".photoimg div i").eq(0).click(function(){
    // var a = 0;

    // a--;
    // if(a>=0 && a<5){
    // $(".mainimg .main1 img").removeClass('on')
    // $(".mainimg .main1 img").eq(a-1).addClass('on');

    // $(".mainimg .main2 img").removeClass('on')
    // $(".mainimg .main2 img").eq(a-1).addClass('on');

    // $(".mainimg .main3 img").removeClass('on')
    // $(".mainimg .main3 img").eq(a-1).addClass('on')};

    let os = $('.imgBox ul.on li img:nth-child(1)').offset().text()
    console.log(os)
    $(".imgBox ul.on li:nth-child(1) img").stop().animate({'transform':'translateX(-400px)'},3000);
    $(".imgBox ul.on li:nth-child(2) img").stop().animate({'transform':'translateX(-550px)'},3000);
    $(".imgBox ul.on li:nth-child(3) img").stop().animate({'transform':'translateX(-400px)'},3000);

    
    
});

$(".photoimg div i").eq(1).click(function(){
    // (a>=0);
    // a++;
    // $(".mainimg .main1 img").removeClass('on')
    // $(".mainimg .main1 img").eq(a+1).addClass('on');

    // $(".mainimg .main2 img").removeClass('on')
    // $(".mainimg .main2 img").eq(a+1).addClass('on');

    // $(".mainimg .main3 img").removeClass('on')
    // $(".mainimg .main3 img").eq(a+1).addClass('on');
    // $(".mainimg li img").removeClass('on')
    // $(".mainimg li img").eq(a).addClass('on')
    
    $(".imgBox ul.on li:nth-child(1) img").stop().animate({'transform':'translateX(1600px)'},1200);
    $(".imgBox ul.on li:nth-child(2) img").stop().animate({'transform':'translateX(2200px)'},1200);
    $(".imgBox ul.on li:nth-child(3) img").stop().animate({'transform':'translateX(1600px)'},1200);

    
    



});










// 박물관 둘러보기 설정
    $(".box2-2 .tab li").click(function(){
        let i = $(this).index()
        // console.log(i)
        $('.box2-2 .tab li span').removeClass('on')
        $('.box2-2 .tab li span').eq(i).addClass('on')

        $('.box2-2 .imgBox li').removeClass('on')
        $('.box2-2 .imgBox li').eq(i).addClass('on')


    });



// TOP버튼 설정

    $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
            $('#MOVE_TOP_BTN').fadeIn();
        } else {
            $('#MOVE_TOP_BTN').fadeOut();
        }
    });
    
    $("#MOVE_TOP_BTN").click(function() {
        $('html, body').animate({
            scrollTop : 0}, 800);
        return false;
    });





}); //제이쿼리 끝부분