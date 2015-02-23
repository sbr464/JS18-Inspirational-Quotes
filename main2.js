
var QuoteLibrary = function(){
  this.quotes = [];
}


var Quote = function(quote, author){
  this.author = author;
  this.quote = quote;
  this.rating = 0;
  this.featured = false;
};


QuoteLibrary.prototype.addQuotes = function() {
  // concat is non-destructive, so we need to re-assign
  // to its result. This overrides the original value
  // with the new set
  this.quotes = this.quotes.concat([].slice.call(arguments));

  // If this was set up for just being 'addBook,' we
  // could just use:
  // this.books.push(book);
};

var quote1 = new Quote('Science is a wonderful thing if one does not have to earn one\'s living at it.', 'Albert Einstein');
var quote2 = new Quote('The further the spiritual evolution of mankind advances, the more certain it seems to me that the path to genuine religiosity does not lie through the fear of life, and the fear of death, and blind faith, but through striving after rational knowledge.', 'Albert Einstein');
var quote3 = new Quote('The secret to creativity is knowing how to hide your sources.', 'Albert Einstein');
var myQuotes = new QuoteLibrary();
myQuotes.addQuotes(quote1, quote2, quote3);



$(document).on('ready', function() {
  



$('#QuoteInputForm').submit(function(){
  var author = $('#AuthorInput').val();
  var quote = $('#QuoteInput').val();

var newQuote = new Quote(quote, author)

quotes.push(newQuote);





  $('.output').append('<div class="quote-container"><div class="quote-text">' + quote + '</div><div class="author-text">- ' + author + '</div><div><img class="remove-quote" src="images/remove.png"></div><div class="featured"><img src="images/featured.png"></div><div><img class="quotation-mark" src="images/quotation.png"></div><div class="rating-box"><div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></div></div>');
  event.preventDefault();
  this.reset();
});


$('body').on('click', '.remove-quote', function(){
  $(this).closest('.quote-container').fadeOut(500, function(){ $(this).remove();});
});




$('.output').on('mouseenter', '.quote-container', function( event ) {
    $(this).find('.featured').css('display', 'block');
}).on('mouseleave', '.quote-container', function( event ) {
    $(this).find('.featured').css('display', 'none');
});

$('.output').on('click', '.featured', function(){
  $('.output').find('.featuredon').removeClass('featuredon').addClass('featured');
  $(this).removeClass().addClass('featuredon');
  $('.output').find('.featured').css('display', 'none');
});


$('.output').on('click', '.featuredon', function(){
  $(this).removeClass().addClass('featured').css('display', 'none');
});


});

