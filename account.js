$(document).ready(function () {
    
// Add a new parent button
    $(".add").click(
        function (event){
           // show the pop-up
      $(".pop-up").css({
         'visibility' : 'visible' 
      });
        });
// Add a new parent to the list pop-up
        $(".ok").click(
        function (event){
            // hid the pop-up
      $(".pop-up").css({
         'visibility' : 'hidden' 
      });
            // get the parent name from pop-up
    $(".names").append( `<div class="name"> ${$(".newParent").val()} </div> `);       
        });
    // hide the pop-up
            $(".cancel").click(
        function (event){
           
      $(".pop-up").css({
         'visibility' : 'hidden' 
      });
        });
   // add a funcation call for the fucking chiled 
    var theParent = document.querySelector(".names"); 
    theParent.addEventListener("click", deleteIt); 
    
    // the fucking function that will be called
    function deleteIt(e) {
         if (e.target !== e.currentTarget){
   
       e.target.remove();
         }
    }
    
    // FUCK YOU Thank YOU

});



