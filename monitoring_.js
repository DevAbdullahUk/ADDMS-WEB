$(document).ready(function () {

    var selectedElm;
    
$(".name").click(
    
    function(event){
    $(this).css({
    'background-color':'#D9D9D9',
    'font-weight': 'bold'
    });
        
    if (selectedElm != undefined && selectedElm != this){
     // Not the first run (something is selected)
    $(selectedElm).css({
    'background-color':'#EFEFEF',
    'font-weight': '100'
    });
     }
    
     selectedElm = this;
});

     
    
});

    function initMap() {
        var uluru = {lat: 24.66563, lng: 46.67630};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    