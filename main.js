$(document).ready(function() {
  var $root = $('html, body');
  $('nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500, function() {
      window.location.hash = href;
    });
    return false;
  });
});
