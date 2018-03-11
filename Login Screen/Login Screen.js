

$(document).ready(function () {
  
   $( "#login_button" ).click(function() {
    $(this).css("border-bottom", "solid #FFE066");
    $("#Signup_button").css("border-bottom", "none");
      $("#email, #UserEmail").hide(80);
});
  
     $( "#Signup_button" ).click(function() {
    $(this).css("border-bottom", "solid #FFE066");
    $("#login_button").css("border-bottom", "none");
   $("#email, #UserEmail").show(90);
});
  
  
});


