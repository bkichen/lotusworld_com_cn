function map_swich(i){
	if(i===1){
	$(".map02").css('display','none');
	$(".map03").css('display','none');
	$("li.menu01").addClass("cur"); 
	$("li.menu02").removeClass("cur"); 
	$("li.menu03").removeClass("cur");}
	else if(i===2){
	$(".map0"+i).css('display','block');
	$(".map03").css('display','none');
	$("li.menu01").removeClass("cur"); 
	$("li.menu02").addClass("cur"); 
	$("li.menu03").removeClass("cur");}
	else if(i===3){
	$(".map0"+i).css('display','block');
	$(".map02").css('display','none');
	$("li.menu01").removeClass("cur"); 
	$("li.menu02").removeClass("cur"); 
	$("li.menu03").addClass("cur");}
}