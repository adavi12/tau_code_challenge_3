console.log( 'js' );

var jokeArray = [];
$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');

    var newObject = {
      whoseJokeIn: $("#whoseJokeIn").val(),
      questionIn:$("#questionIn").val(),
      punchlineIn:$("#punchlineIn").val()
    };
    console.log("adding:", newObject);
    var getJokeData = function(){
    console.log( 'in getJokeData' );

    $.ajax({
      type: 'POST',
      url: '/joke',
      success: function( response ){
        console.log( 'back from post call:', response );
      displayOnDom(response);
      },
      error: function(){
        console.log( 'error with ajax call...');
        var postJokeData = function(){
        console.log( 'in postJokeData', response);
      };
    }
 });
    $.ajax({
          type: 'POST',
          url: '/joke',
          data: objectToSend,
          success: function( response ){
            console.log( 'back from post call:', response );
          },
          error: function(){
            console.log( 'error with ajax call...');
          }
        })
      };
  var displayOnDom = function(){
    $("#outputDiv").empty();
      console.log("In jokeData:" );
      $( "#outputDiv").html(outputText);
  };
}); // end doc ready
