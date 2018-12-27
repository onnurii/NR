$(function(){
	//브라우저(뷰포트 viewport)의 높이값을 article의 높이값으로 갱신
	var ht = $(window).height();
	$("article").height(ht);

	//브라우저가 리사이즈 될 때마다 article의 높이값 갱신
	$(window).on("resize", function(){
		var ht = $(window).height();
		$("article").height(ht);
	});

	//각 article 안의 움직이는 이미지 제어
	$("article").on("mousemove", function(){
		//마우스 커서의 위치 저장
		var x = event.pageX;
		var y = event.pageY;

		//첫 번째 페이지 이미지 위치값
		$(".img11").css({right:0-x/30, bottom:0-y/30});
		$(".img12").css({right:20+x/20, bottom:-40+y/20});
		$(".img13").css({right:100+x/20, bottom:600+y/20});

		//두 번째 페이지 이미지 위치값
		$(".img21").css({right:-300-x/30, bottom:-180-y/30});
		$(".img22").css({right:40+x/20, bottom:-20+y/20});

		//세 번째 페이지 이미지 위치값
		$(".img31").css({right:180-x/30, bottom:30-y/30});
		$(".img32").css({right:-110+x/20, bottom:10+y/20});
		$(".img33").css({right:-70+x/20, bottom:-130+y/20});

		//네 번째 페이지 이미지 위치값
		$(".img41").css({right:20-x/30, bottom:-120-y/30});
		$(".img42").css({right:0+x/20, bottom:-180+y/20});
	});

	//내비게이션의 메뉴 클릭시 해당 페이지로 이동
	$("#gnb li").on("click", function(){
		var ht = $(window).height();//브라우저의 높이값 저장 = article의 높이값
		var idx = $(this).index();//각각의 메뉴의 인덱스 번호를 저장

		var articleT = ht * idx;//현재 박스의 스크롤 위치값

		$("html, body").stop().animate({"scrollTop": articleT }, 1000);
	});

	//스크롤 될 때마다 해당 페이지의 내비게이션 메뉴 인식
	
	$(window).on("scroll", function(){
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		/*
		if(scroll>=ht*0 && scroll<ht*1){//첫번째 메뉴의 첫번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(0).addClass('on');
		}
		if(scroll>=ht*1 && scroll<ht*2){//두번째 메뉴의 두번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(1).addClass('on');
		}
		if(scroll>=ht*2 && scroll<ht*3){//세번째 메뉴의 세번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(2).addClass('on');
		}
		if(scroll>=ht*3 && scroll<ht*4){//네번째 메뉴의 네번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(3).addClass('on');
		}
		*/

		for(var i=0; i<4; i++){//0~3까지 1씩 증가
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$("#gnb li").removeClass();
				$("#gnb li").eq(i).addClass('on');
			}
		}
	});

	//article 위에서 마우스 휠을 움직이면
	$("article").on("mousewheel", function(event, delta){
		if(delta > 0){//마우스 휠을 올렸을 때
			//현재 article의 이전 article의 상단에서부터의 위치로
			//.offset().top 기준 객체가 브라우저 상단에서부터의 거리  
			var prev = $(this).prev().offset().top;
			$("html, body").stop().animate({"scrollTop": prev },1000, "easeOutBounce");
		} else if (delta < 0) {//마우스 휠을 내렸을 때
			var next = $(this).next().offset().top;
			$("html, body").stop().animate({"scrollTop":next}, 1000, "easeOutBounce");
		}
	});

});