(function(){
  var style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.href = 'widget.css';
  // style.href = 'widget.css';

  document.querySelector('head').appendChild(style);
  var container = document.querySelector('#useless-widget');
  var author = container.getAttribute('data-author');
  var url = container.getAttribute('data-href');


  var html = 
  '<a id="useless-logo" href="http://uselesspress.org"><img src="uselesslogo.png"></a>' + 
  '<div id="useless-content">' + 
  '  <p>A thing by <span id="useless-author"></span></p>' + 
  '  <p><a id="useless-link" href="#">Read about it</a></p>' + 
  '</div>';

  container.innerHTML = html;
  document.querySelector('#useless-author').textContent = author;
  document.querySelector('#useless-link').href = url;
})();
