// rollAnime縺ｫroll縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倥￠繧句ｮ夂ｾｩ
function RollAnimeControl() {
	$('.rollAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();	//rollAnime縺ｮ蟄占ｦ∫ｴ�繧貞叙蠕�
		if (scroll >= elemPos - windowHeight) {
			$(childs).each(function (i) {		//蟄占ｦ∫ｴ�繧�1縺､1縺､蜃ｦ逅�ｒ縺翫％縺ｪ縺�
				if (i < 10) {					//10譛ｪ貅縺ｮ蝣ｴ蜷�
				$(this).css("transition-delay","."+i+"s");	//蟄占ｦ∫ｴ�縺ｫcsstransition-delay繧定ｿｽ蜉�
				}else {							//10莉･荳翫�蝣ｴ蜷�
					var n = i / 10;				//繝溘Μ遘呈欠螳壹↑縺ｮ縺ｧ10縺ｧ蜑ｲ繧�
					$(this).css("transition-delay",n+"s");	//蟄占ｦ∫ｴ�縺ｫcsstransition-delay繧定ｿｽ蜉�
				}
			});
			
			$(this).addClass("roll"); //roll縺ｨ縺�≧繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ�

		} else {
			$(childs).each(function () {		//蟄占ｦ∫ｴ�繧�1縺､1縺､蜃ｦ逅�ｒ縺翫％縺ｪ縺�
				$(this).css("transition-delay","0s");//蟄占ｦ∫ｴ�縺ｫcsstransition-delay縺ｮ遘偵ｒ0縺ｨ縺吶ｋ
			});
			$(this).removeClass("roll");//roll縺ｨ縺�≧繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧ｯ繝ｩ繧ｹ繧帝勁蜴ｻ
		}
	});
}

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
	RollAnimeControl();/* 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ逕ｨ縺ｮ髢｢謨ｰ繧貞他縺ｶ*/
});// 縺薙％縺ｾ縺ｧ逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ

// 逕ｻ髱｢縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load', function () {
	//span繧ｿ繧ｰ繧定ｿｽ蜉�縺吶ｋ
	var element = $(".rollAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = [];
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="transition-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	RollAnimeControl();/* 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ逕ｨ縺ｮ髢｢謨ｰ繧貞他縺ｶ*/
});// 縺薙％縺ｾ縺ｧ逕ｻ髱｢縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ