
var getJsonData = function(method, url, param, errorYn) {

	var returnJson = "";
	$.ajax({
		  type : method 		// 전송타입
		, url : url 			// 액션
		, data : param 		// 파라미터
		, dataType : "json"	// 데이타타입은 json으로 설정
		, async : false		// 동기형태로 실행
		, cache : false		// 캐시저장안함
		, beforeSend : function(xhr){
			//xhr.setRequestHeader("Load-Menu-Sn",loadMenuSn);
		}
		, success : function(data, textStatus,xhr) { //요청 성공하면
			returnJson = xhr; //return받은 결과를 json 객체로 parsing함.
		}
		, complete : function(){
		}
		, error : function(xhr, textStatus, errorThrown) { //요청 실패하면
			if(xhr.responseText.indexOf("<title>알림</title>") > -1){
				$("body").append(xhr.responseText);
			}else{
				fnAlert("처리중 오류가 발생하였습니다.",function(){
					if(location.hostname == "127.0.0.1"){
						console.log(xhr);
					}
				});
			}
		} //error end
	}); //ajax end
	
	return returnJson;
}

var getHtmlData = function(method, url, param, target) {

	var returnJson = "";
	
	$.ajax({
		  type : method 		// 전송타입
		, url : url 			// 액션
		, data : param 		// 파라미터
		, dataType : "html"	// 데이타타입은 json으로 설정
		, async : false		// 동기형태로 실행
		, cache : false		// 캐시저장안함
		, beforeSend : function(xhr){
			//xhr.setRequestHeader("Load-Menu-Sn",loadMenuSn);
		}
		, success : function(data, textStatus,xhr) { //요청 성공하면
			if(target != undefined && target != ""){
				$(target).html(data);
			}else{
				$("body").append(data);
			}
			if(!$('body').hasClass('body-noscroll')){
				$('body').addClass('body-noscroll');
			}
		}
		, complete : function(){
		}
		, error : function(xhr, textStatus, errorThrown) { //요청 실패하면
			if(xhr.responseText.indexOf("<title>알림</title>") > -1){
				$("body").append(xhr.responseText);
			}else{
				fnAlert("처리중 오류가 발생하였습니다.",function(){
					if(location.hostname == "127.0.0.1"){
						console.log(xhr);
					}
				});
			}
		} //error end
	}); //ajax end
	
	return returnJson;
}

var getJsonDataWithFile = function(method, url, param, target) {
	
	var returnJson = "";
	
	$.ajax({
		  type : method
		, url : url
		, data : param
		, dataType : "json"
		, processData : false	//data 파라미터 강제 String 변환 방지
		, contentType : false
		, async : false
		, cache : false
		, beforeSend : function(xhr){
			//xhr.setRequestHeader("Load-Menu-Sn",loadMenuSn);
		}
		, success : function(data, textStatus,xhr) { //요청 성공하면
			returnJson = xhr; //return받은 결과를 json 객체로 parsing함.
		}
		, complete : function(){
		}
		, error : function(xhr, textStatus, errorThrown) { //요청 실패하면
			if(xhr.responseText.indexOf("<title>알림</title>") > -1){
				$("body").append(xhr.responseText);
			}else{
				fnAlert("처리중 오류가 발생하였습니다.",function(){
					if(location.hostname == "127.0.0.1"){
						console.log(xhr);
					}
				});
			}
		} //error end
	});
	
	return returnJson;
	
}

//팝업 삭제
function closeRemovePopup($popName,returnUrl,_popButton){
	var layerNum = $('.layerpop-wrap:visible').length;
	$("#"+$popName).remove();
	if(layerNum < 2){
		$('body').removeClass('body-noscroll');
	}
	
	if(returnUrl != undefined && returnUrl != ""){
		location.href=returnUrl;
	}else{
		$("#"+_popButton).focus();
	}
}

function fnConfirmT(msg,callback,title,callback2){
	$("#popAlert01").remove();
	$("#popAlert02").remove();
	$("#popAlert03").remove();
	if(!$('body').hasClass('body-noscroll')){
		$('body').addClass('body-noscroll');
	}
	
	$("body").append(alertObj(msg,title,"1"));
	
	$("#popAlert01 .btnConfirmClose").unbind("click");
	$("#popAlert01 .btnConfirmOk").unbind("click");
	$("#popAlert01 .btnConfirmClose").focus();
	
	$("#popAlert01").on("click",".btnConfirmOk",function(e){
		$("#popAlert01").remove();
		var layerNum = $('.layerpop-wrap:visible').length;
		if(layerNum < 2){
			$('body').removeClass('body-noscroll');
		}
		if(typeof callback != 'undefind' && callback){
			if(typeof callback == 'function'){
				$("#popAlert01 .btnConfirmOk").unbind("click");
				callback();
			} else {
				if(callback){
					eval(callback);
				}
			}
		}
	});
	$("#popAlert01").on("click",".btnConfirmClose",function(e){
		$("#popAlert01 .btnConfirmClose").unbind("click");
		$("#popAlert01").remove();
		var layerNum = $('.layerpop-wrap:visible').length;
		if(layerNum < 2){
			$('body').removeClass('body-noscroll');
		}
		if(typeof callback2 != 'undefind' && callback2){
			if(typeof callback2 == 'function'){
				$("#popAlert01 .btnConfirmClose").unbind("click");
				callback2();
			} else {
				if(callback2){
					eval(callback2);
				}
			}
		}
	});
}

function fnConfirm(msg,callback){
	$("#popAlert01").remove();
	$("#popAlert02").remove();
	$("#popAlert03").remove();
	if(!$('body').hasClass('body-noscroll')){
		$('body').addClass('body-noscroll');
	}
	
	$("body").append(alertObj(msg,"","2"));
	
	$("#popAlert02 .btnConfirmClose").unbind("click");
	$("#popAlert02 .btnConfirmOk").unbind("click");
	$("#popAlert02 .btnConfirmOk").focus();
	
	$("#popAlert02").on("click",".btnConfirmOk",function(e){
		$("#popAlert02").remove();
		var layerNum = $('.layerpop-wrap:visible').length;
		if(layerNum < 2){
			$('body').removeClass('body-noscroll');
		}
		if(typeof callback != 'undefind' && callback){
			if(typeof callback == 'function'){
				$("#popAlert02 .btnConfirmOk").unbind("click");
				callback();
			} else {
				if(callback){
					eval(callback);
				}
			}
		}
	});
	$("#popAlert02").on("click",".btnConfirmClose",function(e){
		$("#popAlert02 .btnConfirmClose").unbind("click");
		$("#popAlert02").remove();
		var layerNum = $('.layerpop-wrap:visible').length;
		if(layerNum < 2){
			$('body').removeClass('body-noscroll');
		}
	});
}

//알림창
function fnAlert(msg,callback){
	$("#popAlert01").remove();
	$("#popAlert02").remove();
	$("#popAlert03").remove();
	if(!$('body').hasClass('body-noscroll')){
		$('body').addClass('body-noscroll');
	}
	
	$("body").append(alertObj("",msg,"3"));
	
	setTimeout( function() {
		$("#popAlert03").attr('tabindex', 0).focus();
	}, 50);
	
	$("#popAlert03 .btnAlertOk").unbind("click");
	$("#popAlert03 .btnAlertOk").focus();
	
	$("#popAlert03").on("click",".btnAlertOk",function(e){
		$("#popAlert03").remove();
		var layerNum = $('.layerpop-wrap:visible').length;
		if(layerNum < 2){
			$('body').removeClass('body-noscroll');
		}
		if(typeof callback != 'undefind' && callback){
			if(typeof callback == 'function'){
				$("#popAlert03" + " .btnAlertOk").unbind("click");
				callback();
			} else {
				if(callback){
					eval(callback);
				}
			}
		}
	});
}

function alertObj(msg,title,type){
	let obj = "";
	if(type == "1"){
		obj += "<div class='layerpop-wrap alert pop-on' id='popAlert01'>";
		obj += "<div class='layerpop-inbox'>";
		obj += "<div class='laypop-body'>";
		if(title != undefined && title != ""){
			obj += "<p class='tit'>" + title + "</p>";
		}
		obj += "<p class='txt'>" + msg + "</p>";
		obj += "</div>";
		obj += "<div class='laypop-foot'>";
		obj += "<div class='btn-box'>";
		obj += "<button type='button' class='btn gray btnConfirmClose'>취소</button>";
		obj += "<button type='button' class='btn btnConfirmOk'>확인</button>";
		obj += "</div>";
		obj += "</div>";
		obj += "</div>";
		obj += "</div>";
	}else if(type == "2"){
		obj += "<div class='layerpop-wrap alert pop-on' id='popAlert02'>";
		obj += "<div class='layerpop-inbox'>";
		obj += "<div class='laypop-body'>";
		obj += "<p class='txt'>" + msg + "</p>";
		obj += "</div>";
		obj += "<div class='laypop-foot'>";
		obj += "<div class='btn-box'>";
		obj += "<button type='button' class='btn gray btnConfirmClose'>취소</button>";
		obj += "<button type='button' class='btn btnConfirmOk'>확인</button>";
		obj += "</div>";
		obj += "</div>";
		obj += "</div>";
		obj += "</div>";
	}else if(type == "3"){
		obj += "<div class='layerpop-wrap alert pop-on' id='popAlert03'>";
		obj += "<div class='layerpop-inbox'>";
		obj += "<div class='laypop-body'>";
		obj += "<p class='tit'>" + title + "</p>";
		obj += "</div>";
		obj += "<div class='laypop-foot'>";
		obj += "<div class='btn-box'>";
		obj += "<button type='button' class='btn btnAlertOk'>확인</button>";
		obj += "</div>";
		obj += "</div>";
		obj += "</div>";
		obj += "</div>";
	}
	return obj;
}

/**숫자만 입력 
 * input에 onKeyup="fnOnlyNumber(this)" 추가 
 */ 
function fnOnlyNumber(obj){
	obj.value = obj.value
		.replace(/[^0-9]/g,'');
}

/* datepicker 숫자만 입력 후 하이픈(-) 처리 */
function fnReplaceDate(obj){
	obj.value = obj.value
		.replace(/[^0-9]/g,'')
		.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g ,"$1-$2-$3")
		.replace(/-{1,2}$/g, '');
}

function fnReplaceSpDate(obj){
	return obj.replace(/[`~!@#$%^&*()_|+\-=?;'",.<>\{\}\[\]\\\/ ]/gim,'');
}

var login = {
	kraurl : "https://www.kra.co.kr/"
	, fnLoginAct : function() {
		if(login.fnLoginActVaild()){
			var _json = getJsonData("post","/loginJs.do",$("#loginfrm").serialize());
			if(_json.responseJSON.msgCd == "LOG_LOGIN_000"){
				login.fnSaveId();
				location.reload();
			}else{
				fnAlert(_json.responseJSON.msgNm,function(){
					});
			}
		}
	}
	, fnLogin : function(returnUrl,popBtn){
		let param = "";
		param += "&popNm=popLogin";
		if(popBtn != undefined && popBtn != ""){			
			param += "&popBtn=" + popBtn;
		}
		if(returnUrl != undefined && returnUrl != ""){
			param += "&returnUrl=" + returnUrl;
		}
		getHtmlData("post","/loginHtmlJs.do",param);
		loginf();
		login.fnGetSaveId();
		$("#loginfrm .fe-input").focus();
		
	}
	, fnLoginActVaild : function(){
		$("#loginfrm .noneLoginId").hide();
		
		if($("#loginfrm input[name=loginId]").val() == ""){
			fnAlert("아이디를 입력해주세요.",function(){
				$("#loginfrm input[name=loginId]").focus();
			});
			return false;
		}
		$("#loginfrm .noneLoginPwd").hide();
		if($("#loginfrm input[name=loginPwd]").val() == ""){
			fnAlert("비밀번호를 입력해주세요.",function(){
				$("#loginfrm input[name=loginPwd]").focus();
			});
			return false;
		}
		return true;
	}
	, fnJoin : function (){
		location.href=login.kraurl + "memb/join01.do";
		//location.href=login.kraurl + "join/memjoin1.do";
	}
	, fnFindId : function(){
		location.href=login.kraurl + "memb/idFind.do";
		//location.href=login.kraurl + "help/id_search.do?Act=00&Sub=5";
	}
	, fnFindPw: function(){
		location.href=login.kraurl + "memb/pwFind.do";
		//location.href=login.kraurl + "help/member_pass_find.do?Act=00&Sub=6";
	}
	, fnDelSaveId : function(obj){
		if(!$(obj).is(":checked")){
			const loginId = $("input[name=loginId]").val();
			document.cookie = "saveuserid=" + escape(loginId) + "; path=/; expires=-1;";
		}
	}
	, fnSaveId : function(){
		const loginId = $("input[name=loginId]").val();
		if($("#sCheck02").is(":checked")){
			var today = new Date();
			today.setDate(today.getDate() + 7);
			document.cookie = "saveuserid=" + escape(loginId) + "; path=/; expires=" + today.toGMTString() + ";";
		}else{
			document.cookie = "saveuserid=" + escape(loginId) + "; path=/; expires=-1;";
		}
	}
	, fnGetSaveId : function(){
		var cook = document.cookie + ";";
		var idx = cook.indexOf("saveuserid", 0);
		var val = "";
		
		if (idx != -1) {
			cook = cook.substring(idx, cook.length);
			begin = cook.indexOf("=", 0) + 1;
			end = cook.indexOf(";", begin);
			val = unescape(cook.substring(begin, end));
		}
		if (val != "") {
			$("input[name=loginId]").val(val);
			$("#sCheck02").prop("checked",true);
		}
	}
}