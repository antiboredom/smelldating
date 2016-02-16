if (window.location.protocol != "https:" && window.location.href.indexOf('localhost') === -1)
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);

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

  var vid = 'https://saaaam.s3.amazonaws.com/smell/nose' + (Math.floor(Math.random()*4) + 1) + '.mp4';
  $('video').attr('src', vid);
});
