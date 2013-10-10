$(function(){
var data = [
      { first : "John", last: "Doe", employeeID: 101},
      { first : "Jane", last: "Doe", employeeID: 103}
];
var url = "http://localhost/data";
  // setup autocomplete function pulling from data[] array
  $('#employeeName').autocomplete({
      source: data,
      /*source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( data, function( item ){
              console.log("item: "+JSON.stringify(item.last));
              return matcher.test( item );
          }) );
    },*/
    minLength: 1, //=3
    response: function(event, item) {
        console.log("results: "+item.content.length);
          if (item.content.length === 0) {
              $("#outputcontent").text("Data Not Available");
          } else {
              $("#outputcontent").empty();
          }
      },
      select: function (event, ui) {
          var selected = ui.item;
          var thehtml = '<strong>Name:</strong> ' + selected.first +' '+  selected.last +' <br> <strong>ID:</strong> ' + selected.employeeID;
          $('#outputcontent').html(thehtml);
      }
  }).data("ui-autocomplete")._renderItem = function( ul, item ) {
      return $( "<li>" )
          .append( "<a class='item'>" + item.first + " " + item.last + "</a>" )
          .appendTo( ul );
  };

});