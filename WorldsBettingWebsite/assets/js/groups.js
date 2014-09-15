$(init)

function init() {
 
    $('#groupA').html( '' );
    $('#groupB').html( '' );
    $('#groupC').html( '' );
    $('#groupD').html( '' );
 
 
    $('<li>' + 'Samsung Blue' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupA' );   
    $('<li>' + 'Samsung White' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupA' );    
    $('<li>' + 'Cloud 9' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupA' );     
    $('<li>' + 'Alliance' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupA' );     
    $('<li>' + 'Samsung Blue' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupB' );   
    $('<li>' + 'Samsung White' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupB' );    
    $('<li>' + 'Cloud 9' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupB' );     
    $('<li>' + 'Alliance' + '</li>').addClass('ui-state-default').data( 'number', 'A' ).attr( 'id', 'teamSamsungBlue' ).appendTo( '#groupB' );     
      // Create the card slots
    
    $(function() {
        $( "#groupA" ).sortable({
          items: "li:not(.ui-state-disabled)"
        });
     
        $( "#groupB" ).sortable({
          items: "li:not(.ui-state-disabled)"
        });
        $( "#groupC" ).sortable({
          items: "li:not(.ui-state-disabled)"
        });
     
        $( "#groupD" ).sortable({
          items: "li:not(.ui-state-disabled)"
        });
     
        $( "#groupA li" ).disableSelection();
        $( "#groupB li" ).disableSelection();
        $( "#groupC li" ).disableSelection();
        $( "#groupD li" ).disableSelection();
      });
 
}



function handleTeamDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var teamLetter = ui.draggable.data( 'number' );
  var groupLetter = $(this).data( 'number' );
 
  if ( teamLetter == groupLetter ) {
    ui.draggable.addClass( 'correct' );
    //ui.draggable.draggable( 'disable' );
    //$(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    //correctCards++;
  } 
   
 
}
