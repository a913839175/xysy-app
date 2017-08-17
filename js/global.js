
	jQuery.jqmenu= function(tabtit) {
	$(tabtit).click(function(){
		if($('.xx').is(':hidden')){//如果当前隐藏
		$('.xx').show();//那么就显示div
		}else{//否则
		$('.xx').hide();//就隐藏div
		}
	});
};
	$.jqmenu('.nav .right');
	jQuery.refres=function(classs,num,node){
		$(window).scroll(function(){  
	            var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)  
	              
	            //console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop());  
	//          console.log("页面的文档高度 ："+$(document).height());  
	//          console.log('浏览器的高度：'+$(window).height());  
	//            
	            totalheight = parseFloat($(window).height()) + parseFloat(srollPos);  
	                        console.log(totalheight);
	            if(($(document).height()-10) <= totalheight) { 
	            	for (var i=0;i<num;i++){
	            		$("."+classs+"").append(""+node+"");
	            	}
	            	
	            
	
	            }  
	       });    
	};
       
       
       
//视频弹框
var me_pop_video={
	me_pop_dialog:function(dialog_obj,http,height_this){
		$(".me_modal").removeClass("me_modal");
        dialog_obj.addClass("me_modal").css({"position":"fixed","z-index":"2000"});
         	dialog_obj.append("<video class='vedio' width='320' height='240' controls='controls'>"+
			"<source src='"+http+"' type='video/ogg'>"+
			"<source src='"+http+"' type='video/mp4'>"+
			"Your browser does not support the video tag."+
		"</video>");
        if(0 < height_this){}
		else{height_this = $(".me_modal").height();}
		console.log($(".me_modal").height());
		if(0 < ($(window).height() - height_this)){
			$(".me_modal:visible").css("top", parseInt(($(window).height() - height_this ) / 2));
		}
        if(0 < ($(window).width() - $(".me_modal >div").width())){
			$(".me_modal:visible").css("left", parseInt(($(window).width() - $(".me_modal").width()) / 2));
		}
        if ($("#dialog_show").length == 0) {
            $("body").append("<div id=\"dialog_show\" class=\"modal-backdrop fade in\"></div>");
        }
	},
	//////关闭模态对话框留的接口
	 me_pop_close:function(){
	 	$("#dialog_show").remove();
        $(".me_modal").removeClass("me_modal");
        $("#receivable video").remove();
        
        
	 }
}
