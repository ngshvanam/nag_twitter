$(document).ready(function(){
		$("#profile-page").click(function(event) {
		 $("#profile-page .selected").css({color:"#009ee0"});
		 $("#profile-page .selected").removeClass("selected");
		 $(event.target).addClass("selected");
		 $(event.target).css({color:"black"});
		   
		 $("#profile").css({display:"none"});
		 $("#password").css({display:"none"});
		 $("#design").css({display:"none"});
		 
		 if($(event.target).html()=="Profile")
		 {
		   $("#profile").css({display:"block"});
		 }
		 else if($(event.target).html()=="Password")
		 {
		  	$("#password").css({display:"block"});
		 }
		 else if($(event.target).html()=="Design")
		 {
		   $("#design").css({display:"block"});
   	 }
		});
		$("#profile-page div").mouseover(function(event){
			$(event.target).addClass("focus");
			$(event.target).css({color:"#000000"});
			$(event.target).css({cursor:"hand"});
		});
		$("#profile-page div").mouseout(function(event){
			$(event.target).removeClass("focus");
			if(!$(event.target).hasClass('selected'))
			{
				$(event.target).css({color:"#009ee0"});
			}
			$(event.target).css({cursor:"pointer"});
		})
   });
