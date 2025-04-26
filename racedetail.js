var raceDetailInfo = {
	param : {
		today : null
		, meet : null
		, rcDate : null
		, rcNo : null
		, items : null
		, raceinfo : null
		, weightList : null
	}
	, fnRaceDetailInfo : function(){//출전정보
		
		var items = raceDetailInfo.param.items;
		
		//set race basic data
		var basic = raceDetailInfo.param.raceinfo.basic;
		for(let i=0;i<basic.length;i++){
			if(raceDetailInfo.param.meet == basic[i].meet
				&& raceDetailInfo.param.rcDate == basic[i].rcDate
				&& raceDetailInfo.param.rcNo == basic[i].rcNo){
				if(items.itemGa == "Y"){
					let txt = "<p class='txt-grade'>";
					txt += "<span>" + basic[i].rank + "</span>";
					if(basic[i].newHrCond != "" && basic[i].newHrCond != undefined){
						txt += "<span>" + basic[i].newHrCond + " ";
					}
					txt += "<span>" + basic[i].ageCond + "</span>";
					txt += "<span>" + basic[i].sexCond + "</span>";
					txt += "<span>" + basic[i].budam + "</span>";
					txt += "<span>" + basic[i].prizeCond + "</span>";
					txt += "</p>";
					$(".racedetail-inbox").append(txt);
				}
				if(items.itemNa == "Y" && basic[i].fdtWgtVl != undefined){
					let txt = "";
					txt += "<p class='txt-horse'><span>" + basic[i].fdtWgtVl + "</span></p>";
					$(".racedetail-inbox").append(txt);
				}
				if(items.itemDa == "Y" && basic[i].itemDa != undefined){
					if("일반" != basic[i].rcName){
						let txt = "";
						txt += basic[i].rcName;
						$("#vItemDa").html(txt);
					}
				}
				if(items.itemRa == "Y" || items.itemMa == "Y" || items.itemBa == "Y"){
					let txt = "";
					txt += "<div class='tbl-wrap tbl-type04'>";
					txt += "<div class='tbl-inbox'>";
					txt += "<table>";
					txt += "<caption>구분, 우승마 평균기록, 최고기록[부담중량, 함수율]으로 구성된 표</caption>";
					txt += "<colgroup>";
					txt += "<col style='width:32%'>";
					txt += "<col style='width:24%'>";
					txt += "<col>";
					txt += "</colgroup>";
					txt += "<thead>";
					txt += "<tr>";
					txt += "<th scope='col'>구분</th>";
					txt += "<th scope='col'>우승마<br>평균기록</th>";
					txt += "<th scope='col'>최고기록<br>[부담중량, 함수율]</th>";
					txt += "</tr>";
					txt += "</thead>";
					txt += "<tbody id='vItemRaMaBaTbody'>";
					txt += "</tbody>";
					txt += "</table>";
					txt += "</div>";
					txt += "</div>";
					$(".racedetail-inbox").append(txt);
					if(items.itemRa == "Y" && basic[i].revntClasChmpRcdVl != undefined && basic[i].revntClasHgstRcdVl != undefined){
						let txt = "";
						txt += "<tr>";
						txt += "<th scope='row'>해당등급</th>";
						txt += "<td>" + basic[i].revntClasChmpRcdVl + "</td>";
						txt += "<td class='align-l'>" + basic[i].revntClasHgstRcdVl + "</td>";
						txt += "</tr>";
						$("#vItemRaMaBaTbody").append(txt);
					}
					if(items.itemMa == "Y" && basic[i].rccrsChmpRcdVl != undefined && basic[i].rccrsHgstRcdVl != undefined){
						let txt = "";
						txt += "<tr>";
						txt += "<th scope='row'>서울(국+외)</th>";
						txt += "<td>" + basic[i].rccrsChmpRcdVl + "</td>";
						txt += "<td class='align-l'>" + basic[i].rccrsHgstRcdVl + "</td>";
						txt += "</tr>";
						$("#vItemRaMaBaTbody").append(txt);
					}
					if(items.itemBa == "Y" && basic[i].lclHrsChmpRcdVl != undefined && basic[i].lclHrsHgstRcdVl != undefined){
						let txt = "";
						txt += "<tr>";
						txt += "<th scope='row'>서울(국)</th>";
						txt += "<td>" + basic[i].lclHrsChmpRcdVl + "</td>";
						txt += "<td class='align-l'>" + basic[i].lclHrsHgstRcdVl + "</td>";
						txt += "</tr>";
						$("#vItemRaMaBaTbody").append(txt);
					}
				}
				if(items.itemSa == "Y"){
					let txt = "";
					
					txt += "<div class='tbl-wrap tbl-type04'>";
					txt += "<div class='tbl-inbox'>";
					txt += "<table>";
					txt += "<caption>순위상금으로 구성된 표</caption>";
					txt += "<colgroup>";
					txt += "<col style='width:24%'>";
					txt += "<col>";
					txt += "<col style='width:24%'>";
					txt += "<col>";
					txt += "</colgroup>";
					txt += "<thead>";
					txt += "<tr>";
					txt += "<th scope='col' colspan='4'>순위상금(" + basic[i].chaksun + ")</th>";
					txt += "</tr>";
					txt += "</thead>";
					txt += "<tbody>";
					txt += "<tr>";
					txt += "<th scope='row'>1위</th>";
					txt += "<td>" + basic[i].chaksun1 + "</td>";
					txt += "<th scope='row'>2위</th>";
					txt += "<td>" + basic[i].chaksun2 + "</td>";
					txt += "</tr>";
					txt += "<tr>";
					txt += "<th scope='row'>3위</th>";
					txt += "<td>" + basic[i].chaksun3 + "</td>";
					txt += "<th scope='row'>4위</th>";
					txt += "<td>" + basic[i].chaksun4 + "</td>";
					txt += "</tr>";
					txt += "<tr>";
					txt += "<th scope='row'>5위</th>";
					txt += "<td colspan='3'>" + basic[i].chaksun5 + "</td>";
					txt += "</tr>";
					txt += "</tbody>";
					txt += "</table>";
					txt += "</div>";
					txt += "</div>";
					$(".racedetail-inbox").append(txt);
				}
				break;
			}
		}
		
		$(".hrDtl").each(function(){
			var chulNo = $(this).data("chulno");
			if(chulNo != "" && chulNo != undefined){
			
				//set hr detail data
				var detail = raceDetailInfo.param.raceinfo.detail;
				
				for(let i=0;i<detail.length;i++){
					if(raceDetailInfo.param.meet == detail[i].meet
						&& raceDetailInfo.param.rcDate == detail[i].rcDate
						&& raceDetailInfo.param.rcNo == detail[i].rcNo
						&& chulNo == detail[i].chulNo){
						
						let item1_22txt = "<div class='infoArng'>";
						item1_22txt += "<div class='leftInfo'>";
						
						if(items.item2 == "Y"){
							item1_22txt += "<p class='txt-round'>" + detail[i].hrsAttrTxt + "<span class='btn-box'><button type='button' class='btn-dtaillayer'";
							item1_22txt += " onclick='raceDetailInfo.fnInfoTools(\"" + detail[i].chulNo + "\")' id='infoToolsBtn_" + detail[i].chulNo + "'";
							item1_22txt += "><em class='blind'>출전마 장구 사용현황 상세보기</em></button></span></p>";
						}
						
						if(items.item3 == "Y" || items.item4 == "Y"
							|| items.item5 == "Y" || items.item6 == "Y"
							|| items.item7 == "Y" || items.item8 == "Y"
							|| items.item9 == "Y" || items.item10 == "Y"
							|| items.item11 == "Y" || items.item12 == "Y"){
							item1_22txt += "<p class='txt-infor01'>";
							
							let item3_12txt = "";
							
							if(items.item3 == "Y" && detail[i].hrsPrsTxt != undefined){
								item3_12txt += detail[i].hrsPrsTxt + "<br/>";
							}
							if(items.item4 == "Y" && detail[i].trarOwnerNm != undefined){
								item3_12txt += detail[i].trarOwnerNm + "<br/>";
							}
							if(items.item5 == "Y"){
								item3_12txt += detail[i].sumpRcodTxt + "<br/>";
							}
							if(items.item6 == "Y" || items.item7 == "Y" || items.item8 == "Y"){
								if(items.item6 == "Y" && detail[i].latstTnlmGradeTxt1 != undefined){
									item3_12txt += detail[i].latstTnlmGradeTxt1 + " ";
								}
								if(items.item7 == "Y" && detail[i].latstTnlmGradeTxt2 != undefined){
									item3_12txt += detail[i].latstTnlmGradeTxt2 + " ";
								}
								if(items.item8 == "Y" && detail[i].latstTnlmGradeTxt3 != undefined){
									item3_12txt += detail[i].latstTnlmGradeTxt3 + " ";
								}
								item3_12txt += "<br/>";
							}
							if(items.item9 == "Y" && detail[i].trckRcodTxt != undefined){
								item3_12txt += detail[i].trckRcodTxt + "<br/>";
							}
							if(items.item10 == "Y"){
								item3_12txt += detail[i].corpdHgstRcdVl + "<br/>";
							}
							if(items.item11 == "Y"){
								item3_12txt += detail[i].corpdAvgRcdVl + "<br/>";
							}
							if(items.item12 == "Y"){
								if(detail[i].equipTxt != undefined){
									item3_12txt += detail[i].equipTxt + "<br/>";
								}else{
									item3_12txt += "<br/>";
								}
							}
							item1_22txt += item3_12txt;
							item1_22txt += "</p>";
						}
						
						item1_22txt += "</div>";
						
						
						if(items.item13 == "Y" || items.item14 == "Y" || items.item15 == "Y"){
							item1_22txt += "<div class='img-box'>";
							let item13_15txt = "";
							if(items.item13 == "Y"){;
								item13_15txt += "<span class='img'><img src='" + detail[i].ownerCloth + "' alt='" + chulNo + detail[i].hrNm + "기수복'></span>";
							}
							if(items.item14 == "Y" || items.item15 == "Y"){
								item13_15txt += "<div class='rbox'>";
								
								if(items.item14 == "Y"){
									item13_15txt += "<div><p class='txt-round'>" + detail[i].wgBudam + "</p></div>";
								}
								if(items.item15 == "Y"){
									item13_15txt += "<div><p class='txt-round'>" + detail[i].jkName + "<span class='btn-box'><button type='button' class='btn-dtaillayer' ";
									item13_15txt += " onclick='raceDetailInfo.fnInfoJk(\"" + detail[i].meet + "\",\"" + detail[i].rcDate + "\",\"" + detail[i].jkNo + "\")' id='infoJkBtn_" + detail[i].meet + "_" + detail[i].rcDate + "_" + detail[i].jkNo+ "'";
									item13_15txt += "><em class='blind'>기수 성적현황 상세보기</em></button></span></p></div>";
								}
								item13_15txt += "</div>";
							}
							item1_22txt += item13_15txt;
							item1_22txt += "</div>";
						}
						
						item1_22txt += "</div>";
						
						if(items.item16 == "Y" || items.item17 == "Y"){
							item1_22txt += "<p class='txt-infor01'>"
							
							let item16_17txt = "";
							
							if(items.item16 == "Y" || items.item17 == "Y"){
								if(items.item16 == "Y"){
									item16_17txt += detail[i].jkRecord1 + " ";
								}
								if(items.item17 == "Y"){
									item16_17txt += detail[i].jkRecord2 + " ";
								}
								item16_17txt += "<br/>";
							}
							
							item1_22txt += item16_17txt;
							item1_22txt += "</p>";
						}
							
						if(items.item18 == "Y"){
							if(detail[i].meet == "2"){
							item1_22txt += "<p class='txt-round' style='margin-top: 0.3rem;'>" + detail[i].trarNm1 + "<span class='btn-box'>";
							item1_22txt += "<button type='button' class='btn-dtaillayer'";
							item1_22txt += " onclick='raceDetailInfo.fnInfoTr(\"" + detail[i].meet + "\",\"" + detail[i].rcDate + "\",\"" + detail[i].trNo + "\")' id='infoTrBtn_" + detail[i].meet + "_" + detail[i].rcDate + "_" + detail[i].trNo + "'";
							item1_22txt += "><em class='blind'>조교사 성적현황 상세보기</em></button></span>";
							item1_22txt += "</p>";
							}else{
							item1_22txt += "<p class='txt-round' style='margin-top: 0.3rem;'>" + detail[i].trarNm1 + "<span class='btn-box'>";
							item1_22txt += "<button type='button' class='btn-dtaillayer'";
							item1_22txt += " onclick='raceDetailInfo.fnInfoTr(\"" + detail[i].meet + "\",\"" + detail[i].rcDate + "\",\"" + detail[i].trNo + "\")' id='infoTrBtn_" + detail[i].meet + "_" + detail[i].rcDate + "_" + detail[i].trNo + "'";
							item1_22txt += "><em class='blind'>조교사 성적현황 상세보기</em></button></span>";
							item1_22txt += "</p>";
							item1_22txt += "<p class='txt-round'>" + detail[i].trarNm2 + "</p>";
							}
						}
						
						if(items.item19 == "Y" || items.item20 == "Y" || items.item21 == "Y" || items.item22 == "Y"){
						
							item1_22txt += "<p class='txt-infor01'>";
							
							let item19_22txt = "";
							
							if(items.item19 == "Y"){
								item19_22txt += detail[i].trngTxt + "<br/>";
							}
							if(items.item20 == "Y" && detail[i].swimTxt != undefined){
								item19_22txt += detail[i].swimTxt + "<br/>";
							}
							if(items.item21 == "Y" && detail[i].trng2Txt != undefined){
								item19_22txt += detail[i].trng2Txt + "<br/>";
							}
							if(items.item22 == "Y"){
								if(detail[i].latstTrea1Txt != undefined){
									item19_22txt += detail[i].latstTrea1Txt + "<br/>";
								}
								if(detail[i].latstTrea2Txt != undefined){
									item19_22txt += detail[i].latstTrea2Txt + "<br/>";
								}
								if(detail[i].latstTrea3Txt != undefined){
									item19_22txt += detail[i].latstTrea3Txt + "<br/>";
								}
							}
							item1_22txt += item19_22txt;
							item1_22txt += "</p>"
						}
						
						var weightList = raceDetailInfo.param.weightList;
				
						for(let i=0;i<weightList.length;i++){
							if(raceDetailInfo.param.meet == weightList[i].meet
								&& raceDetailInfo.param.rcDate == weightList[i].rcDate
								&& raceDetailInfo.param.rcNo == weightList[i].rcNo
								&& chulNo == weightList[i].chulNo){
								if(items.item23 == "Y" && weightList[i].wgHr != '0'){
									item1_22txt += "<p class='txt-round hWgt'>" + weightList[i].wgHr + "(" + weightList[i].wgHrDiff + ")";
									if(raceDetailInfo.param.today == weightList[i].rcDate){
										item1_22txt += "<span class='btn-box'><button type='button' class='btn-dtaillayer'";
										item1_22txt += " onclick='fnPageMove(\"/racing/weight/selectWeightList.do\", \"A04\",this)'";
										item1_22txt += " data-p='meet:" + weightList[i].meet + ",rcDate:" + weightList[i].rcDate + ",rcNo:" + weightList[i].rcNo + "'";
										item1_22txt += "><em class='blind'>상세 내용 보기</em></button></span>";
									}
									item1_22txt += "</p>";
								}
								break;
							}
						}
						
						
						
						if(item1_22txt != ""){
							$("#vItem1_22_" + chulNo).html(item1_22txt);
						}
						break;
					}
				}
				
				//set hr last4 data
				var last4 = raceDetailInfo.param.raceinfo.last4;
				
				for(let i=0;i<last4.length;i++){
					if(raceDetailInfo.param.meet == last4[i].meet
						&& raceDetailInfo.param.rcDate == last4[i].rcDate
						&& raceDetailInfo.param.rcNo == last4[i].rcNo
						&& chulNo == last4[i].chulNo){
						
						
						let itemA_Ltxt = "";
						if(items.itemL == "Y"){
							itemA_Ltxt += "<div class='graph-wrap'>";
							itemA_Ltxt += "<div class='graph-box' style='padding-bottom:0;padding-right:1.2rem;'>";
							//itemA_Ltxt += "<div class='graph-box'>";
							itemA_Ltxt += "<button type='button' class='btn-dtaillayer'";
							itemA_Ltxt += " onclick='raceDetailInfo.fnInfoLast4(\"" + last4[i].meet + "\",\"" + last4[i].rcDate + "\",\"" + last4[i].rcNo + "\",\"" + last4[i].chulNo +  "\")' id='infoLast4Btn_" + last4[i].meet + "_" + last4[i].rcDate + "_" + last4[i].rcNo + "_" + last4[i].chulNo + "'";
							//itemA_Ltxt += "><em class='blind'>상세 내용 보기</em></button>";
							itemA_Ltxt += " style='bottom: auto;'><em class='blind'>출전마 최근 4회 상세전적 상세보기</em></button>";
							itemA_Ltxt += "<canvas id='chart_" + chulNo + "' role='img' aria-label='출전마 최근4회전적' ></canvas>";
							itemA_Ltxt += "</div>";
							itemA_Ltxt += "</div>";
						}
						
						var arrY = new Array();
						var arrYLabel = new Array();
						var arrX = new Array();
						
						if(last4[i].firLatstEtrcTxt != "" && last4[i].firLatstEtrcTxt != undefined){
						
							if(items.itemA == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'><strong>" + last4[i].firLatstEtrcTxt + "</strong></p>";
							}
							if(items.itemB == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'>"
								if(last4[i].firLatstEtrcFphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].firLatstEtrcFplcHrnm + " " + last4[i].firLatstEtrcFplcRcdVl + " " + last4[i].firLatstEtrcFplcJckyTxt + "</span><br/>";//1위
								}else if(last4[i].firLatstEtrcFphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].firLatstEtrcFplcHrnm + " " + last4[i].firLatstEtrcFplcRcdVl + " " + last4[i].firLatstEtrcFplcJckyTxt + "</span><br/>";//1위
								}else{
									itemA_Ltxt += last4[i].firLatstEtrcFplcHrnm + " " + last4[i].firLatstEtrcFplcRcdVl + " " + last4[i].firLatstEtrcFplcJckyTxt + "<br/>";//1위
								}
								if(last4[i].firLatstEtrcSphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].firLatstEtrcSplcHrnm + " " + last4[i].firLatstEtrcSplcRcdVl + " " + last4[i].firLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else if(last4[i].firLatstEtrcSphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].firLatstEtrcSplcHrnm + " " + last4[i].firLatstEtrcSplcRcdVl + " " + last4[i].firLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else{
									itemA_Ltxt += last4[i].firLatstEtrcSplcHrnm + " " + last4[i].firLatstEtrcSplcRcdVl + " " + last4[i].firLatstEtrcSplcJckyTxt + "<br/>";//2위
								}
								if(last4[i].firLatstEtrcTphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].firLatstEtrcTplcHrnm + " " + last4[i].firLatstEtrcTplcRcdVl + " " + last4[i].firLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else if(last4[i].firLatstEtrcTphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].firLatstEtrcTplcHrnm + " " + last4[i].firLatstEtrcTplcRcdVl + " " + last4[i].firLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else{
									itemA_Ltxt += last4[i].firLatstEtrcTplcHrnm + " " + last4[i].firLatstEtrcTplcRcdVl + " " + last4[i].firLatstEtrcTplcJckyTxt + "<br/>";//3위
								}
								if(last4[i].firLatstEtrcFophrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].firLatstEtrcFoplcHrnm + " " + last4[i].firLatstEtrcFoplcRcdVl + " " + last4[i].firLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else if(last4[i].firLatstEtrcFophrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].firLatstEtrcFoplcHrnm + " " + last4[i].firLatstEtrcFoplcRcdVl + " " + last4[i].firLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else{
									itemA_Ltxt += last4[i].firLatstEtrcFoplcHrnm + " " + last4[i].firLatstEtrcFoplcRcdVl + " " + last4[i].firLatstEtrcFoplcJckyTxt + "<br/>";//4위
								}
								if(last4[i].firLatstEtrcFvphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].firLatstEtrcFvplcHrnm + " " + last4[i].firLatstEtrcFvplcRcdVl + " " + last4[i].firLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else if(last4[i].firLatstEtrcFvphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].firLatstEtrcFvplcHrnm + " " + last4[i].firLatstEtrcFvplcRcdVl + " " + last4[i].firLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else{
									if(last4[i].firLatstEtrcFvplcHrnm != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcFvplcHrnm + " " + last4[i].firLatstEtrcFvplcRcdVl + " " + last4[i].firLatstEtrcFvplcJckyTxt + "<br/>";//5위
									}
								}
								if(last4[i].firLatstEtrcSiphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].firLatstEtrcSiplcHrnm + " " + last4[i].firLatstEtrcSiplcRcdVl + " " + last4[i].firLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else if(last4[i].firLatstEtrcSiphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].firLatstEtrcSiplcHrnm + " " + last4[i].firLatstEtrcSiplcRcdVl + " " + last4[i].firLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else{
									if(last4[i].firLatstEtrcSiplcHrnm != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcSiplcHrnm + " " + last4[i].firLatstEtrcSiplcRcdVl + " " + last4[i].firLatstEtrcSiplcJckyTxt + "";//6위 혹은 마지막
									}
								}
								itemA_Ltxt += "</p>";
							}
							if(items.itemC == "Y" || items.itemD == "Y" || items.itemE == "Y"
								|| items.itemF == "Y" || items.itemG == "Y" || items.itemH == "Y"
								|| items.itemI == "Y" || items.itemJ == "Y" || items.itemK == "Y"){
								itemA_Ltxt += "<p class='txt-infor01 p-line'>";
								if(last4[i].meet == "2"){
									if(items.itemC == "Y" && last4[i].firLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcRaceRcd3Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].firLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].firLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcRaceRcd2Txt + " ";
									}
								}else{
									if(items.itemC == "Y" && last4[i].firLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].firLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcRaceRcd2Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].firLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcRaceRcd3Txt + " ";
									}
								}
								if(items.itemF == "Y" && last4[i].firLatstEtrcRaceRcd4Txt != undefined){
									itemA_Ltxt += last4[i].firLatstEtrcRaceRcd4Txt + " ";
								}
								if(items.itemG == "Y" && last4[i].firLatstEtrcRaceRcd5Txt != undefined){
									itemA_Ltxt += last4[i].firLatstEtrcRaceRcd5Txt + " ";
								}
								if(items.itemH == "Y" && last4[i].firLatstEtrcTrckVl != undefined){
									itemA_Ltxt += last4[i].firLatstEtrcTrckVl + " ";
								}
								if(items.itemI == "Y" && last4[i].firLatstEtrcRaceRcd6Txt1 != undefined){
									itemA_Ltxt += last4[i].firLatstEtrcRaceRcd6Txt1 + " ";
								}
								if(items.itemJ == "Y" && last4[i].firLatstEtrcRaceRcd6Txt2 != undefined){
									itemA_Ltxt += last4[i].firLatstEtrcRaceRcd6Txt2 + " ";
								}
								if(items.itemK == "Y"){
									if(last4[i].latstEtrc1EquipTxt != undefined){
										itemA_Ltxt += last4[i].latstEtrc1EquipTxt + " ";
									}
									if(last4[i].firLatstEtrcRaceRcd7Txt != undefined){
										itemA_Ltxt += last4[i].firLatstEtrcRaceRcd7Txt + " ";
									}
								}
								itemA_Ltxt += "</p>";
							}
							
							if(items.itemL == "Y"){
								arrY.push(["",last4[i].firLatstEtrcTxt1,raceDetailInfo.fnGetDusuAndDist(last4[i],"fir")]);
								arrYLabel.push({"txt":last4[i].firLatstEtrcTxt1,"dtl":last4[i].firLatstEtrcTxt});
								if(last4[i].firLatstEtrcFphrAcrdVl == "1"){
									arrX.push(last4[i].firLatstEtrcFplcHrnm);
								}
								if(last4[i].firLatstEtrcSphrAcrdVl == "1"){
									arrX.push(last4[i].firLatstEtrcSplcHrnm);
								}
								if(last4[i].firLatstEtrcTphrAcrdVl == "1"){
									arrX.push(last4[i].firLatstEtrcTplcHrnm);
								}
								if(last4[i].firLatstEtrcFophrAcrdVl == "1"){
									arrX.push(last4[i].firLatstEtrcFoplcHrnm);
								}
								if(last4[i].firLatstEtrcFvphrAcrdVl == "1"){
									arrX.push(last4[i].firLatstEtrcFvplcHrnm);
								}
								if(last4[i].firLatstEtrcSiphrAcrdVl == "1"){
									arrX.push(last4[i].firLatstEtrcSiplcHrnm);
								}
							}
							
						}
						if(last4[i].secoLatstEtrcTxt != "" && last4[i].secoLatstEtrcTxt != undefined){
						
							if(items.itemA == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'><strong>" + last4[i].secoLatstEtrcTxt + "</strong></p>";
							}
							if(items.itemB == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'>"
								if(last4[i].secoLatstEtrcFphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].secoLatstEtrcFplcHrnm + " " + last4[i].secoLatstEtrcFplcRcdVl + " " + last4[i].secoLatstEtrcFplcJckyTxt + "</span><br/>";//1위
								}else if(last4[i].secoLatstEtrcFphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].secoLatstEtrcFplcHrnm + " " + last4[i].secoLatstEtrcFplcRcdVl + " " + last4[i].secoLatstEtrcFplcJckyTxt + "</strong><br/>";//1위
								}else{
									itemA_Ltxt += last4[i].secoLatstEtrcFplcHrnm + " " + last4[i].secoLatstEtrcFplcRcdVl + " " + last4[i].secoLatstEtrcFplcJckyTxt + "<br/>";//1위
								}
								if(last4[i].secoLatstEtrcSphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].secoLatstEtrcSplcHrnm + " " + last4[i].secoLatstEtrcSplcRcdVl + " " + last4[i].secoLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else if(last4[i].secoLatstEtrcSphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].secoLatstEtrcSplcHrnm + " " + last4[i].secoLatstEtrcSplcRcdVl + " " + last4[i].secoLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else{
									itemA_Ltxt += last4[i].secoLatstEtrcSplcHrnm + " " + last4[i].secoLatstEtrcSplcRcdVl + " " + last4[i].secoLatstEtrcSplcJckyTxt + "<br/>";//2위
								}
								if(last4[i].secoLatstEtrcTphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].secoLatstEtrcTplcHrnm + " " + last4[i].secoLatstEtrcTplcRcdVl + " " + last4[i].secoLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else if(last4[i].secoLatstEtrcTphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].secoLatstEtrcTplcHrnm + " " + last4[i].secoLatstEtrcTplcRcdVl + " " + last4[i].secoLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else{
									itemA_Ltxt += last4[i].secoLatstEtrcTplcHrnm + " " + last4[i].secoLatstEtrcTplcRcdVl + " " + last4[i].secoLatstEtrcTplcJckyTxt + "<br/>";//3위
								}
								if(last4[i].secoLatstEtrcFophrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].secoLatstEtrcFoplcHrnm + " " + last4[i].secoLatstEtrcFoplcRcdVl + " " + last4[i].secoLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else if(last4[i].secoLatstEtrcFophrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].secoLatstEtrcFoplcHrnm + " " + last4[i].secoLatstEtrcFoplcRcdVl + " " + last4[i].secoLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else{
									itemA_Ltxt += last4[i].secoLatstEtrcFoplcHrnm + " " + last4[i].secoLatstEtrcFoplcRcdVl + " " + last4[i].secoLatstEtrcFoplcJckyTxt + "<br/>";//4위
								}
								if(last4[i].secoLatstEtrcFvphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].secoLatstEtrcFvplcHrnm + " " + last4[i].secoLatstEtrcFvplcRcdVl + " " + last4[i].secoLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else if(last4[i].secoLatstEtrcFvphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].secoLatstEtrcFvplcHrnm + " " + last4[i].secoLatstEtrcFvplcRcdVl + " " + last4[i].secoLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else{
									if(last4[i].secoLatstEtrcFvplcHrnm != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcFvplcHrnm + " " + last4[i].secoLatstEtrcFvplcRcdVl + " " + last4[i].secoLatstEtrcFvplcJckyTxt + "<br/>";//5위
									}
								}
								if(last4[i].secoLatstEtrcSiphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].secoLatstEtrcSiplcHrnm + " " + last4[i].secoLatstEtrcSiplcRcdVl + " " + last4[i].secoLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else if(last4[i].secoLatstEtrcSiphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].secoLatstEtrcSiplcHrnm + " " + last4[i].secoLatstEtrcSiplcRcdVl + " " + last4[i].secoLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else{
									if(last4[i].secoLatstEtrcSiplcHrnm != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcSiplcHrnm + " " + last4[i].secoLatstEtrcSiplcRcdVl + " " + last4[i].secoLatstEtrcSiplcJckyTxt + "";//6위 혹은 마지막
									}
								}
								itemA_Ltxt += "</p>";
							}
							if(items.itemC == "Y" || items.itemD == "Y" || items.itemE == "Y"
								|| items.itemF == "Y" || items.itemG == "Y" || items.itemH == "Y"
								|| items.itemI == "Y" || items.itemJ == "Y" || items.itemK == "Y"){
								itemA_Ltxt += "<p class='txt-infor01 p-line'>";
								if(last4[i].meet == "2"){
									if(items.itemC == "Y" && last4[i].secoLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd3Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].secoLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].secoLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd2Txt + " ";
									}
								}else{
									if(items.itemC == "Y" && last4[i].secoLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].secoLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd2Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].secoLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd3Txt + " ";
									}
								}
								if(items.itemF == "Y" && last4[i].secoLatstEtrcRaceRcd4Txt != undefined){
									itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd4Txt + " ";
								}
								if(items.itemG == "Y" && last4[i].secoLatstEtrcRaceRcd5Txt != undefined){
									itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd5Txt + " ";
								}
								if(items.itemH == "Y" && last4[i].secoLatstEtrcTrckVl != undefined){
									itemA_Ltxt += last4[i].secoLatstEtrcTrckVl + " ";
								}
								if(items.itemI == "Y" && last4[i].secoLatstEtrcRaceRcd6Txt1 != undefined){
									itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd6Txt1 + " ";
								}
								if(items.itemJ == "Y" && last4[i].secoLatstEtrcRaceRcd6Txt2 != undefined){
									itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd6Txt2 + " ";
								}
								if(items.itemK == "Y"){
									if(last4[i].latstEtrc2EquipTxt != undefined){
										itemA_Ltxt += last4[i].latstEtrc2EquipTxt + " ";
									}
									if(last4[i].secoLatstEtrcRaceRcd7Txt != undefined){
										itemA_Ltxt += last4[i].secoLatstEtrcRaceRcd7Txt + " ";
									}
								}
								itemA_Ltxt += "</p>";
							}
							
							if(items.itemL == "Y"){
								arrY.push(["",last4[i].secoLatstEtrcTxt1,raceDetailInfo.fnGetDusuAndDist(last4[i],"seco")]);
								arrYLabel.push({"txt":last4[i].secoLatstEtrcTxt1,"dtl":last4[i].secoLatstEtrcTxt});
								if(last4[i].secoLatstEtrcFphrAcrdVl == "1"){
									arrX.push(last4[i].secoLatstEtrcFplcHrnm);
								}
								if(last4[i].secoLatstEtrcSphrAcrdVl == "1"){
									arrX.push(last4[i].secoLatstEtrcSplcHrnm);
								}
								if(last4[i].secoLatstEtrcTphrAcrdVl == "1"){
									arrX.push(last4[i].secoLatstEtrcTplcHrnm);
								}
								if(last4[i].secoLatstEtrcFophrAcrdVl == "1"){
									arrX.push(last4[i].secoLatstEtrcFoplcHrnm);
								}
								if(last4[i].secoLatstEtrcFvphrAcrdVl == "1"){
									arrX.push(last4[i].secoLatstEtrcFvplcHrnm);
								}
								if(last4[i].secoLatstEtrcSiphrAcrdVl == "1"){
									arrX.push(last4[i].secoLatstEtrcSiplcHrnm);
								}
							}
						}
						if(last4[i].thrdLatstEtrcTxt != "" && last4[i].thrdLatstEtrcTxt != undefined){
						
							if(items.itemA == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'><strong>" + last4[i].thrdLatstEtrcTxt + "</strong></p>";
							}
							if(items.itemB == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'>"
								if(last4[i].thrdLatstEtrcFphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].thrdLatstEtrcFplcHrnm + " " + last4[i].thrdLatstEtrcFplcRcdVl + " " + last4[i].thrdLatstEtrcFplcJckyTxt + "</span><br/>";//1위
								}else if(last4[i].thrdLatstEtrcFphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].thrdLatstEtrcFplcHrnm + " " + last4[i].thrdLatstEtrcFplcRcdVl + " " + last4[i].thrdLatstEtrcFplcJckyTxt + "</span><br/>";//1위
								}else{
									itemA_Ltxt += last4[i].thrdLatstEtrcFplcHrnm + " " + last4[i].thrdLatstEtrcFplcRcdVl + " " + last4[i].thrdLatstEtrcFplcJckyTxt + "<br/>";//1위
								}
								if(last4[i].thrdLatstEtrcSphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].thrdLatstEtrcSplcHrnm + " " + last4[i].thrdLatstEtrcSplcRcdVl + " " + last4[i].thrdLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else if(last4[i].thrdLatstEtrcSphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].thrdLatstEtrcSplcHrnm + " " + last4[i].thrdLatstEtrcSplcRcdVl + " " + last4[i].thrdLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else{
									itemA_Ltxt += last4[i].thrdLatstEtrcSplcHrnm + " " + last4[i].thrdLatstEtrcSplcRcdVl + " " + last4[i].thrdLatstEtrcSplcJckyTxt + "<br/>";//2위
								}
								if(last4[i].thrdLatstEtrcTphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].thrdLatstEtrcTplcHrnm + " " + last4[i].thrdLatstEtrcTplcRcdVl + " " + last4[i].thrdLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else if(last4[i].thrdLatstEtrcTphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].thrdLatstEtrcTplcHrnm + " " + last4[i].thrdLatstEtrcTplcRcdVl + " " + last4[i].thrdLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else{
									itemA_Ltxt += last4[i].thrdLatstEtrcTplcHrnm + " " + last4[i].thrdLatstEtrcTplcRcdVl + " " + last4[i].thrdLatstEtrcTplcJckyTxt + "<br/>";//3위
								}
								if(last4[i].thrdLatstEtrcFophrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].thrdLatstEtrcFoplcHrnm + " " + last4[i].thrdLatstEtrcFoplcRcdVl + " " + last4[i].thrdLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else if(last4[i].thrdLatstEtrcFophrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].thrdLatstEtrcFoplcHrnm + " " + last4[i].thrdLatstEtrcFoplcRcdVl + " " + last4[i].thrdLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else{
									itemA_Ltxt += last4[i].thrdLatstEtrcFoplcHrnm + " " + last4[i].thrdLatstEtrcFoplcRcdVl + " " + last4[i].thrdLatstEtrcFoplcJckyTxt + "<br/>";//4위
								}
								if(last4[i].thrdLatstEtrcFvphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].thrdLatstEtrcFvplcHrnm + " " + last4[i].thrdLatstEtrcFvplcRcdVl + " " + last4[i].thrdLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else if(last4[i].thrdLatstEtrcFvphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].thrdLatstEtrcFvplcHrnm + " " + last4[i].thrdLatstEtrcFvplcRcdVl + " " + last4[i].thrdLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else{
									if(last4[i].thrdLatstEtrcFvplcHrnm != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcFvplcHrnm + " " + last4[i].thrdLatstEtrcFvplcRcdVl + " " + last4[i].thrdLatstEtrcFvplcJckyTxt + "<br/>";//5위
									}
								}
								if(last4[i].thrdLatstEtrcSiphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].thrdLatstEtrcSiplcHrnm + " " + last4[i].thrdLatstEtrcSiplcRcdVl + " " + last4[i].thrdLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else if(last4[i].thrdLatstEtrcSiphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].thrdLatstEtrcSiplcHrnm + " " + last4[i].thrdLatstEtrcSiplcRcdVl + " " + last4[i].thrdLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else{
									if(last4[i].thrdLatstEtrcSiplcHrnm != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcSiplcHrnm + " " + last4[i].thrdLatstEtrcSiplcRcdVl + " " + last4[i].thrdLatstEtrcSiplcJckyTxt + "";//6위 혹은 마지막
									}
								}
								itemA_Ltxt += "</p>";
							}
							if(items.itemC == "Y" || items.itemD == "Y" || items.itemE == "Y"
								|| items.itemF == "Y" || items.itemG == "Y" || items.itemH == "Y"
								|| items.itemI == "Y" || items.itemJ == "Y" || items.itemK == "Y"){
								itemA_Ltxt += "<p class='txt-infor01 p-line'>";
								if(last4[i].meet == "2"){
									if(items.itemC == "Y" && last4[i].thrdLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd3Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].thrdLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].thrdLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd2Txt + " ";
									}
								}else{
									if(items.itemC == "Y" && last4[i].thrdLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].thrdLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd2Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].thrdLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd3Txt + " ";
									}
								}
								if(items.itemF == "Y" && last4[i].thrdLatstEtrcRaceRcd4Txt != undefined){
									itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd4Txt + " ";
								}
								if(items.itemG == "Y" && last4[i].thrdLatstEtrcRaceRcd5Txt != undefined){
									itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd5Txt + " ";
								}
								if(items.itemH == "Y" && last4[i].thrdLatstEtrcTrckVl != undefined){
									itemA_Ltxt += last4[i].thrdLatstEtrcTrckVl + " ";
								}
								if(items.itemI == "Y" && last4[i].thrdLatstEtrcRaceRcd6Txt1 != undefined){
									itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd6Txt1 + " ";
								}
								if(items.itemJ == "Y" && last4[i].thrdLatstEtrcRaceRcd6Txt2 != undefined){
									itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd6Txt2 + " ";
								}
								if(items.itemK == "Y"){
									if(last4[i].latstEtrc3EquipTxt != undefined){
										itemA_Ltxt += last4[i].latstEtrc3EquipTxt + " ";
									}
									if(last4[i].thrdLatstEtrcRaceRcd7Txt != undefined){
										itemA_Ltxt += last4[i].thrdLatstEtrcRaceRcd7Txt + " ";
									}
								}
								itemA_Ltxt += "</p>";
							}
							
							
							if(items.itemL == "Y"){
								arrY.push(["",last4[i].thrdLatstEtrcTxt1,raceDetailInfo.fnGetDusuAndDist(last4[i],"thrd")]);
								arrYLabel.push({"txt":last4[i].thrdLatstEtrcTxt1,"dtl":last4[i].thrdLatstEtrcTxt});
								if(last4[i].thrdLatstEtrcFphrAcrdVl == "1"){
									arrX.push(last4[i].thrdLatstEtrcFplcHrnm);
								}
								if(last4[i].thrdLatstEtrcSphrAcrdVl == "1"){
									arrX.push(last4[i].thrdLatstEtrcSplcHrnm);
								}
								if(last4[i].thrdLatstEtrcTphrAcrdVl == "1"){
									arrX.push(last4[i].thrdLatstEtrcTplcHrnm);
								}
								if(last4[i].thrdLatstEtrcFophrAcrdVl == "1"){
									arrX.push(last4[i].thrdLatstEtrcFoplcHrnm);
								}
								if(last4[i].thrdLatstEtrcFvphrAcrdVl == "1"){
									arrX.push(last4[i].thrdLatstEtrcFvplcHrnm);
								}
								if(last4[i].thrdLatstEtrcSiphrAcrdVl == "1"){
									arrX.push(last4[i].thrdLatstEtrcSiplcHrnm);
								}
							}
						}
						if(last4[i].frthLatstEtrcTxt != "" && last4[i].frthLatstEtrcTxt != undefined){
							
							if(items.itemA == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'><strong>" + last4[i].frthLatstEtrcTxt + "</strong></p>";
							}
							if(items.itemB == "Y"){
								itemA_Ltxt += "<p class='txt-infor01'>"
								if(last4[i].frthLatstEtrcFphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].frthLatstEtrcFplcHrnm + " " + last4[i].frthLatstEtrcFplcRcdVl + " " + last4[i].frthLatstEtrcFplcJckyTxt + "</span><br/>";//1위
								}else if(last4[i].frthLatstEtrcFphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].frthLatstEtrcFplcHrnm + " " + last4[i].frthLatstEtrcFplcRcdVl + " " + last4[i].frthLatstEtrcFplcJckyTxt + "</span><br/>";//1위
								}else{
									itemA_Ltxt += last4[i].frthLatstEtrcFplcHrnm + " " + last4[i].frthLatstEtrcFplcRcdVl + " " + last4[i].frthLatstEtrcFplcJckyTxt + "<br/>";//1위
								}
								if(last4[i].frthLatstEtrcSphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].frthLatstEtrcSplcHrnm + " " + last4[i].frthLatstEtrcSplcRcdVl + " " + last4[i].frthLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else if(last4[i].frthLatstEtrcSphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].frthLatstEtrcSplcHrnm + " " + last4[i].frthLatstEtrcSplcRcdVl + " " + last4[i].frthLatstEtrcSplcJckyTxt + "</span><br/>";//2위
								}else{
									itemA_Ltxt += last4[i].frthLatstEtrcSplcHrnm + " " + last4[i].frthLatstEtrcSplcRcdVl + " " + last4[i].frthLatstEtrcSplcJckyTxt + "<br/>";//2위
								}
								if(last4[i].frthLatstEtrcTphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].frthLatstEtrcTplcHrnm + " " + last4[i].frthLatstEtrcTplcRcdVl + " " + last4[i].frthLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else if(last4[i].frthLatstEtrcTphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].frthLatstEtrcTplcHrnm + " " + last4[i].frthLatstEtrcTplcRcdVl + " " + last4[i].frthLatstEtrcTplcJckyTxt + "</span><br/>";//3위
								}else{
									itemA_Ltxt += last4[i].frthLatstEtrcTplcHrnm + " " + last4[i].frthLatstEtrcTplcRcdVl + " " + last4[i].frthLatstEtrcTplcJckyTxt + "<br/>";//3위
								}
								if(last4[i].frthLatstEtrcFophrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].frthLatstEtrcFoplcHrnm + " " + last4[i].frthLatstEtrcFoplcRcdVl + " " + last4[i].frthLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else if(last4[i].frthLatstEtrcFophrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].frthLatstEtrcFoplcHrnm + " " + last4[i].frthLatstEtrcFoplcRcdVl + " " + last4[i].frthLatstEtrcFoplcJckyTxt + "</span><br/>";//4위
								}else{
									itemA_Ltxt += last4[i].frthLatstEtrcFoplcHrnm + " " + last4[i].frthLatstEtrcFoplcRcdVl + " " + last4[i].frthLatstEtrcFoplcJckyTxt + "<br/>";//4위
								}
								if(last4[i].frthLatstEtrcFvphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].frthLatstEtrcFvplcHrnm + " " + last4[i].frthLatstEtrcFvplcRcdVl + " " + last4[i].frthLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else if(last4[i].frthLatstEtrcFvphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].frthLatstEtrcFvplcHrnm + " " + last4[i].frthLatstEtrcFvplcRcdVl + " " + last4[i].frthLatstEtrcFvplcJckyTxt + "</span><br/>";//5위
								}else{
									if(last4[i].frthLatstEtrcFvplcHrnm != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcFvplcHrnm + " " + last4[i].frthLatstEtrcFvplcRcdVl + " " + last4[i].frthLatstEtrcFvplcJckyTxt + "<br/>";//5위
									}
								}
								if(last4[i].frthLatstEtrcSiphrAcrdVl == "1"){
									itemA_Ltxt += "<span class='t-bold t-blue'>" + last4[i].frthLatstEtrcSiplcHrnm + " " + last4[i].frthLatstEtrcSiplcRcdVl + " " + last4[i].frthLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else if(last4[i].frthLatstEtrcSiphrAcrdVl == "2"){
									itemA_Ltxt += "<span class='t-bold'>" + last4[i].frthLatstEtrcSiplcHrnm + " " + last4[i].frthLatstEtrcSiplcRcdVl + " " + last4[i].frthLatstEtrcSiplcJckyTxt + "</span><br/>";//6위 혹은 마지막
								}else{
									if(last4[i].frthLatstEtrcSiplcHrnm != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcSiplcHrnm + " " + last4[i].frthLatstEtrcSiplcRcdVl + " " + last4[i].frthLatstEtrcSiplcJckyTxt + "";//6위 혹은 마지막
									}
								}
								itemA_Ltxt += "</p>";
							}
							if(items.itemC == "Y" || items.itemD == "Y" || items.itemE == "Y"
								|| items.itemF == "Y" || items.itemG == "Y" || items.itemH == "Y"
								|| items.itemI == "Y" || items.itemJ == "Y" || items.itemK == "Y"){
								itemA_Ltxt += "<p class='txt-infor01 p-line'>";
								if(last4[i].meet == "2"){
									if(items.itemC == "Y" && last4[i].frthLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd3Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].frthLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].frthLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd2Txt + " ";
									}
								}else{
									if(items.itemC == "Y" && last4[i].frthLatstEtrcRaceRcd1Txt != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd1Txt + " ";
									}
									if(items.itemD == "Y" && last4[i].frthLatstEtrcRaceRcd2Txt != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd2Txt + " ";
									}
									if(items.itemE == "Y" && last4[i].frthLatstEtrcRaceRcd3Txt != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd3Txt + " ";
									}
								}
								if(items.itemF == "Y" && last4[i].frthLatstEtrcRaceRcd4Txt != undefined){
									itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd4Txt + " ";
								}
								if(items.itemG == "Y" && last4[i].frthLatstEtrcRaceRcd5Txt != undefined){
									itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd5Txt + " ";
								}
								if(items.itemH == "Y" && last4[i].frthLatstEtrcTrckVl != undefined){
									itemA_Ltxt += last4[i].frthLatstEtrcTrckVl + " ";
								}
								if(items.itemI == "Y" && last4[i].frthLatstEtrcRaceRcd6Txt1 != undefined){
									itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd6Txt1 + " ";
								}
								if(items.itemJ == "Y" && last4[i].frthLatstEtrcRaceRcd6Txt2 != undefined){
									itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd6Txt2 + " ";
								}
								if(items.itemK == "Y"){
									if(last4[i].latstEtrc4EquipTxt != undefined){
										itemA_Ltxt += last4[i].latstEtrc4EquipTxt + " ";
									}
									if(last4[i].frthLatstEtrcRaceRcd7Txt != undefined){
										itemA_Ltxt += last4[i].frthLatstEtrcRaceRcd7Txt + " ";
									}
								}
								itemA_Ltxt += "</p>";
							}
							
							if(items.itemL == "Y"){
								arrY.push(["",last4[i].frthLatstEtrcTxt1,raceDetailInfo.fnGetDusuAndDist(last4[i],"frth")]);
								arrYLabel.push({"txt":last4[i].frthLatstEtrcTxt1,"dtl":last4[i].frthLatstEtrcTxt});
								if(last4[i].frthLatstEtrcFphrAcrdVl == "1"){
									arrX.push(last4[i].frthLatstEtrcFplcHrnm);
								}
								if(last4[i].frthLatstEtrcSphrAcrdVl == "1"){
									arrX.push(last4[i].frthLatstEtrcSplcHrnm);
								}
								if(last4[i].frthLatstEtrcTphrAcrdVl == "1"){
									arrX.push(last4[i].frthLatstEtrcTplcHrnm);
								}
								if(last4[i].frthLatstEtrcFophrAcrdVl == "1"){
									arrX.push(last4[i].frthLatstEtrcFoplcHrnm);
								}
								if(last4[i].frthLatstEtrcFvphrAcrdVl == "1"){
									arrX.push(last4[i].frthLatstEtrcFvplcHrnm);
								}
								if(last4[i].frthLatstEtrcSiphrAcrdVl == "1"){
									arrX.push(last4[i].frthLatstEtrcSiplcHrnm);
								}
							}
						}
						
						$("#vItemA_L_" + chulNo).html(itemA_Ltxt);
						
						if(items.itemL == "Y"){
							
							var cArrX = raceDetailInfo.fnChulNoToNumber(arrX);
							raceDetailInfo.fnSetChart("chart_" + chulNo, arrY, cArrX, last4[i].meet, arrYLabel);
						}
						break;
					}
				}
			}
		});
	}
	, fnGetDusuAndDist : function(last4,gbn){
		let dusu = "";
		let dist = "1234";
		var arrTxt;
		if("fir" == gbn){
			arrTxt = last4.firLatstEtrcTxt.split(" ");
			dusu = last4.meet == "2"?last4.firLatstEtrcRaceRcd3Txt.match(/\(*\/.*\)/gi)[0].replace(/[^0-9]/g,''):last4.firLatstEtrcRaceRcd1Txt.match(/\(.*\)/gi)[0].replace(/[^0-9]/g,'');
		}else if("seco" == gbn){
			arrTxt = last4.secoLatstEtrcTxt.split(" ");
			dusu = last4.meet == "2"?last4.secoLatstEtrcRaceRcd3Txt.match(/\(*\/.*\)/gi)[0].replace(/[^0-9]/g,''):last4.secoLatstEtrcRaceRcd1Txt.match(/\(.*\)/gi)[0].replace(/[^0-9]/g,'');
		}else if("thrd" == gbn){
			arrTxt = last4.thrdLatstEtrcTxt.split(" ");
			dusu = last4.meet == "2"?last4.thrdLatstEtrcRaceRcd3Txt.match(/\(*\/.*\)/gi)[0].replace(/[^0-9]/g,''):last4.thrdLatstEtrcRaceRcd1Txt.match(/\(.*\)/gi)[0].replace(/[^0-9]/g,'');
		}else if("frth" == gbn){
			arrTxt = last4.frthLatstEtrcTxt.split(" ");
			dusu = last4.meet == "2"?last4.frthLatstEtrcRaceRcd3Txt.match(/\(*\/.*\)/gi)[0].replace(/[^0-9]/g,''):last4.frthLatstEtrcRaceRcd1Txt.match(/\(.*\)/gi)[0].replace(/[^0-9]/g,'');
		}
		
		for(let i=1;i<arrTxt.length;i++){
			var regex = /^[0-9]+$/;
			if(regex.test(arrTxt[i])){
				dist = arrTxt[i];
				break;
			}
		}
		
		return dist + "M " + dusu + "두";
	}
	, fnChulNoToNumber : function(arrX){// 번호변경
		var chulArr = {'①':1, '②':2, '③':3, '④':4, '⑤':5, '⑥':6, '⑦':7, '⑧':8, '⑨':9};
		var cArrX = new Array();
		for(let i=0;i<arrX.length;i++){
			let chulNo = 10;
			var keys = Object.keys(chulArr);
			for(let j=0;j<keys.length;j++){
				if(arrX[i].indexOf(keys[j])>-1){
					chulNo = chulArr[keys[j]];
					break;
				}
			}
			cArrX.push(chulNo);
		}
		return cArrX;
	}
	, fnSetChart : function(itemGrpCd, arrY, arrX, meet, arrYLabel){//차트 생성
	
		let bordercolor = "rgb(243,97,54)";
		if(meet == "1"){
			bordercolor = "rgb(6,119,254)";
		}if(meet == "2"){
			//bordercolor = "";
		}if(meet == "3"){
			bordercolor = "rgb(6,142,3)";
		}
		var cItemGrp = document.getElementById(itemGrpCd).getContext('2d');
		window.myLine = new Chart(cItemGrp, {
			type : 'line'
			, data : {
				labels : arrY
				, datasets : [
					{	
						data : arrX
						, borderColor : bordercolor
						, lineTension : 0
						, fill : false
					}
				]
			}
			, options : {
				legend : {
					display : false
				}
				, layout : {
					padding : {
						top : 20
						, left : 0
						, right : 15
						, bottom : 25
					}
				}
				, animation : {
					duration : 1,
					onComplete : function(){
						var inst = this.chart,
						ctx = inst.ctx;
						ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize,Chart.defaults.global.defaultFontStyle,Chart.defaults.global.defaultFontFamily);
						ctx.fillStyle = 'black';
						ctx.textAlign = 'center';
						ctx.textBaseline = 'bottom';
						
						this.data.datasets.forEach(function(dataset,i){
							var meta = inst.controller.getDatasetMeta(i);
							meta.data.forEach(function(bar,index){
								data = dataset.data[index];
								ctx.fillText((data > 9 ? '10위 이하' : (data + "위")),bar._model.x,bar._model.y-5)
							});
						});
					}
				}
				, scales : {
					yAxes : [{
						ticks:{min : 1,
							max : 10,
							reverse : true
							}
					}]
				}
				, tooltips : {
					callbacks : {
						label : function(tooltipItem){
							
							return (tooltipItem.yLabel>9?"10위 이하":(tooltipItem.yLabel+"위"));
						}
						, title : function(tooltipItem){
							let txt = new Array();
							let setTxt = new Array();
							for(let i=0;i<arrYLabel.length;i++){
								if(tooltipItem[0].xLabel[1] == arrYLabel[i].txt){
									txt = arrYLabel[i].dtl.split(" ");
									if(meet == "2"){
										setTxt.push(txt[0].substr(0,4) + "-" + txt[0].substr(4,2) + "-" + txt[0].substr(6,2) + " " + txt[1]);
									}else{
										setTxt.push(txt[0].substr(0,4) + "-" + txt[0].substr(4,2) + "-" + txt[0].substr(6,2) + " " + txt[2]);
									}
									break;
								}
							}
							return setTxt;
						}
					}
				}
			}
		});
	}
	, fnInfoBasic : function(popBtn){//경주 정보
		let param = "&popNm=infoBasic";
		param += "&popBtn=" + popBtn;
		param += "&meet=" + raceDetailInfo.param.meet;
		param += "&rcDate=" + raceDetailInfo.param.rcDate;
		param += "&rcNo=" + raceDetailInfo.param.rcNo;
		getHtmlData("post","/racing/detail/selectInfoBasicHtmlJs.do",param);
		setTimeout( function() {
			$("#infoBasic").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoBasic").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoBasic").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoBasic").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoBasic").find('.laypop-foot').innerHeight();
			}
			if($("#infoBasic").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoBasic").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
		var basic = raceDetailInfo.param.raceinfo.basic;
		for(let i=0;i<basic.length;i++){
			if(raceDetailInfo.param.meet == basic[i].meet
				&& raceDetailInfo.param.rcDate == basic[i].rcDate
				&& raceDetailInfo.param.rcNo == basic[i].rcNo){
				
				let txt = "";
				txt += "<span>" + basic[i].rank + "</span>";
				if(basic[i].newHrCond != "" && basic[i].newHrCond != undefined){
					txt += "<span>" + basic[i].newHrCond + " ";
				}
				txt += "<span>" + basic[i].ageCond + "</span>";
				txt += "<span>" + basic[i].sexCond + "</span>";
				txt += "<span>" + basic[i].budam + "</span>";
				txt += "<span>" + basic[i].prizeCond + "</span>";
				$("#bItemGa").html(txt);
				if(basic[i].fdtWgtVl != undefined){
					txt = "";
					txt += "<span>" + basic[i].fdtWgtVl + "</span>";
					$("#bItemNa").html(txt);
				}
				
				if("일반" != basic[i].rcName && basic[i].rcName != undefined){
					txt = "";
					txt += basic[i].rcName;
					$("#bItemDa").html(txt);
				}
				
				txt = "";
				txt += "<div class='tbl-inbox'>";
				txt += "<table>";
				txt += "<caption>구분, 우승마 평균기록, 최고기록[부담중량, 함수율]으로 구성된 표</caption>";
				txt += "<colgroup>";
				txt += "<col style='width:32%'>";
				txt += "<col style='width:24%'>";
				txt += "<col>";
				txt += "</colgroup>";
				txt += "<thead>";
				txt += "<tr>";
				txt += "<th scope='col'>구분</th>";
				txt += "<th scope='col'>우승마<br>평균기록</th>";
				txt += "<th scope='col'>최고기록<br>[부담중량, 함수율]</th>";
				txt += "</tr>";
				txt += "</thead>";
				txt += "<tbody>";
				txt += "<tr>";
				if(basic[i].revntClasChmpRcdVl != undefined && basic[i].revntClasHgstRcdVl != undefined){
					txt += "<th scope='row'>해당등급</th>";
					txt += "<td>" + basic[i].revntClasChmpRcdVl + "</td>";
					txt += "<td class='align-l'>" + basic[i].revntClasHgstRcdVl + "</td>";
					txt += "</tr>";
				}
				if(basic[i].rccrsChmpRcdVl != undefined && basic[i].rccrsHgstRcdVl != undefined){
					txt += "<tr>";
					txt += "<th scope='row'>서울(국+외)</th>";
					txt += "<td>" + basic[i].rccrsChmpRcdVl + "</td>";
					txt += "<td class='align-l'>" + basic[i].rccrsHgstRcdVl + "</td>";
					txt += "</tr>";
				}
				if(basic[i].lclHrsChmpRcdVl != undefined && basic[i].lclHrsHgstRcdVl != undefined){
					txt += "<tr>";
					txt += "<th scope='row'>서울(국)</th>";
					txt += "<td>" + basic[i].lclHrsChmpRcdVl + "</td>";
					txt += "<td class='align-l'>" + basic[i].lclHrsHgstRcdVl + "</td>";
					txt += "</tr>";
				}
				txt += "</tbody>";
				txt += "</table>";
				txt += "</div>";
				$("#bItemRaMaBa").html(txt);
				
				txt = "";
				txt += "<div class='tit-box'>";
				txt += "<h4>순위상금</h4>";
				txt += "<p class='txt-reward'><strong>" + basic[i].chaksun + "</strong>천원</p>";
				txt += "</div>";
				txt += "<ol class='ranking-list'>";
				txt += "<li>";
				txt += "<span class='txt01'><strong>1</strong>위</span>";
				txt += "<span class='txt02'><strong>" + basic[i].chaksun1 + "</strong>천원</span>";
				txt += "</li>";
				txt += "<li>";
				txt += "<span class='txt01'><strong>2</strong>위</span>";
				txt += "<span class='txt02'><strong>" + basic[i].chaksun2 + "</strong>천원</span>";
				txt += "</li>";
				txt += "<li>";
				txt += "<span class='txt01'><strong>3</strong>위</span>";
				txt += "<span class='txt02'><strong>" + basic[i].chaksun3 + "</strong>천원</span>";
				txt += "</li>";
				txt += "<li>";
				txt += "<span class='txt01'><strong>4</strong>위</span>";
				txt += "<span class='txt02'><strong>" + basic[i].chaksun4 + "</strong>천원</span>";
				txt += "</li>";
				txt += "<li>";
				txt += "<span class='txt01'><strong>5</strong>위</span>";
				txt += "<span class='txt02'><strong>" + basic[i].chaksun5 + "</strong>천원</span>";
				txt += "</li>";
				txt += "</ol>";
				$("#bItemSa").html(txt);
				
				break;
			}
		}
	}
	, fnInfoDetail : function(chulNo){//출전마 상세정보
		let param = "&popNm=infoDetail";
		param += "&popBtn=infoDetailBtn" + chulNo;
		getHtmlData("post","/racing/detail/selectInfoDetailHtmlJs.do",param);
		setTimeout( function() {
			$("#infoDetail").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoDetail").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoDetail").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoDetail").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoDetail").find('.laypop-foot').innerHeight();
			}
			if($("#infoDetail").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoDetail").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
		
		var detail = raceDetailInfo.param.raceinfo.detail;
		if(chulNo != "" && chulNo != undefined){
			for(let i=0;i<detail.length;i++){
				if(raceDetailInfo.param.meet == detail[i].meet
					&& raceDetailInfo.param.rcDate == detail[i].rcDate
					&& raceDetailInfo.param.rcNo == detail[i].rcNo
					&& chulNo == detail[i].chulNo){
					$("#dChulNo").html(detail[i].chulNo);
					$("#dHrNm").html(detail[i].hrNm);
					$("#dHrsAttrTxt").html(detail[i].hrsAttrTxt);
					$("#dHrsPrsTxt").html(detail[i].hrsPrsTxt);
					$("#dTrarOwnerNm").html(detail[i].trarOwnerNm);
					$("#dSumpRcodTxt").html(detail[i].sumpRcodTxt);
					$("#dLatstTnlmGradeTxt").html(detail[i].latstTnlmGradeTxt);
					$("#dTrckRcodTxt").html(detail[i].trckRcodTxt);
					$("#dCorpdHgstRcdVl").html(detail[i].corpdHgstRcdVl);
					$("#dCorpdAvgRcdVl").html(detail[i].corpdAvgRcdVl);
					$("#dEquipTxt").html(detail[i].equipTxt);
					$("#dOwnerCloth").html("<img src='" + detail[i].ownerCloth + "' alt='" + chulNo + detail[i].hrNm + "기수복'>");
					$("#dWgBudam").html(detail[i].wgBudam);
					$("#dJkName").html(detail[i].jkName);
					$("#dJkRecord").html(detail[i].jkRecord);
					$("#dTrarNm").html(detail[i].trarNm);
					$("#dTrngTxt").html(detail[i].trngTxt);
					$("#dSwimTxt").html(detail[i].swimTxt);
					$("#dTrng2Txt").html(detail[i].trng2Txt);
					
					let latstTreaTxt = "";
					if(detail[i].latstTrea1Txt != undefined){
						latstTreaTxt += detail[i].latstTrea1Txt + "<br/>";
					}
					if(detail[i].latstTrea2Txt != undefined){
						latstTreaTxt += detail[i].latstTrea2Txt + "<br/>";
					}
					if(detail[i].latstTrea3Txt != undefined){
						latstTreaTxt += detail[i].latstTrea3Txt + "<br/>";
					}
					$("#dLatstTreaTxt").html(latstTreaTxt);
					
					break;
				}
			}
			
			
			var weightList = raceDetailInfo.param.weightList;
			for(let i=0;i<weightList.length;i++){
				if(raceDetailInfo.param.meet == weightList[i].meet
					&& raceDetailInfo.param.rcDate == weightList[i].rcDate
					&& raceDetailInfo.param.rcNo == weightList[i].rcNo
					&& chulNo == weightList[i].chulNo){
					if(weightList[i].wgHr != '0'){
						$("#dWeight").html(weightList[i].wgHr + "(" + weightList[i].wgHrDiff + ")");
					}
					
					break;
				}
			}
		}
	}
	, fnInfoJk : function(meet,rcDate,jkNo){//기수전적 및 기승현황
		let param = "&popNm=infoJk";
		param += "&popBtn=infoJkBtn_" + meet + "_" + rcDate + "_" + jkNo;
		param += "&meet=" + meet;
		param += "&rcDate=" + rcDate;
		param += "&jkNo=" + jkNo;
		getHtmlData("post","/racing/detail/selectInfoRaceJkHtmlJs.do",param);
		setTimeout( function() {
			$("#infoJk").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoJk").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoJk").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoJk").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoJk").find('.laypop-foot').innerHeight();
			}
			if($("#infoJk").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoJk").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
		var jkRate = raceDetailInfo.param.raceinfo.jkRate;
		for(let i=0;i<jkRate.length;i++){
			if(jkRate[i].jkNo == jkNo){
				$(".lyperson-box.jkratebody h4").html(jkRate[i].jkName);
				$(".lyperson-box.jkratebody .dl-person dd").html(jkRate[i].stYyyy + "년");
				$(".lyperson-box.jkratebody .list-rdgray .totalrate").html("<em>" + jkRate[i].totRecord1 + "</em> " + jkRate[i].totRecord2 + " " + jkRate[i].totRate);
				$(".lyperson-box.jkratebody .list-rdgray .lastrate").html("<em>" + jkRate[i].yearRecord1 + "</em> " + jkRate[i].yearRecord2 + " " + jkRate[i].yearRate);
				break;
			}
		}
		
		var jk = raceDetailInfo.param.raceinfo.jk;
		for(let i=0;i<jk.length;i++){
			if(jk[i].rcMeet == meet && jk[i].rcDate == rcDate && jk[i].jkNo == jkNo){
				$(".lyperson-box.jkbody .dl-person dd").html(jk[i].dusu + "회");
				let txt = "";
				if(jk[i].rcno1Info != undefined && jk[i].rcno1Hr != undefined && jk[i].rcno1Tr != undefined){
					txt += "<li>";
					txt += "<strong>1경주</strong><span>" + jk[i].rcno1Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno1Hr + " - " + jk[i].rcno1Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno2Info != undefined && jk[i].rcno2Hr != undefined && jk[i].rcno2Tr != undefined){
					txt += "<li>";
					txt += "<strong>2경주</strong><span>" + jk[i].rcno2Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno2Hr + " - " + jk[i].rcno2Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno3Info != undefined && jk[i].rcno3Hr != undefined && jk[i].rcno3Tr != undefined){
					txt += "<li>";
					txt += "<strong>3경주</strong><span>" + jk[i].rcno3Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno3Hr + " - " + jk[i].rcno3Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno4Info != undefined && jk[i].rcno4Hr != undefined && jk[i].rcno4Tr != undefined){
					txt += "<li>";
					txt += "<strong>4경주</strong><span>" + jk[i].rcno4Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno4Hr + " - " + jk[i].rcno4Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno5Info != undefined && jk[i].rcno5Hr != undefined && jk[i].rcno5Tr != undefined){
					txt += "<li>";
					txt += "<strong>5경주</strong><span>" + jk[i].rcno5Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno5Hr + " - " + jk[i].rcno5Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno6Info != undefined && jk[i].rcno6Hr != undefined && jk[i].rcno6Tr != undefined){
					txt += "<li>";
					txt += "<strong>6경주</strong><span>" + jk[i].rcno6Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno6Hr + " - " + jk[i].rcno6Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno7Info != undefined && jk[i].rcno7Hr != undefined && jk[i].rcno7Tr != undefined){
					txt += "<li>";
					txt += "<strong>7경주</strong><span>" + jk[i].rcno7Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno7Hr + " - " + jk[i].rcno7Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno8Info != undefined && jk[i].rcno8Hr != undefined && jk[i].rcno8Tr != undefined){
					txt += "<li>";
					txt += "<strong>8경주</strong><span>" + jk[i].rcno8Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno8Hr + " - " + jk[i].rcno8Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno9Info != undefined && jk[i].rcno9Hr != undefined && jk[i].rcno9Tr != undefined){
					txt += "<li>";
					txt += "<strong>9경주</strong><span>" + jk[i].rcno9Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno9Hr + " - " + jk[i].rcno9Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno10Info != undefined && jk[i].rcno10Hr != undefined && jk[i].rcno10Tr != undefined){
					txt += "<li>";
					txt += "<strong>10경주</strong><span>" + jk[i].rcno10Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno10Hr + " - " + jk[i].rcno10Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno11Info != undefined && jk[i].rcno11Hr != undefined && jk[i].rcno11Tr != undefined){
					txt += "<li>";
					txt += "<strong>11경주</strong><span>" + jk[i].rcno11Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno11Hr + " - " + jk[i].rcno11Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno12Info != undefined && jk[i].rcno12Hr != undefined && jk[i].rcno12Tr != undefined){
					txt += "<li>";
					txt += "<strong>12경주</strong><span>" + jk[i].rcno12Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno12Hr + " - " + jk[i].rcno12Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno13Info != undefined && jk[i].rcno13Hr != undefined && jk[i].rcno13Tr != undefined){
					txt += "<li>";
					txt += "<strong>13경주</strong><span>" + jk[i].rcno13Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno13Hr + " - " + jk[i].rcno13Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno14Info != undefined && jk[i].rcno14Hr != undefined && jk[i].rcno14Tr != undefined){
					txt += "<li>";
					txt += "<strong>14경주</strong><span>" + jk[i].rcno14Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno14Hr + " - " + jk[i].rcno14Tr + "</em></span>";
					txt += "</li>";
				}
				if(jk[i].rcno15Info != undefined && jk[i].rcno15Hr != undefined && jk[i].rcno15Tr != undefined){
					txt += "<li>";
					txt += "<strong>15경주</strong><span>" + jk[i].rcno15Info + "</span>";
					txt += "<span class='txt-wt'><em>" + jk[i].rcno15Hr + " - " + jk[i].rcno15Tr + "</em></span>";
					txt += "</li>";
				}
				$(".lyperson-box.jkbody .list-rdgray").html(txt);
				break;
			}
		}
	}
	, fnInfoTr : function(meet,rcDate,trNo){//조교사 전적 및 출전마
		let param = "&popNm=infoTr";
		param += "&popBtn=infoTrBtn_" + meet + "_" + rcDate + "_" + trNo;
		param += "&meet=" + meet;
		param += "&rcDate=" + rcDate;
		param += "&trNo=" + trNo;
		getHtmlData("post","/racing/detail/selectInfoRaceTrHtmlJs.do",param);
		setTimeout( function() {
			$("#infoTr").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoTr").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoTr").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoTr").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoTr").find('.laypop-foot').innerHeight();
			}
			if($("#infoTr").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoTr").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
		
		var trRate = raceDetailInfo.param.raceinfo.trRate;
		for(let i=0;i<trRate.length;i++){
			if(trRate[i].meet == meet && trRate[i].trNo == trNo){
				$(".lyperson-box.trratebody h4").html(trRate[i].trName);
				$(".lyperson-box.trratebody .dl-person.part").html("<dt>조</dt><dd>" + trRate[i].part + "조</dd><dt>데뷔년도</dt><dd>" + trRate[i].stYyyy + "년</dd>");
				$(".lyperson-box.trratebody .dl-person.type02 dd").html(trRate[i].totRecord + " " + trRate[i].totRate);
				let txt = "";
				txt += "<strong>최근 월별 성적 현황</strong><span>승률/복승률/순위상금(백만원)</span>";
				txt += "<span class='txt-wt'><em>3개월전</em>" + trRate[i].mon3Record + " " + trRate[i].mon3Prize + "</span>";
				txt += "<span class='txt-wt'><em>2개월전</em>" + trRate[i].mon2Record + " " + trRate[i].mon2Prize + "</span>";
				txt += "<span class='txt-wt'><em>1개월전</em>" + trRate[i].monRecord + " " + trRate[i].monPrize + "</span>";
				$(".lyperson-box.trratebody .list-rdgray li").html(txt);
				break;
			}
		}
		
		var tr = raceDetailInfo.param.raceinfo.tr;
		for(let i=0;i<tr.length;i++){
			if(tr[i].meet == meet && tr[i].rcDate == rcDate && tr[i].trNo == trNo && tr[i].rank == "1"){
				
				$(".lyperson-box.trbody .dl-person").html("<dt>관리두수</dt><dd>" + tr[i].trDusu + "</dd><dt>출전</dt><dd>" + tr[i].dusu + "</dd>");
				
				let txt = "";
				
				if(tr[i].rcno1Info != undefined && tr[i].rcno1Hr != undefined && tr[i].rcno1Jkow != undefined){
					txt += "<li>";
					txt += "<strong>1경주</strong><span>" + tr[i].rcno1Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno1Hr + " - " + tr[i].rcno1Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno1Info != undefined && tr[j].rcno1Hr != undefined && tr[j].rcno1Jkow != undefined){
								txt += "<br/>" + tr[j].rcno1Hr + " - " + tr[j].rcno1Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno2Info != undefined && tr[i].rcno2Hr != undefined && tr[i].rcno2Jkow != undefined){
					txt += "<li>";
					txt += "<strong>2경주</strong><span>" + tr[i].rcno2Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno2Hr + " - " + tr[i].rcno2Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno2Info != undefined && tr[j].rcno2Hr != undefined && tr[j].rcno2Jkow != undefined){
								txt += "<br/>" + tr[j].rcno2Hr + " - " + tr[j].rcno2Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno3Info != undefined && tr[i].rcno3Hr != undefined && tr[i].rcno3Jkow != undefined){
					txt += "<li>";
					txt += "<strong>3경주</strong><span>" + tr[i].rcno3Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno3Hr + " - " + tr[i].rcno3Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno3Info != undefined && tr[j].rcno3Hr != undefined && tr[j].rcno3Jkow != undefined){
								txt += "<br/>" + tr[j].rcno3Hr + " - " + tr[j].rcno3Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno4Info != undefined && tr[i].rcno4Hr != undefined && tr[i].rcno4Jkow != undefined){
					txt += "<li>";
					txt += "<strong>4경주</strong><span>" + tr[i].rcno4Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno4Hr + " - " + tr[i].rcno4Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno4Info != undefined && tr[j].rcno4Hr != undefined && tr[j].rcno4Jkow != undefined){
								txt += "<br/>" + tr[j].rcno4Hr + " - " + tr[j].rcno4Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno5Info != undefined && tr[i].rcno5Hr != undefined && tr[i].rcno5Jkow != undefined){
					txt += "<li>";
					txt += "<strong>5경주</strong><span>" + tr[i].rcno5Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno5Hr + " - " + tr[i].rcno5Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno5Info != undefined && tr[j].rcno5Hr != undefined && tr[j].rcno5Jkow != undefined){
								txt += "<br/>" + tr[j].rcno5Hr + " - " + tr[j].rcno5Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno6Info != undefined && tr[i].rcno6Hr != undefined && tr[i].rcno6Jkow != undefined){
					txt += "<li>";
					txt += "<strong>6경주</strong><span>" + tr[i].rcno6Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno6Hr + " - " + tr[i].rcno6Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno6Info != undefined && tr[j].rcno6Hr != undefined && tr[j].rcno6Jkow != undefined){
								txt += "<br/>" + tr[j].rcno6Hr + " - " + tr[j].rcno6Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno7Info != undefined && tr[i].rcno7Hr != undefined && tr[i].rcno7Jkow != undefined){
					txt += "<li>";
					txt += "<strong>7경주</strong><span>" + tr[i].rcno7Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno7Hr + " - " + tr[i].rcno7Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno7Info != undefined && tr[j].rcno7Hr != undefined && tr[j].rcno7Jkow != undefined){
								txt += "<br/>" + tr[j].rcno7Hr + " - " + tr[j].rcno7Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno8Info != undefined && tr[i].rcno8Hr != undefined && tr[i].rcno8Jkow != undefined){
					txt += "<li>";
					txt += "<strong>8경주</strong><span>" + tr[i].rcno8Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno8Hr + " - " + tr[i].rcno8Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno8Info != undefined && tr[j].rcno8Hr != undefined && tr[j].rcno8Jkow != undefined){
								txt += "<br/>" + tr[j].rcno8Hr + " - " + tr[j].rcno8Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno9Info != undefined && tr[i].rcno9Hr != undefined && tr[i].rcno9Jkow != undefined){
					txt += "<li>";
					txt += "<strong>9경주</strong><span>" + tr[i].rcno9Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno9Hr + " - " + tr[i].rcno9Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno9Info != undefined && tr[j].rcno9Hr != undefined && tr[j].rcno9Jkow != undefined){
								txt += "<br/>" + tr[j].rcno9Hr + " - " + tr[j].rcno9Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno10Info != undefined && tr[i].rcno10Hr != undefined && tr[i].rcno10Jkow != undefined){
					txt += "<li>";
					txt += "<strong>10경주</strong><span>" + tr[i].rcno10Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno10Hr + " - " + tr[i].rcno10Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno10Info != undefined && tr[j].rcno10Hr != undefined && tr[j].rcno10Jkow != undefined){
								txt += "<br/>" + tr[j].rcno10Hr + " - " + tr[j].rcno10Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno11Info != undefined && tr[i].rcno11Hr != undefined && tr[i].rcno11Jkow != undefined){
					txt += "<li>";
					txt += "<strong>11경주</strong><span>" + tr[i].rcno11Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno11Hr + " - " + tr[i].rcno11Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno11Info != undefined && tr[j].rcno11Hr != undefined && tr[j].rcno11Jkow != undefined){
								txt += "<br/>" + tr[j].rcno11Hr + " - " + tr[j].rcno11Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno12Info != undefined && tr[i].rcno12Hr != undefined && tr[i].rcno12Jkow != undefined){
					txt += "<li>";
					txt += "<strong>12경주</strong><span>" + tr[i].rcno12Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno12Hr + " - " + tr[i].rcno12Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno12Info != undefined && tr[j].rcno12Hr != undefined && tr[j].rcno12Jkow != undefined){
								txt += "<br/>" + tr[j].rcno12Hr + " - " + tr[j].rcno12Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno13Info != undefined && tr[i].rcno13Hr != undefined && tr[i].rcno13Jkow != undefined){
					txt += "<li>";
					txt += "<strong>13경주</strong><span>" + tr[i].rcno13Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno13Hr + " - " + tr[i].rcno13Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno13Info != undefined && tr[j].rcno13Hr != undefined && tr[j].rcno13Jkow != undefined){
								txt += "<br/>" + tr[j].rcno13Hr + " - " + tr[j].rcno13Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno14Info != undefined && tr[i].rcno14Hr != undefined && tr[i].rcno14Jkow != undefined){
					txt += "<li>";
					txt += "<strong>14경주</strong><span>" + tr[i].rcno14Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno14Hr + " - " + tr[i].rcno14Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno14Info != undefined && tr[j].rcno14Hr != undefined && tr[j].rcno14Jkow != undefined){
								txt += "<br/>" + tr[j].rcno14Hr + " - " + tr[j].rcno14Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				if(tr[i].rcno15Info != undefined && tr[i].rcno15Hr != undefined && tr[i].rcno15Jkow != undefined){
					txt += "<li>";
					txt += "<strong>15경주</strong><span>" + tr[i].rcno1Info + "</span>";
					txt += "<span class='txt-wt'>";
					txt += "<em>" + tr[i].rcno15Hr + " - " + tr[i].rcno15Jkow;
					for(let j=0;j<tr.length;j++){
						if(tr[i].meet == tr[j].meet && tr[i].rcDate == tr[j].rcDate && tr[i].trNo == tr[j].trNo && tr[j].rank != "1"){
							if(tr[j].rcno15Info != undefined && tr[j].rcno15Hr != undefined && tr[j].rcno15Jkow != undefined){
								txt += "<br/>" + tr[j].rcno15Hr + " - " + tr[j].rcno15Jkow;
							}
						}
					}
					txt += "</em>";
					txt += "</span>";
					txt += "</li>";
				}
				$(".lyperson-box.trbody .list-rdgray").html(txt);
				break;
			}
		}
	}
	, fnInfoTools : function(chulNo){//출전마 착용장구
		let param = "&popNm=infoTools";
		param += "&popBtn=infoToolsBtn_" + chulNo;
		getHtmlData("post","/racing/detail/selectInfoRaceToolsHtmlJs.do",param);
		setTimeout( function() {
			$("#infoTools").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoTools").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoTools").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoTools").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoTools").find('.laypop-foot').innerHeight();
			}
			if($("#infoTools").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoTools").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
		
		
		var detail = raceDetailInfo.param.raceinfo.detail;
		if(chulNo != "" && chulNo != undefined){
			for(let i=0;i<detail.length;i++){
				if(raceDetailInfo.param.meet == detail[i].meet
					&& raceDetailInfo.param.rcDate == detail[i].rcDate
					&& raceDetailInfo.param.rcNo == detail[i].rcNo
					&& chulNo == detail[i].chulNo){
					$("#tChulNo").html(detail[i].chulNo);
					$("#tHrNm").html(detail[i].hrNm);
					let txt = "";
					if(detail[i].equipTxt != undefined){
						if(detail[i].equipTxt1 != undefined){
							txt += "<p>" + detail[i].equipTxt1 + "<p/>";
						}
						if(detail[i].equipTxt2 != undefined){
							txt += "<p>" + detail[i].equipTxt2 + "<p/>";
						}
						if(detail[i].equipTxt3 != undefined){
							txt += "<p>" + detail[i].equipTxt3 + "<p/>";
						}
						if(detail[i].equipTxt4 != undefined){
							txt += "<p>" + detail[i].equipTxt4 + "<p/>";
						}
						if(detail[i].equipTxt5 != undefined){
							txt += "<p>" + detail[i].equipTxt5 + "<p/>";
						}
					}else{
						txt += "<p>없음</p>";
					}
					$("#tItem12").html(txt);
					break;
				}
			}
		}
	}
	, fnInfoDataTips : function(meet,rcDate,rcNo){//DATA TIPS
		let param = "&popNm=infoDataTips";
		param += "&popBtn=infoDataTipsBtn_" + meet + "_" + rcDate + "_" + rcNo;
		param += "&meet=" + meet;
		param += "&rcDate=" + rcDate;
		param += "&rcNo=" + rcNo;
		getHtmlData("post","/racing/detail/selectInfoRaceDataTipsListHtmlJs.do",param);
		setTimeout( function() {
			$("#infoDataTips").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoDataTips").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoDataTips").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoDataTips").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoDataTips").find('.laypop-foot').innerHeight();
			}
			if($("#infoDataTips").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoDataTips").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
	}
	, fnPlayVod : function(txt, meet){//경기 동영상
		var _json = getJsonData("post","/racing/detail/selectVodUrlJs.do","&meet=" + meet + "&txt=" + encodeURIComponent(txt));
		if(_json.responseJSON.encryptURL != ""){
			window.open(_json.responseJSON.encryptURL, "_blank", "width=1000, height=650, location=no");
		}else{
			fnAlert("동영상 재생에 실패하였습니다.",function(){});
		}
	}
	, fnInfoLast4 : function(meet,rcDate,rcNo,chulNo){//출전마 최근 4회전적
		let param = "&popNm=infoLast4";
		param += "&popBtn=infoLast4Btn_" + meet + "_" + rcDate + "_" + rcNo + "_" + chulNo;
		param += "&meet=" + meet;
		param += "&rcDate=" + rcDate;
		param += "&rcNo=" + rcNo;
		param += "&chulNo=" + chulNo;
		getHtmlData("post","/racing/detail/selectInfoLast4HtmlJs.do",param);
		setTimeout( function() {
			$("#infoLast4").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoLast4").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoLast4").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoLast4").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoLast4").find('.laypop-foot').innerHeight();
			}
			if($("#infoLast4").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoLast4").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
		colveiwf();
		
		
		var last4 = raceDetailInfo.param.raceinfo.last4;
		
		for(let i=0;i<last4.length;i++){
			if(meet == last4[i].meet
				&& rcDate == last4[i].rcDate
				&& rcNo == last4[i].rcNo
				&& chulNo == last4[i].chulNo){
				
				let txt = "";
				
				if(last4[i].firLatstEtrcTxt != "" && last4[i].firLatstEtrcTxt != undefined){
					txt += "<div class='rd-box'>";
					txt += "<div class='tit-area'>";
					txt += "<h4>" + last4[i].firLatstEtrcTxt + "</h4>";
					txt += "<a href='javascript:raceDetailInfo.fnPlayVod(\"" + last4[i].firLatstEtrcTxt + "\",\"" + last4[i].meet + "\");' class='btn-youtube' title='새창 열림'><span class='blind'>영상보기</span></a>";
					txt += "</div>";
					txt += "<ul class='txt-list'>";
					if(last4[i].firLatstEtrcFphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].firLatstEtrcFphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].firLatstEtrcFplcHrnm + "</strong>";
					txt += "<span>" + last4[i].firLatstEtrcFplcRcdVl + " " + last4[i].firLatstEtrcFplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].firLatstEtrcSphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].firLatstEtrcSphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].firLatstEtrcSplcHrnm + "</strong>";
					txt += "<span>" + last4[i].firLatstEtrcSplcRcdVl + " " + last4[i].firLatstEtrcSplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].firLatstEtrcTphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].firLatstEtrcTphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].firLatstEtrcTplcHrnm + "</strong>";
					txt += "<span>" + last4[i].firLatstEtrcTplcRcdVl + " " + last4[i].firLatstEtrcTplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].firLatstEtrcFophrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].firLatstEtrcFophrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].firLatstEtrcFoplcHrnm + "</strong>";
					txt += "<span>" + last4[i].firLatstEtrcFoplcRcdVl + " " + last4[i].firLatstEtrcFoplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].firLatstEtrcFvplcHrnm != undefined){
						if(last4[i].firLatstEtrcFvphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].firLatstEtrcFvphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].firLatstEtrcFvplcHrnm + "</strong>";
						txt += "<span>" + last4[i].firLatstEtrcFvplcRcdVl + " " + last4[i].firLatstEtrcFvplcJckyTxt + "</span>";
						txt += "</li>";
					}
					if(last4[i].firLatstEtrcSiplcHrnm != undefined){
						if(last4[i].firLatstEtrcSiphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].firLatstEtrcSiphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].firLatstEtrcSiplcHrnm + "</strong>";
						txt += "<span>" + last4[i].firLatstEtrcSiplcRcdVl + " " + last4[i].firLatstEtrcSiplcJckyTxt + "</span>";
						txt += "</li>";
					}
					txt += "</ul>";
					txt += "<p class='line-txt'>";
					if(meet == "2"){
						if(last4[i].firLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].firLatstEtrcRaceRcd3Txt + " ";
						}
						if(last4[i].firLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].firLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].firLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].firLatstEtrcRaceRcd2Txt + " ";
						}
					}else{
						if(last4[i].firLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].firLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].firLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].firLatstEtrcRaceRcd2Txt + " ";
						}
						if(last4[i].firLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].firLatstEtrcRaceRcd3Txt + " ";
						}
					}
					
					if(last4[i].firLatstEtrcRaceRcd4Txt != undefined){
						txt += last4[i].firLatstEtrcRaceRcd4Txt + " ";
					}
					if(last4[i].firLatstEtrcRaceRcd5Txt != undefined){
						txt += last4[i].firLatstEtrcRaceRcd5Txt + " ";
					}
					if(last4[i].firLatstEtrcTrckVl != undefined){
						txt += last4[i].firLatstEtrcTrckVl + " ";
					}
					if(last4[i].firLatstEtrcRaceRcd6Txt != undefined){
						txt += last4[i].firLatstEtrcRaceRcd6Txt + " ";
					}
					if(last4[i].latstEtrc1EquipTxt != undefined){
						txt += last4[i].latstEtrc1EquipTxt + " ";
					}
					if(last4[i].firLatstEtrcRaceRcd7Txt != undefined){
						txt += last4[i].firLatstEtrcRaceRcd7Txt + " ";
					}
					txt += "</p>";
					txt += "</div>";
				}
				
				if(last4[i].secoLatstEtrcTxt != "" && last4[i].secoLatstEtrcTxt != undefined){
					txt += "<div class='rd-box'>";
					txt += "<div class='tit-area'>";
					txt += "<h4>" + last4[i].secoLatstEtrcTxt + "</h4>";
					txt += "<a href='javascript:raceDetailInfo.fnPlayVod(\"" + last4[i].secoLatstEtrcTxt + "\",\"" + last4[i].meet + "\");' class='btn-youtube' title='새창 열림'><span class='blind'>영상보기</span></a>";
					txt += "</div>";
					txt += "<ul class='txt-list'>";
					if(last4[i].secoLatstEtrcFphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].secoLatstEtrcFphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].secoLatstEtrcFplcHrnm + "</strong>";
					txt += "<span>" + last4[i].secoLatstEtrcFplcRcdVl + " " + last4[i].secoLatstEtrcFplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].secoLatstEtrcSphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].secoLatstEtrcSphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].secoLatstEtrcSplcHrnm + "</strong>";
					txt += "<span>" + last4[i].secoLatstEtrcSplcRcdVl + " " + last4[i].secoLatstEtrcSplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].secoLatstEtrcTphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].secoLatstEtrcTphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].secoLatstEtrcTplcHrnm + "</strong>";
					txt += "<span>" + last4[i].secoLatstEtrcTplcRcdVl + " " + last4[i].secoLatstEtrcTplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].secoLatstEtrcFophrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].secoLatstEtrcFophrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].secoLatstEtrcFoplcHrnm + "</strong>";
					txt += "<span>" + last4[i].secoLatstEtrcFoplcRcdVl + " " + last4[i].secoLatstEtrcFoplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].secoLatstEtrcFvplcHrnm != undefined){
						if(last4[i].secoLatstEtrcFvphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].secoLatstEtrcFvphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].secoLatstEtrcFvplcHrnm + "</strong>";
						txt += "<span>" + last4[i].secoLatstEtrcFvplcRcdVl + " " + last4[i].secoLatstEtrcFvplcJckyTxt + "</span>";
						txt += "</li>";
					}
					if(last4[i].secoLatstEtrcSiplcHrnm != undefined){
						if(last4[i].secoLatstEtrcSiphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].secoLatstEtrcSiphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].secoLatstEtrcSiplcHrnm + "</strong>";
						txt += "<span>" + last4[i].secoLatstEtrcSiplcRcdVl + " " + last4[i].secoLatstEtrcSiplcJckyTxt + "</span>";
						txt += "</li>";
					}
					txt += "</ul>";
					txt += "<p class='line-txt'>";
					if(meet == "2"){
						if(last4[i].secoLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].secoLatstEtrcRaceRcd3Txt + " ";
						}
						if(last4[i].secoLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].secoLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].secoLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].secoLatstEtrcRaceRcd2Txt + " ";
						}
					}else{
						if(last4[i].secoLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].secoLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].secoLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].secoLatstEtrcRaceRcd2Txt + " ";
						}
						if(last4[i].secoLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].secoLatstEtrcRaceRcd3Txt + " ";
						}
					}
					if(last4[i].secoLatstEtrcRaceRcd4Txt != undefined){
						txt += last4[i].secoLatstEtrcRaceRcd4Txt + " ";
					}
					if(last4[i].secoLatstEtrcRaceRcd5Txt != undefined){
						txt += last4[i].secoLatstEtrcRaceRcd5Txt + " ";
					}
					if(last4[i].secoLatstEtrcTrckVl != undefined){
						txt += last4[i].secoLatstEtrcTrckVl + " ";
					}
					if(last4[i].secoLatstEtrcRaceRcd6Txt != undefined){
						txt += last4[i].secoLatstEtrcRaceRcd6Txt + " ";
					}
					if(last4[i].latstEtrc2EquipTxt != undefined){
						txt += last4[i].latstEtrc2EquipTxt + " ";
					}
					if(last4[i].secoLatstEtrcRaceRcd7Txt != undefined){
						txt += last4[i].secoLatstEtrcRaceRcd7Txt + " ";
					}
					txt += "</p>";
					txt += "</div>";
				}
				
				if(last4[i].thrdLatstEtrcTxt != "" && last4[i].thrdLatstEtrcTxt != undefined){
					txt += "<div class='rd-box'>";
					txt += "<div class='tit-area'>";
					txt += "<h4>" + last4[i].thrdLatstEtrcTxt + "</h4>";
					txt += "<a href='javascript:raceDetailInfo.fnPlayVod(\"" + last4[i].thrdLatstEtrcTxt + "\",\"" + last4[i].meet + "\");' class='btn-youtube' title='새창 열림'><span class='blind'>영상보기</span></a>";
					txt += "</div>";
					txt += "<ul class='txt-list'>";
					if(last4[i].thrdLatstEtrcFphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].thrdLatstEtrcFphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].thrdLatstEtrcFplcHrnm + "</strong>";
					txt += "<span>" + last4[i].thrdLatstEtrcFplcRcdVl + " " + last4[i].thrdLatstEtrcFplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].thrdLatstEtrcSphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].thrdLatstEtrcSphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].thrdLatstEtrcSplcHrnm + "</strong>";
					txt += "<span>" + last4[i].thrdLatstEtrcSplcRcdVl + " " + last4[i].thrdLatstEtrcSplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].thrdLatstEtrcTphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].thrdLatstEtrcTphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].thrdLatstEtrcTplcHrnm + "</strong>";
					txt += "<span>" + last4[i].thrdLatstEtrcTplcRcdVl + " " + last4[i].thrdLatstEtrcTplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].thrdLatstEtrcFophrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].thrdLatstEtrcFophrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].thrdLatstEtrcFoplcHrnm + "</strong>";
					txt += "<span>" + last4[i].thrdLatstEtrcFoplcRcdVl + " " + last4[i].thrdLatstEtrcFoplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].thrdLatstEtrcFvplcHrnm != undefined){
						if(last4[i].thrdLatstEtrcFvphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].thrdLatstEtrcFvphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].thrdLatstEtrcFvplcHrnm + "</strong>";
						txt += "<span>" + last4[i].thrdLatstEtrcFvplcRcdVl + " " + last4[i].thrdLatstEtrcFvplcJckyTxt + "</span>";
						txt += "</li>";
					}
					if(last4[i].thrdLatstEtrcSiplcHrnm != undefined){
						if(last4[i].thrdLatstEtrcSiphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].thrdLatstEtrcSiphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].thrdLatstEtrcSiplcHrnm + "</strong>";
						txt += "<span>" + last4[i].thrdLatstEtrcSiplcRcdVl + " " + last4[i].thrdLatstEtrcSiplcJckyTxt + "</span>";
						txt += "</li>";
					}
					txt += "</ul>";
					txt += "<p class='line-txt'>";
					if(meet == "2"){
						if(last4[i].thrdLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].thrdLatstEtrcRaceRcd3Txt + " ";
						}
						if(last4[i].thrdLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].thrdLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].thrdLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].thrdLatstEtrcRaceRcd2Txt + " ";
						}
					}else{
						if(last4[i].thrdLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].thrdLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].thrdLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].thrdLatstEtrcRaceRcd2Txt + " ";
						}
						if(last4[i].thrdLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].thrdLatstEtrcRaceRcd3Txt + " ";
						}
					}
					
					if(last4[i].thrdLatstEtrcRaceRcd4Txt != undefined){
						txt += last4[i].thrdLatstEtrcRaceRcd4Txt + " ";
					}
					if(last4[i].thrdLatstEtrcRaceRcd5Txt != undefined){
						txt += last4[i].thrdLatstEtrcRaceRcd5Txt + " ";
					}
					if(last4[i].thrdLatstEtrcTrckVl != undefined){
						txt += last4[i].thrdLatstEtrcTrckVl + " ";
					}
					if(last4[i].thrdLatstEtrcRaceRcd6Txt != undefined){
						txt += last4[i].thrdLatstEtrcRaceRcd6Txt + " ";
					}
					if(last4[i].latstEtrc3EquipTxt != undefined){
						txt += last4[i].latstEtrc3EquipTxt + " ";
					}
					if(last4[i].thrdLatstEtrcRaceRcd7Txt != undefined){
						txt += last4[i].thrdLatstEtrcRaceRcd7Txt + " ";
					}
					txt += "</p>";
					txt += "</div>";
				}
				
				if(last4[i].frthLatstEtrcTxt != "" && last4[i].frthLatstEtrcTxt != undefined){
					txt += "<div class='rd-box'>";
					txt += "<div class='tit-area'>";
					txt += "<h4>" + last4[i].frthLatstEtrcTxt + "</h4>";
					txt += "<a href='javascript:raceDetailInfo.fnPlayVod(\"" + last4[i].frthLatstEtrcTxt + "\",\"" + last4[i].meet + "\");' class='btn-youtube' title='새창 열림'><span class='blind'>영상보기</span></a>";
					txt += "</div>";
					txt += "<ul class='txt-list'>";
					if(last4[i].frthLatstEtrcFphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].frthLatstEtrcFphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].frthLatstEtrcFplcHrnm + "</strong>";
					txt += "<span>" + last4[i].frthLatstEtrcFplcRcdVl + " " + last4[i].frthLatstEtrcFplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].frthLatstEtrcSphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].frthLatstEtrcSphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].frthLatstEtrcSplcHrnm + "</strong>";
					txt += "<span>" + last4[i].frthLatstEtrcSplcRcdVl + " " + last4[i].frthLatstEtrcSplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].frthLatstEtrcTphrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].frthLatstEtrcTphrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].frthLatstEtrcTplcHrnm + "</strong>";
					txt += "<span>" + last4[i].frthLatstEtrcTplcRcdVl + " " + last4[i].frthLatstEtrcTplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].frthLatstEtrcFophrAcrdVl == "1"){
						txt += "<li class='txt-blue txt-bold'>";
					}else if(last4[i].frthLatstEtrcFophrAcrdVl == "2"){
						txt += "<li class='txt-bold'>";
					}else{
						txt += "<li>";
					}
					txt += "<strong>" + last4[i].frthLatstEtrcFoplcHrnm + "</strong>";
					txt += "<span>" + last4[i].frthLatstEtrcFoplcRcdVl + " " + last4[i].frthLatstEtrcFoplcJckyTxt + "</span>";
					txt += "</li>";
					if(last4[i].frthLatstEtrcFvplcHrnm != undefined){
						if(last4[i].frthLatstEtrcFvphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].frthLatstEtrcFvphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].frthLatstEtrcFvplcHrnm + "</strong>";
						txt += "<span>" + last4[i].frthLatstEtrcFvplcRcdVl + " " + last4[i].frthLatstEtrcFvplcJckyTxt + "</span>";
						txt += "</li>";
					}
					if(last4[i].frthLatstEtrcSiplcHrnm != undefined){
						if(last4[i].frthLatstEtrcSiphrAcrdVl == "1"){
							txt += "<li class='txt-blue txt-bold'>";
						}else if(last4[i].frthLatstEtrcSiphrAcrdVl == "2"){
							txt += "<li class='txt-bold'>";
						}else{
							txt += "<li>";
						}
						txt += "<strong>" + last4[i].frthLatstEtrcSiplcHrnm + "</strong>";
						txt += "<span>" + last4[i].frthLatstEtrcSiplcRcdVl + " " + last4[i].frthLatstEtrcSiplcJckyTxt + "</span>";
						txt += "</li>";
					}
					txt += "</ul>";
					txt += "<p class='line-txt'>";
					if(meet == "2"){
						if(last4[i].frthLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].frthLatstEtrcRaceRcd3Txt + " ";
						}
						if(last4[i].frthLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].frthLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].frthLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].frthLatstEtrcRaceRcd2Txt + " ";
						}
					}else{
						if(last4[i].frthLatstEtrcRaceRcd1Txt != undefined){
							txt += last4[i].frthLatstEtrcRaceRcd1Txt + " ";
						}
						if(last4[i].frthLatstEtrcRaceRcd2Txt != undefined){
							txt += last4[i].frthLatstEtrcRaceRcd2Txt + " ";
						}
						if(last4[i].frthLatstEtrcRaceRcd3Txt != undefined){
							txt += last4[i].frthLatstEtrcRaceRcd3Txt + " ";
						}
					}
					if(last4[i].frthLatstEtrcRaceRcd4Txt != undefined){
						txt += last4[i].frthLatstEtrcRaceRcd4Txt + " ";
					}
					if(last4[i].frthLatstEtrcRaceRcd5Txt != undefined){
						txt += last4[i].frthLatstEtrcRaceRcd5Txt + " ";
					}
					if(last4[i].frthLatstEtrcTrckVl != undefined){
						txt += last4[i].frthLatstEtrcTrckVl + " ";
					}
					if(last4[i].frthLatstEtrcRaceRcd6Txt != undefined){
						txt += last4[i].frthLatstEtrcRaceRcd6Txt + " ";
					}
					if(last4[i].latstEtrc4EquipTxt != undefined){
						txt += last4[i].latstEtrc4EquipTxt + " ";
					}
					if(last4[i].frthLatstEtrcRaceRcd7Txt != undefined){
						txt += last4[i].frthLatstEtrcRaceRcd7Txt + " ";
					}
					txt += "</p>";
					txt += "</div>";
				}
				
				$("#last4Item").html(txt);
				break;
			}
		}
	}
	, fnHrDetail : function(meet,rcDate,rcNo,hrNo){//마필 전적
		let param = "&popNm=infoHr";
		param += "&popBtn=infoHrBtn_" + meet + "_" + rcDate + "_" + rcNo + "_" + hrNo;
		param += "&meet=" + meet;
		param += "&rcDate=" + rcDate;
		param += "&rcNo=" + rcNo;
		param += "&hrNo=" + hrNo;
		getHtmlData("post","/racing/detail/selectInfoRaceHrHtmlJs.do",param);
		setTimeout( function() {
			$("#infoHr").attr('tabindex', 0).focus();
		}, 50);
		var heightCalc = function(){
			var pHeaderHeight = 0;
			var pFooterHeight = 0;
			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			// 팝업 타이틀 높이값 체크
			if($("#infoHr").find('.laypop-head').length) {
				var pHeaderHeight = $("#infoHr").find('.laypop-head').innerHeight();
			}
			// 팝업 하단 높이값 체크
			if($("#infoHr").find('.laypop-foot').length) {
				var pFooterHeight = $("#infoHr").find('.laypop-foot').innerHeight();
			}
			if($("#infoHr").is('.lslide') && winWidth < 1280 ){
				var popHeight = winHeight - pHeaderHeight - pFooterHeight;
			}else{
				var popHeight = winHeight - pHeaderHeight - pFooterHeight -92;
			}
			
			$("#infoHr").find('.laypop-body').css({
				'max-height': popHeight
			});
		}
		heightCalc();
		$(window).resize(function(){
			heightCalc();
		});
		var hrRate = raceDetailInfo.param.raceinfo.hrRate;
		for(let i=0;i<hrRate.length;i++){
			if(hrRate[i].hrNo == hrNo){
				$(".lyperson-box.hrratebody h4").html(hrRate[i].hrName);
				$(".lyperson-box.hrratebody .list-rdgray .totalrate").html("<em>" + hrRate[i].totRecord1 + "</em> " + hrRate[i].totRecord2 + " " + hrRate[i].totRate);
				$(".lyperson-box.hrratebody .list-rdgray .lastrate").html("<em>" + hrRate[i].monRecord1 + "</em> " + hrRate[i].monRecord2 + " " + hrRate[i].monRate);
				break;
			}
		}
	}
};