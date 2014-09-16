$(init)
var pathname = window.location.pathname;

function init() {
 
    $('#groupA').html( '' );
    $('#groupB').html( '' );
    $('#groupC').html( '' );
    $('#groupD').html( '' );
    $('#userSelect').html( '' );

    //Load User Bet Data
    $.getJSON("/user",function(userData) {
        $.each(userData, function(key,userDataVal){
           $('#userSelect').append('<option value="'+userDataVal.id+'">'+userDataVal.name+'</option>');
        });

        $.getJSON("/user?id=" + $('#userSelect').val(), function(userData) {
            if(userData.groupStageBet.length==0){
                
                $.getJSON("/groupstage?name=default", function(groupStageData) {
                    $.each( groupStageData[0].groups, function(groupStageKey,groupStageVal){
                        $.getJSON("/group?id="+groupStageVal.id, function(groupData) {
                            $.each(groupData.hasTeams, function(teamKey, teamVal){ 
                                $('<li>' + teamVal.name + '</li>').addClass('ui-state-default').data( 'teamID', teamVal.id ).attr( 'id', "team"+teamVal.id ).appendTo( '#group'+ groupData.groupLetter);   
                            });
                        });
                    });
                    
                });
            }
            else {
                $.getJSON("/groupstagebet?id="+userData.groupStageBet[0].id, function(groupStageBetData){
                   $.each(groupStageBetData.groupBets, function(groupBetKey, groupBetValue){
                       $.getJSON("/team?id="+groupBetValue.firstPlace, function(teamData){
                            $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                                $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'teamID', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                            });
                        });
                       $.getJSON("/team?id="+groupBetValue.secondPlace, function(teamData){
                            $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                                $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'teamID', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                            });
                        });
                       $.getJSON("/team?id="+groupBetValue.thirdPlace, function(teamData){
                            $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                                $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'teamID', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                            });
                        });
                       $.getJSON("/team?id="+groupBetValue.fourthPlace, function(teamData){
                            $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                                $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'teamID', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                            });
                        });
                });
                }); 
            }
        });
    });
    
    //$.getJSON("/groupstage?name=default", function(groupStageData) {
        //$.each( groupStageData[0].groups, function(groupStageKey,groupStageVal){
            //$.getJSON("/group?id="+groupStageVal.id, function(groupData) {
                //$.each(groupData.hasTeams, function(teamKey, teamVal){ 
                    //$('<li>' + teamVal.name + '</li>').addClass('ui-state-default').data( 'number', groupData.groupLetter ).attr( 'id', "team"+teamVal.id ).appendTo( '#group'+ groupData.groupLetter);   
                //});
            //});
        //});
        
    //});
 
    
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

function onUserSelect() {
    $('#groupA').html( '' );
    $('#groupB').html( '' );
    $('#groupC').html( '' );
    $('#groupD').html( '' );
    $.getJSON("/user?id=" + $('#userSelect').val(), function(userData) {
        if(userData.groupStageBet.length==0){
            $.getJSON("/groupstage?name=default", function(groupStageData) {
                $.each( groupStageData[0].groups, function(groupStageKey,groupStageVal){
                    $.getJSON("/group?id="+groupStageVal.id, function(groupData) {
                        $.each(groupData.hasTeams, function(teamKey, teamVal){ 
                            $('<li>' + teamVal.name + '</li>').addClass('ui-state-default').data( 'teamID', teamVal.id ).attr( 'id', "team"+teamVal.id ).appendTo( '#group'+ groupData.groupLetter);   
                        });
                    });
                });
                
            });
        }
        else {

            $.getJSON("/groupstagebet?id="+userData.groupStageBet[0].id, function(groupStageBetData){
               $.each(groupStageBetData.groupBets, function(groupBetKey, groupBetValue){
                   $.getJSON("/team?id="+groupBetValue.firstPlace, function(teamData){
                        $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                            $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'teamID', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                        });
                    });
                   $.getJSON("/team?id="+groupBetValue.secondPlace, function(teamData){
                        $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                            $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'teamID', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                        });
                    });
                   $.getJSON("/team?id="+groupBetValue.thirdPlace, function(teamData){
                        $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                            $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'teamID', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                        });
                    });
                   $.getJSON("/team?id="+groupBetValue.fourthPlace, function(teamData){
                        $.getJSON("/group?id="+groupBetValue.forGroup, function(groupData){
                            $('<li>' + teamData.name + '</li>').addClass('ui-state-default').data( 'number', teamData.id ).attr( 'id', "team"+teamData.id ).appendTo( '#group'+ groupData.groupLetter);   
                        });
                    });
            });
            }); 
        }
    });
    
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

function Save(){
    
}
