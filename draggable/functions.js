$( function() {
   $( ".draggable" ).draggable();
 } );


 $('.draggable').click(function() {
    // set ohters element to the initial level
    $(this).siblings('.draggable').css('z-index', 10);
    // set clicked element to a higher level
    $(this).css('z-index', 11);
 });
