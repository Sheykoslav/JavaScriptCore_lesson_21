$(document).ready(function(){
  $('#Schedule').accordion();

  $('#draggable').draggable();
  var i = 0;
  $('#droppable').droppable({
    over: function(event,ui){
      i++;
    },
    drop:function(){
      alert(i);
    }
  });
});
