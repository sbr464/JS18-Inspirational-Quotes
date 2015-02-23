$(document).on('ready', function() {
  
// this.$el = $('<div>')
//   .addClass('quote-container')
//   .append('<div>')
//   .addClass('quote-text')
//   .append('<p>' + this.quote + '</p>')
//   .append('<div>')
//   .addClass('author-text')
//   .append('<p>' + this.author + '</p>')
//   .append('div')
//   .append('<img src="images/remove.png">')
//   .addClass('remove-quote')
//   .append('<div>')
//   .append('<img> src="images/quotation')
//   .addClass('quotation-mark')
//   .append('<div>')
//   .addClass('rating-box')
//   .append('<div>')
//   .addClass('rating')
//   .append('<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>');



$('#QuoteInputForm').submit(function(){
  var author = $('#AuthorInput').val();
  var quote = $('#QuoteInput').val();
  $('.output').append('<div class="quote-container"><div class="quote-text">' + quote + '</div><div class="author-text">- ' + author + '</div><div><img class="remove-quote" src="images/remove.png"></div><div class="featured"><img src="images/featured.png"></div><div><img class="quotation-mark" src="images/quotation.png"></div><div class="rating-box"><div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div></div></div>');
  event.preventDefault();
  this.reset();
});


$('body').on('click', '.remove-quote', function(){
  $(this).closest('.quote-container').fadeOut(500, function(){ $(this).remove();});
});


$('.output').on('mouseenter', '.quote-container', function(){
  $(this)
});

$('.output').on('click', '.quote-container', function(){
  $('.output').find('.featured').css('display', 'none');
  $(this).find('.featured').toggle();
});



 



// 








});






  // <div class="quote-container">
  //       <div class="quote-text">My grandmother took me to church on Sunday all day long, every Sunday into the night. Then Monday evening was the missionary meeting. Tuesday evening was usher board meeting. Wednesday evening was prayer meeting. Thursday evening was visit the sick. Friday evening was choir practice. I mean, and at all those gatherings, we sang.</div>
  //       <div class="author-text">- Stanislaw J. Lec</div>
  //       <div><img class="remove-quote" src="images/remove.png"></div>
  //       <div><img class="quotation-mark" src="images/quotation.png"></div>
  //       <div class="rating-box">
  //         <div class="rating">
  //         <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
  //         </div>
  //       </div>
  //     </div>
