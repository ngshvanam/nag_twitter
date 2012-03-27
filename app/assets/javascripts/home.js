
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
    		 $(htmlText($("#tweet").val())).insertAfter($("#tweets h2")).fadeIn(1500, function(){
				$("#char-count").css("display","block");
			   $("#char-count").prev().css("display","none");
				$("#tweet").removeClass("expanded");
				$("#tweet").removeAttr("style");
				$("#tweet").val("Compose new Tweet...");
				$("#tweet").parent().next().css("display","none");
    		    $("#btn-tweet").removeClass("btn-highlighted").addClass("btn");
				$("#char-count").html(140);
			 });
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
    
    function htmlText(post){
    	return '<div style="display:none" class="tweet-box" ><div style="padding: 9px 12px 9px;"><table width="100%" bordar="none"><tr VALIGN=TOP><td width="45px" rowspan="2"><a href="#"><img class="profile-image" src="/assets/BGtwitter_normal.JPG" width="60px" height="60px"></img></a></td><td style=" padding-left:8px;"><a href="#">Bill Gates</a></td> <td></td> <td align="right"><small style="color:gray">1h</small></td></tr><tr><td colspan="3" style=" padding-left:8px;">'+post+'</td></tr></table></div></div>';

    }
});
