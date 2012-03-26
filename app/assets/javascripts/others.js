	$(document).ready(function(){
	
	$("#tweet").focus(function(){
      $("#tweet").addClass("expanded");
      if( $("#tweet").val() == "Compose new Tweet...")
         $("#tweet").val("");
      $(this).parent().next().css("display","block");
   });
   
	$(document).bind('click', function(event) {
     if(event.target.id == "btn-tweet" || event.target.id == "tweet") { return; }
       $("#tweet").removeClass("expanded");
       $("#tweet").removeAttr("style");
       if($("#tweet").val()=="") $("#tweet").val("Compose new Tweet...");
       $("#tweet").parent().next().css("display","none");
   });
	
   $("#tweet").keydown(function(){
		setTimeout(function(){if($("#tweet").val()=="")
		    {
		      $("#btn-tweet").removeClass("btn-highlighted").addClass("btn");
		      $("#char-count").html(140-$("#tweet").val().length);
		    }
		    else
		    {
		      $("#btn-tweet").removeClass("btn").addClass("btn-highlighted");
		      $("#char-count").html(140-$("#tweet").val().length);
		    }},1);
    });	
	
		$("#own-page").click(function(event) {
		    $("#own-page .selected").css({color:"#009ee0"});
			 $("#own-page .selected").removeClass("selected");
		    $(event.target).addClass("selected");
		    $(event.target).css({color:"black"});
		    
		    $("#tweets").css({display:"none"});
		    $("#following").css({display:"none"});
		    $("#followers").css({display:"none"});
		    $("#favorites").css({display:"none"});
		    $("#lists").css({display:"none"});

		    if($(event.target).html()=="Tweets")
		    {
		    	$("#tweets").css({display:"block"});
		    }
		    else if($(event.target).html()=="Following")
		    {
		    	$("#following").css({display:"block"});
		    }
		    else if($(event.target).html()=="Followers")
		    {
		      $("#followers").css({display:"block"});
   		 }
		    else if($(event.target).html()=="Favorites")
		    {
		    	$("#favorites").css({display:"block"});
		    }
		    else if($(event.target).html()=="Lists")
		    {
		    	$("#lists").css({display:"block"});
		    }
		    
		    
		});
		$("#own-page div").mouseover(function(event){
			$(event.target).addClass("focus");
			$(event.target).css({color:"#000000"});
			$(event.target).css({cursor:"hand"});
		});
		$("#own-page div").mouseout(function(event){
			$(event.target).removeClass("focus");
			if(!$(event.target).hasClass('selected'))
			{
				$(event.target).css({color:"#009ee0"});
			}
			$(event.target).css({cursor:"pointer"});
		});
		$("#following table td:nth-child(3) a").mouseover(function(event){
			$(this).html("Unfollow");
			$(this).addClass("unfollow-btn");
			$(this).removeClass("following-btn");
		});
		$("#following table td:nth-child(3) a").mouseout(function(event){
			$(this).html("Following");
			$(this).addClass("following-btn");
			$(this).removeClass("unfollow-btn");
		});
		$("#following table td:nth-child(3) a").click(function(){
			$(this).closest(".tweet-box").fadeOut(500);		
		});
		$("#followers table td:nth-child(3) a").mouseover(function(event){
			if(!$(this).hasClass("follow-btn"))
			{
			$(this).html("Unfollow");
			$(this).addClass("unfollow-btn");
			$(this).removeClass("following-btn");
			}
		});
		$("#followers table td:nth-child(3) a").mouseout(function(event){
			if(!$(this).hasClass("follow-btn"))
			{		
			$(this).html("Following");
			$(this).addClass("following-btn");
			$(this).removeClass("unfollow-btn");
			}
		});
		$("#followers table td:nth-child(3) a").click(function(){
			if($(this).hasClass("unfollow-btn")) {
				$(this).removeClass("unfollow-btn").addClass("follow-btn");
				$(this).html("Follow");
			}
			else {
				$(this).removeClass("follow-btn").addClass("following-btn");
				$(this).html("Following");
			}
		});
		$("span").css({cursor:"hand"});
		$("span").mouseover(function(){
			$(this).css({color:"#009ee0"});		
			$(this).prev().css({color:"#009ee0"});		
		});
		$("span").mouseout(function(){
			$(this).css({color:"#999999"});
			$(this).prev().css({color:"#000000"});		
		});
	});
