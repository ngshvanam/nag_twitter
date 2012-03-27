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
	$("#user-name").click(function(){
		if($("#user-name").val()=="Full Name") $("#user-name").val("");
	});
	$("#user-name").blur(function(){
		if($("#user-name").val()=="") $("#user-name").val("Full Name");
	});
	$("#email").click(function(){
		if($("#email").val()=="Email") $("#email").val("");
	});
	$("#email").blur(function(){
		if($("#email").val()=="") $("#email").val("Email");
	});
	$("#password").click(function(){
		if($("#password").val()=="Password") $("#password").val("");
	});
	$("#password").blur(function(){
		if($("#password").val()=="") $("#password").val("Password");
	});
});