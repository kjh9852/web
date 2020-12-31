			//라이트 박스
			$(".lightgallery").lightGallery({
				thembnail:true,
				autoplay: true,
				pause: 3000,
				progressbar: true
			});


			//윈도우 팝업
			$(".window").click(function(e){
				e.preventDefault();
				//window.open("파일명","팝업이름","옵션설정");
				//옵션 : left, top , width, height, status, toolbar, location, menubar , scroollbars, fullscreen
				window.open("popup.html", "popup01" ,"width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
			});


			//레이어 팝업 
        $(".layer").click(function(e){
            e.preventDefault();
            //$("#layer").css("display","block");
            //$("#layer").show();
            //$("#layer").fadeIn();
            $("#layer").slideDown();
        });
        $("#layer .close").click(function(e){
            e.preventDefault();
            //$("#layer").css("display","none");
            //$("#layer").hide();
            //$("#layer").fadeOut();
            $("#layer").slideUp();
        });

		    //탭메뉴
		    var $tab_list = $ (".tab_menu");
		    $tab_list.find("ul ul").hide();
		    $tab_list.find("li.active > ul").show();
		    function tabmenu(e) {
		    	e.preventDefault();
		    	var $this = $(this);
		    	$this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
		    }
		    $tab_list.find("ul>li>a").click(tabmenu).focus(tabmenu);

			//배너
			//html 마크업 셋팅 -> css연동 -> 제이쿼리 연동 --> 제이쿼리 호출
			  $(".ban").slick({
			       infinite: true,
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  autoplay: true,
				  autoplaySpeed : 3000,
				  dots: true
			  });

			  //갤러리
 				$(".gallery_img").slick({
 				infinite: true,
 				arrows:false,
 				fade:true,
 				autoplay:true,
 				autoplaySpeed:3000,
 				slidesToShow:1,
 				pauseOnHover:true,
 				speed:300

			  });

 			   $(".play").click(function(){
 			   		$(".gallery_img").slick("slickPlay");
 			   });
 			   		   $(".stop").click(function(){
 			   		$(".gallery_img").slick("slickPause");
 			   });
 			   		   $(".prev").click(function(){
 			   		$(".gallery_img").slick("slickPrev");
 			   }); 			   		   
 			   		   $(".next").click(function(){
 			   		$(".gallery_img").slick("slickNext");
 			   });

		//버튼 클릭하면 전체 메뉴를 보이게 하세요.
		$(".tit .btn").click(function(e) {
			e.preventDefault();
			//$("#cont_nav").css("display","block");
			//$("#cont_nav").show();
			//$("#cont_nav").fadeIn();
			//$("#cont_nav").slideDown();
			//$("#cont_nav").toggle()
			//$("#cont_nav").fadeToggle();
			$("#cont_nav").slideToggle(300);
            $(this).toggleClass("on");
		});