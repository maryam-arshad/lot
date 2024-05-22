$(document).ready(function(){
    $(".Bars").click(function(){
    console.log("click")
       $(".dropdown-content").addClass("dropdown-content-show")
       $("body").css("overflow", "hidden");
       $("body").addClass("drawer-open");
   
       });
   
         $(".time").click(function(){
           console.log("click")
       $(".dropdown-content").removeClass("dropdown-content-show");
       $("body").css("overflow", "auto");
       $("body").removeClass("drawer-open");
   
       });
   
     });
   