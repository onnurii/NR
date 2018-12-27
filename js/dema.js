

///이미지 나타나기///
$(document).ready(function() {
        $('.one').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
       
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).delay(500).animate({'opacity':'1'},2000);
            }
        }); 
    });

//이미지 css바꾸기
$('').mouseover( function(){
	$("").css({background:url(), left:"100px", color:"#ff0000"});
});

$('').mouseleave( function(){
	$("").css({background:url(), left:"100px", color:"#ff0000"});
});

//상단이 어느정도 스크롤 할 시 고정 
$(function(){
$(window).scroll(function(){  //스크롤하면 아래 코드 실행
       if($(window).scrollTop() > '300'){  // 스크롤을 300이상 했을 때
          $("#header").css({"position":"fixed", 'height':'50px', 'background':'#000','width':'100%'});
          $("#header #img1").css({'opacity':'0'});
          $("header .nav").css({'top':'17px'})
          $("header a").css({'color':'#fff','fontSize':'14px'})
          $("header .nav .h1").css({'display':'block', 'fontSize':'18px'})
          $("header .nav .h1 a").css({'fontSize':'24px'})
          $("header .nav .l1").css({'background':'url(../images/l2.png)','backgroundRepeat':'no-repeat','background-size':'cover', 'background-position':'center','width':'35px','height':'35px'})         
       }else if($(window).width() >'414'){ //스크롤300이하에 가로길이 414초과
           $("#header").css({"position":"absolute",'height':'180px', 'background':'rgba(200,200,200,0.2)'});
           $("#header #img1").css({"opacity":"1"});
           $("header .nav").css({'top':'80px'});
           $("header a").css({'color':'#151515','fontSize':'17px'})
           $("header .nav .h1").css('display','none')
           $("header .nav .l1").css({'background':'url(../images/l1.png)','backgroundRepeat':'no-repeat','background-size':'cover', 'background-position':'center','width':'35px','height':'35px'})

}
  });
});

$(window).resize(function() { if($(window).width() <415) { 
  $("header .nav .h1").css('display','block'),
  $("header .nav .l1").css('display','none'),
  $("header #demaM").css('display','block')
  $("header .nav .h1").css('font-size','16px')
 } });


//이미지 변경 

	$('#wrap .two #m1').mouseover(function(){
		$(this).css({'background':'url(../images/m3.png)'})
	})
	$('#wrap .two #m1').mouseleave(function(){
		$(this).css({'background':'url(../images/m1.png)'})
	})


	$('#wrap .two #m2').mouseover(function(){
		$(this).css({'background':'url(../images/m4.png)'})
	})
	$('#wrap .two #m2').mouseleave(function(){
		$(this).css({'background':'url(../images/m2.png)'})
	})


//텍스트 효과
$(".three a").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


//아래에서 위로
$(document).ready(function() {
    $(window).scroll( function(){
        $('#wrap .two').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','marginTop':'0'},1000);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('#wrap .three').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','marginTop':'0'},1000);
            }
            
        }); 
    });
});


//창크기에따라 사이즈 조절
$(document).ready(function(){ 
    $('selector').css('width', $(window).width()); 
    $('selector').css('height', $(window).height()); 
    $(window).resize(function() { 
        $('selector').css('width', $(window).width()); 
        $('selector').css('height', $(window).height()); 
    }); 
});

//헤더 모바일
  $(function(){ //menu 클릭시 리스트 출력
  $("#demaM").click(function(){
      //e.preventDefault(); 기본 이벤트 제거
      $("ul").slideToggle();
      return false; //기본 이벤트, 자식에게 이벤트 전달 제거  
  })
  //브라우저의 사이즈가 변경 될때마다
   $(window).resize(function(){
    var wt = $(window).width();
    //.is(); 기준 객체가 지정된 조건에 일치하는 boolean 형태로 검사
    if(wt > 414 && $("ul").is(":hidden")) {  //디바이스의 크기가 414px 이상이 되고 내비가 화면에서 감춰지면  
      $("ul").removeAttr("style");//모바일 menu 스타일 제거
    }
   });
  });