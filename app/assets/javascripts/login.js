$(document).ready(function(){

	$("#signin-btn").mouseover(function(){
		$(this).css({color:"#efffff"});
	});
	$("#signin-btn").mouseout(function(){
		$(this).css({color:"#bbbbbb"});
	});
	$("#signin-btn").click(function(e){
		e.preventDefault();
                $("fieldset#signin_menu").toggle();
		$("#signin-btn").toggleClass("menu-open");
	});
	$("fieldset#signin_menu").mouseup(function() {
		return false
	});
	$(document).mouseup(function(e) {
		if($(e.target).parent("a.signin").length==0) {
			$("#signin-btn").removeClass("menu-open");
			$("fieldset#signin_menu").hide();
		}
	});	
});