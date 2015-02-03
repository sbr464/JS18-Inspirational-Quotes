$(document).on('ready', function() {
  

$('#QuoteInputForm').submit(function(){
  var author = $('#AuthorInput').val();
  var quote = $('#QuoteInput').val();
  $('.output').append('<p class="quoteText">' + quote + '</p><p class="quoteAuthor">' + '-- ' + author + '</p>');
  event.preventDefault();
  this.reset();
});

});