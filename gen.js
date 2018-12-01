// STUFF FOR IMAGE SEARCHER
function clearImages() {
  $('.inner').empty();
}

function getData() {
  clearImages();
  var input = $("#searchtext").val();
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?api_key=QUttZspjwOUUX2wJFuN8cFVBq5vmAR07&limit=10&q=" + input);

    xhr.done(function(response) { 

      console.log("success got data", response); 

      var jiffs = response.data;

      for (i in jiffs)
      {
      $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:350px;'/>");
      }
    });

}
// Jquery \\\\\\\\\\\\\\\\\
jQuery(function () {
    jQuery('ul.nav').superfish();
});
// \\\\\\\\\\\\\\\\\\\