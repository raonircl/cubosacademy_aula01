$(document).ready(function() {
  $('.transition-image').fadeIn(1000, function() {
    setTimeout(function() {
      $('.black-screen').fadeOut(1000, function() {
        window.location.href = './indexGame.html';
      });
    }, 5000);
  });
});