// jQuery function repsonsible for polyglot greeting on about page
$(document).ready(function(){
  rotation = [
    "beach houses & friends",
    "multihyphanite-wanderlust",
    "rip curls & flip-flops",
    "certified idea dealer",
    "engineer-as-a-service"
  ]

  var i = 0;

  setInterval(function(){
    $('#options').fadeOut(1000, function(){
      $(this).text(rotation[i++ % rotation.length]).fadeIn(1000);
    });
  }, 7000)
});