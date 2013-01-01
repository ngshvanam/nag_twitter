
$(document).ready(function(){
   $("#tweet").focus(function(){
      $("#tweet").addClass("expanded");
      if( $("#tweet").val() == "Compose new Tweet...")
         $("#tweet").val("");
      $(this).parent().next().css("display","block");
   });
   
   $(document).bind('click', function(event) {
     if(event.target.id == "btn-tweet" || event.target.id == "tweet" || event.target.id =="profile-popup" ||event.target.id == "profile-button") { return; }
       $("#profile-popup").css({display:"none"});
       
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
    
    $("#btn-tweet").click(function(){
    	if($("#btn-tweet").hasClass("btn-highlighted")) {
			 $("#char-count").css("display","none");
			 $("#char-count").prev().css("display","block");
    	}
    });
    
    $("a.follow-link").click(function(){
	$(this).closest('.tweet-box').fadeOut(1000);
    });
    
    $("#profile-button").click(function() {
    	if($("#profile-popup").css("display")=="none") {
         $("#profile-popup").css({display:"block"});
         $("#profile-popup").css("margin-left",$("#profile-button").offset().left+25-$("#profile-popup").width());
      }
    });
   
});
