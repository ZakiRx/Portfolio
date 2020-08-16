
new fullpage('#fullpage',{
    autoScrolling:true,
    navigation:true,
    anchors:['Home','About','Works','Skills'],
    navigationTooltips:['Home','About','Works','Skills'],
    showActiveTooltip:true,
    scrollingSpeed:1000,
    controlArrows:false,
    slideNavigation:true
});


$(document).ready(function(){
    $(".works .menu li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
     let cat= $(this).data("cat");
     if(cat=="all"){
         $(".works div").show();
     }
     else{
         $("."+cat).show().siblings("div").not("."+cat).hide();
     }

  });
});