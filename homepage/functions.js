$( function() {
   $( ".draggable" ).draggable();
 } );

 $('.draggable').mousedown(function() {
    // set ohters element to the initial level
    $(this).siblings('.draggable').css('z-index', 10);
    // set clicked element to a higher level
    $(this).css('z-index', 11);
 });

 function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
