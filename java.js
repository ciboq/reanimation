$(document).ready(function(){
  var currentMousePos = { x: -1, y: -1 };
  $('#mask1').mousemove(function(e) {
      currentMousePos.x = e.pageX;
      currentMousePos.y = e.pageY;
    
    $('#mask2').css('-webkit-mask-position-x', currentMousePos.x - 75);
    $('#mask2').css('-webkit-mask-position-y', currentMousePos.y - 75)
  });
});