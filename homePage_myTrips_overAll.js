

$(document).ready(function () {
  
//  Top bar cliking function
$(".DRIVING_TIPS_TOP_BAR").click(
  function(){
$(this).addClass("SELECTED_TOP_BAR");
$(".OVER_ALL_TOP_BAR").removeClass("SELECTED_TOP_BAR");
} );
  
  $(".OVER_ALL_TOP_BAR").click(
  function(){
$(this).addClass("SELECTED_TOP_BAR");
$(".DRIVING_TIPS_TOP_BAR").removeClass("SELECTED_TOP_BAR");
    
    
} );
  
  function addTrip (Day, Month, dayNumber, dayText, Alerts, Speed, Time){
    document.getElementById("OUTER_OVERALL").innerHTML += ' <div class="Inner_OVERALL"> <span class="date"> <strong>'+Day+'</strong><br>'+Month+'<br>'+dayNumber+' <br> </span> <div class="trips"> <p>'+dayText+'</p><table> <tr> <td class="number">'+Alerts+'</td> <td>Number<br> of alerts</td> <td class="number">'+Speed+'</td><td>Average<br>speed (km/h)</td> <td class="number">'+Time+'</td> <td>Trip total <br> time (hrs)</td> </tr> </table </div> </div>';
  }
  
});


