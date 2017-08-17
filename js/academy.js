	jQuery.jqmenu= function(tabtit) {
	var kaiguan=2;
	$(tabtit).on('click',function(){
		if(kaiguan==1){
			$(this).siblings('.boxnr_neirong').show();
			var jiaobiao=$(this).find('.up_sltimg').attr('src');
			var jiaobiaonew=jiaobiao.replace('top1.png','down1.png');
			$(this).find('.up_sltimg').attr('src',jiaobiaonew);
			kaiguan=2;
		}else if(kaiguan==2){
			$(this).siblings('.boxnr_neirong').hide();
			var jiaobiao=$(this).find('.up_sltimg').attr('src');
			var jiaobiaonew=jiaobiao.replace('down1.png','top1.png');
			$(this).find('.up_sltimg').attr('src',jiaobiaonew);
			kaiguan=1;
		}
	})
};
$.jqmenu('.boxzli .boxnr_10');
$.jqmenu('.boxzli .boxnr_11');
$.jqmenu('.boxzli .boxnr_12');
$.jqmenu('.boxzli .boxnr_13');
$.jqmenu('.boxzli .boxnr_14');
$.jqmenu('.boxzli .boxnr_15');
$.jqmenu('.boxzli .boxnr_16');
$.jqmenu('.boxzli .boxnr_17');
$.jqmenu('.boxzli .boxnr_18');
$.jqmenu('.boxzli .boxnr_19');

