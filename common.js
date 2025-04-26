
function devicef(){
	var varUA = navigator.userAgent.toLowerCase();

	function detectIE() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}
	
		var trident = ua.indexOf('Trident/');
	
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
	
		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
		   // Edge (IE 12+) => return version number
		   return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}
		// other browser
		return false;
	}

	// user agent
	if (varUA.match('android') != null) {
		$('body').addClass('mobile android');
	  } else if (varUA.indexOf('iphone')>-1||varUA.indexOf('ipad')>-1||varUA.indexOf('ipod')>-1) {
		$('body,html').addClass('mobile iphone');
	  } else if (!detectIE() && (varUA.match('mobile') != null || varUA.match('tablet') != null ||varUA.match('phone') != null) ) {
		$('body').addClass('mobile');
	  } else {
		//아이폰, 안드로이드 외 처리
	
	  }
}

//gnb
function gnbf(){
	var tagHeader	=	$('#header');
	var tagGnbbg	=	$('#gnb-bg');
	var tagGnb	=	$('.gnb');
	var	taggnbLi	=	$('.gnb > li');
	var lastLst	=	$('.gnb > .has-depth .munu-depth01 > li:last-child');
	taggnbLi.each(function(){
		var tagDepth01 = $(this).find('.a-depth01');
		tagDepth01.on('mouseenter , focusin',function(){
			var thisList = $(this).parents("li");
			taggnbLi.removeClass('over');
			thisList.addClass('over');
			tagHeader.addClass('over');
		});
	});
	lastLst.on('focusout',function(){
		taggnbLi.removeClass('over');
		tagHeader.removeClass('over');
	});
	tagGnb.on('mouseleave',function(){
		taggnbLi.removeClass('over');
		tagHeader.removeClass('over');
	});	
}
function gnbcurrentf(depth){
	$('.gnb > li').eq(depth).addClass('on');
}


//layer popup
function layerOpen(type){
	$(type).addClass('pop-on');
	$('body').addClass('body-noscroll');
	setTimeout( function() {
        $(type).attr('tabindex', 0).focus();
    }, 50);
	var heightCalc = function(){
		var pHeaderHeight = 0;
		var pFooterHeight = 0;
		var winHeight = $(window).height();
		var winWidth = $(window).width();

		// 팝업 타이틀 높이값 체크
		if($(type).find('.laypop-head').length) {
			var pHeaderHeight = $(type).find('.laypop-head').innerHeight();
		}
		// 팝업 하단 높이값 체크
		if($(type).find('.laypop-foot').length) {
			var pFooterHeight = $(type).find('.laypop-foot').innerHeight();
		}
		if($(type).is('.lslide') && winWidth < 1280 ){
			var popHeight = winHeight - pHeaderHeight - pFooterHeight;
		}else{
			var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
		}
		
		$(type).find('.laypop-body').css({
			'max-height': popHeight
		});
	}
	heightCalc();
	$(window).resize(function(){
		heightCalc();
	});
}

function layerClose(type, clickBtn){
	var layerNum = $('.layerpop-wrap:visible').length;
	$(type).removeClass('pop-on');
	$(clickBtn).focus();
	if(layerNum < 2){
		$('body').removeClass('body-noscroll');
	}
}

//tab
function tabonoff(){
	setTimeout(function(){
        $('.tabbox a, .tab-type03 a').each(function(){
            if($(this).parent('li').is('.on')){
                $(this).find('.blind').text('선택됨');
            }
        });        
    }, 100);
    $('.tabbox a').on('click', function(e){
		if($(this).parents('.tabbox').is('.multi-tab')){
			if($(this).parent().is('.on')){
				$(this).parent().removeClass('on');
				$(this).find('.blind').text('선택되지 않음');
			}else{
				$(this).parent().addClass('on');
				$(this).find('.blind').text('선택됨');
			}
		}else{
			var targetsb = $(this).parent().siblings();
			targetsb.each(function(){
				$(this).removeClass('on');
				$(this).find('.blind').text('선택되지 않음');
			});
			$(this).parent().addClass('on');
			$(this).find('.blind').text('선택됨');
		}
    });

	$('.multicolor a').on('click', function(){
		if($(this).is('.blue')){
			$('.tab-type02, .racedetail-topbox, .player-wrap, .trot-period').removeClass('red green');
			$('.tab-type02, .racedetail-topbox, .player-wrap, .trot-period').addClass('blue');
		}else if($(this).is('.red')){
			$('.tab-type02, .racedetail-topbox, .player-wrap, .trot-period').removeClass('blue green');
			$('.tab-type02, .racedetail-topbox, .player-wrap, .trot-period').addClass('red');
		}else if($(this).is('.green')){
			$('.tab-type02, .racedetail-topbox, .player-wrap, .trot-period').removeClass('blue red');
			$('.tab-type02, .racedetail-topbox, .player-wrap, .trot-period').addClass('green');
		}else{
			$('.trot-period').removeClass('blue red green');
		}
    });

	$('.tab-type03 .multi-view').on('click', function(e){
		var target = $(this).attr('href');
        if($(this).parent().is('.on')){
			$(this).parent().removeClass('on');
			$(this).find('.blind').text('선택되지 않음');
			$(target).slideUp(500);
			$(target).siblings('.acco-tit').find('.btn-acco').removeClass('on');
		}else{
			$(this).parent().addClass('on');
			$(this).find('.blind').text('선택됨');
			$(target).slideDown(500);
			$(target).siblings('.acco-tit').find('.btn-acco').addClass('on');
			var topposition = $(target).offset();
			var winW = $(window).width();
			if(winW > 1280){
				$("html, body").animate({scrollTop: topposition.top - 210}, 600);
			}else{
				$("html, body").animate({scrollTop: topposition.top - 140}, 600);
			}
		}
		e.preventDefault();
    });
}
function tabView(){
    $('.tabview-link').on('click', function(e){
        var target = $(this).attr('href');
        var targetsb = $(this).parent().siblings();
        targetsb.each(function(){
            var target2 = $(this).find('.tabview-link').attr('href');
            $(target2).hide();
        });
        $(target).show();
        e.preventDefault();
    });
};

// tooltip
function tooltipf(){
	$('.tooltip-wrap .btn-tipview').on('click', function(){
		if($(this).parents('.tooltip-wrap').is('.on')){
            $(this).parents('.tooltip-wrap').removeClass('on');
        }else{
            $('.tooltip-wrap').removeClass('on');
            $(this).parents('.tooltip-wrap').addClass('on');
        }
        toolpositionf();
	});
    $(document).click(function(e){
        if(!$(e.target).hasClass('btn-tipview') && !$(e.target).hasClass('tip-box')){
            $('.tooltip-wrap').removeClass('on');
        }
    });
}
function toolpositionf(){
    var winWidth = $(window).width();
    var target = $('.tooltip-wrap');
    target.each(function(){
        // left 위치 값  변경
        var toolWidth = $(this).find('.tip-box').outerWidth();
        var offsetlNum = $(this).offset().left;
        var gapNum = winWidth - (offsetlNum + toolWidth);
        if (offsetlNum > (winWidth - toolWidth)){
            $(this).find('.tip-box').css('left', gapNum - 20);
        }else{
            $(this).find('.tip-box').css('left', 0);
        }
        
        // top 위치 값
        var offsettNum = $(this).offset().top;
        var dHeight = $(document).height();
        if(offsettNum > (dHeight * 0.7)){
            $(this).addClass('uptop');
        }else{
            $(this).removeClass('uptop');
        }
    });
}

//switch
function inputswitchf(){
	var tagswitch = $('.fe-switch input');
	tagswitch.each(function(){
		var checked = $(this).is(':checked');
		if(checked){
			$(this).next('label').find('.blind').text('on'); //20240418 수정
		}else{
			$(this).next('label').find('.blind').text('off');//20240418 수정
		}
        $(this).click(function(){
			var checked2 = $(this).is(':checked');
			
			if(checked2){
				$(this).next('label').find('.blind').text('on');//20240418 수정
			}else{
				$(this).next('label').find('.blind').text('off');//20240418 수정
			}
		});
    });
}



// animation motion
function setVisible(type){
	if( $(type).length > 0 ){
		var stdPos = $(window).scrollTop() + $(window).height();
		$(type).each(function(){
			if( stdPos >  $(this).offset().top ){
				$(this).addClass('on');
			}
		});
	}
}

// Accordion
function accordionf(){
	$('.acco-list .btn-acco').on('click', function(){
		if($(this).is('.on')){
			$(this).removeClass("on");
			$(this).parents('li').find('.acco-answer').slideUp();
			$(this).find('.blind').text($(this).find('.blind').text().replace("내용닫기","내용보기"));
        }else{
			$(this).parents('.acco-list').find('.acco-answer').slideUp();
			$(this).parents('.acco-list').find('.btn-acco').removeClass("on");
			$(this).addClass("on");
            $(this).parents('li').find('.acco-answer').slideDown();
			$(this).find('.blind').text($(this).find('.blind').text().replace("내용보기","내용닫기"));
        }
	});

	$('.acco-box .btn-acco').on('click', function(){
		var indenum = $(this).parents('.acco-box').index();
		if($(this).is('.on')){
			$(this).removeClass("on");
			$(this).parents('.acco-box').find('.acco-con').slideUp(600);
			$(this).parents('.acco-box').removeClass('open');
			$(this).find('.blind').text($(this).find('.blind').text().replace("내용닫기","내용보기"));
			$('.tab-type03.multi-tab li').eq(indenum).removeClass('on');
        }else{
			$(this).addClass("on");
            $(this).parents('.acco-box').find('.acco-con').slideDown(600);
			$(this).find('.blind').text($(this).find('.blind').text().replace("내용보기","내용닫기"));
			$(this).parents('.acco-box').addClass('open');
			$('.tab-type03.multi-tab li').eq(indenum).addClass('on');
        }
	});
}


// 전체메뉴
function allmenuf(){
	$('.btn-allmenu').off().on('click', function(){
		if($(this).is('.open')){
			$(this).removeClass('open');
			$(this).find('.blind').text('전체메뉴 열기');
			$('body').removeClass('allmenu-open');
			$(this).css("display","none");
        }else{
			$(this).addClass('open');
			$(this).find('.blind').text('전체메뉴 닫기');
			$('body').addClass('allmenu-open');
			$(this).css("display","block");
			setTimeout(function(){
				allmenuHeight() // 모바일 전체메뉴  min-height 
			}, 50);
        }
	});
	$('.bot-fixmenu .ico04 a').off().on('click', function(e){
		$('.btn-allmenu').addClass('open');
		$('.btn-allmenu').find('.blind').text('전체메뉴 닫기');
		$('body').addClass('allmenu-open');
		$('.btn-allmenu').css("display","block");
		setTimeout(function(){
			allmenuHeight() // 모바일 전체메뉴  min-height 
		}, 50);
		e.preventDefault();
	});
	$('.allmenu-ul > li.has-depth > .a-depth01').on('click', function(e){
		if($(this).parent('li').is('.on')){
			$(this).parent('li').removeClass("on");
			$(this).parent('li').find('.submenu-wrap').slideUp();
		}else{
			$(this).parent('li').siblings('li').removeClass("on");
			$('.allmenu-ul .submenu-wrap').slideUp();
			$(this).parent('li').addClass("on");
			$(this).parent('li').find('.submenu-wrap').slideDown();
		}
		
		e.preventDefault();
	});
}

function allmenuHeight(){
	var headerH = 0;
	var topH = 0;
	var winH = $(window).height();
	var winW = $(window).width();
	if($('#header').length) {
		var headerH = $('#header').innerHeight();
	}
	if($('.allmenu-inbox .top-area').length) {
		var topH = $('.allmenu-inbox .top-area').innerHeight();
	}
	var minH = winH - (headerH + topH);
	$('.momenu-wrap').css("min-height", minH);

	if(winW > 1280){
		$('body').removeClass('allmenu-open');
		$('.btn-allmenu').removeClass('open');
		$('.btn-allmenu').find('.blind').text('전체메뉴 열기');
	}
}

// top 버튼
function wintopf(){
	$('.btn-wintop').on('click', function(){
		$('html').animate({
			scrollTop: 0
			}, 300);  // 탑 이동 스크롤 속도
		return false;
	});
}

// 로그인
function loginf(){
	$(document).on('click', '.login-wrap .fe-wrap .txt-error', function () {
		$(this).hide();
		$(this).siblings('.fe-input').focus();
	});
	// $('.login-wrap .fe-wrap.with-btn .fe-input').on('focus', function(){
		
	// });
	$('.login-wrap .fe-wrap.with-btn .fe-input').on('input', function(){ /*20231115 접근성 수정*/
		if($('.login-wrap .fe-wrap.with-btn .fe-input').val() == "") {
			$(this).siblings('.btn-pwview').hide();
		}else{
			$(this).siblings('.btn-pwview').show();
		}
	})
	$('.login-wrap .fe-wrap.with-btn .fe-input').on('focusout', function(){
		if ($(this).val().length === 0) {
            $(this).siblings('.btn-pwview').hide();
        }
	});
	$('.login-wrap .btn-pwview').on('click', function(){
		if($(this).is('.disable')){
			$(this).siblings('.fe-input').prop('type', "password");
			$(this).siblings('.fe-input').focus();
			$(this).removeClass('disable');
			$(this).find('.blind').text('비밀번호 보기');
        }else{
			$(this).addClass('disable');
			$(this).siblings('.fe-input').prop('type', "text");
			$(this).siblings('.fe-input').focus();
			$(this).find('.blind').text('비밀번호 숨기기');
        }
	});
}

// 토스트 팝업
function toastf(text){
	if($('.toast-popup').length){
		$('.toast-popup').remove();
	}
	$('#wrapper').append('<div class="toast-popup"><p class="txt"></p></div>');
	$('.toast-popup .txt').text(text);
	$('.toast-popup').fadeIn(400).delay(1000).fadeOut(400);
}

// 경주 일정 선택
function dateslidef(){
	var settings = {
		direction: "vertical",
		slidesPerView: "auto",
		centeredSlides: true,
		initialSlide: 1,
		navigation: {
			nextEl: ".btn-date-next",
			prevEl: ".btn-date-prev",
		},
	}

	dateswiper = new Swiper('.date-slidebox', settings);
}

// 출전마 컬럼 보기
function colveiwf(){
	$('.top-btnsort button').on('click', function(){
		$(this).siblings('button').removeClass('on');
		$(this).addClass('on');
		if($(this).is('.btn-col01')){
			$('.record-wrap').addClass('col01');
        }else{
			$('.record-wrap').removeClass('col01');
        }
	});
}

$(function() {
	devicef(); // device 구분
	gnbf(); // gnb
	tabView(); //tab
	tabonoff(); //tab
	tooltipf(); // tooltip
	accordionf(); //Accordion
	inputswitchf(); //switch
	wintopf(); // top 버튼
	allmenuf(); //전체메뉴
	loginf(); //로그인
	colveiwf(); // // 출전마 컬럼 보기

	setTimeout(function(){
		$('.flt-box .link-r').removeClass('sizes');
    }, 700);

	setTimeout(function(){
		$('.flt-box .link-r .txt').addClass('on');
    }, 1000);
	
	setTimeout(function(){
		$('.flt-box .link-r').addClass('sizes');
		$('.flt-box .link-r .txt').removeClass('on');
    }, 5000);

	dateslidef(); // 경주일정 선택
});

$(window).resize(function(){
	//tooltip
    if($('.tip-box:visible').length) {
		toolpositionf();
	}

	allmenuHeight() // 모바일 전체메뉴  min-height
});

$(window).scroll(function(){
	//header
	var winSCT = $(this).scrollTop();

	if(winSCT > 0){
		$('#header').addClass('header-fixed');
	}else{
		$('#header').removeClass('header-fixed');
	}

	//top 버튼
	if( winSCT > 100 ){
		$('.flt-box').addClass('wintop-on');
	}else{
		$('.flt-box').removeClass('wintop-on');
	}
	
	
	
	setVisible('.ani-motion');

});

