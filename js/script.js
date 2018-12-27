//햄버거클릭시 메뉴나타나기

$('#nav0').click(function(){
		$('.menu').slideDown()
	})


$('h2').click(function(){
		$('.menu').slideUp()
	})
$('.back').click(function(){
		$('.menu').slideUp()
	})

//늦게 나오기
$(document).ready(function(){
	$('.t3').fadeIn(2000);
	})
$(document).ready(function(){
	$('.t4').fadeIn(3000);
	})






//마우스 이동

$(function(){
	//브라우저(뷰포트 viewport)의 높이값을 article의 높이값으로 갱신
	var ht = $(window).height();
	$("article").height(ht);

	//브라우저가 리사이즈 될 때마다 article의 높이값 갱신
	$(window).on("resize", function(){
		var ht = $(window).height();
		$("article").height(ht);
	});





$("article").on("mousemove", function(){
		//마우스 커서의 위치 저장
		var x = event.pageX;
		var y = event.pageY;

		//첫 번째 페이지 이미지 위치값
		$(".t3").css({left:-260-x/20, top:100-y/20});
		$(".t4").css({left:-260+x/55, top:100+y/55});
	});
});


