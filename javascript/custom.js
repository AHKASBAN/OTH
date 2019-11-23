
$(function(){
  'use strict';
  $("#carouselTicker_ltr").carouselTicker({


    speed: 3,
    
    delay: 30,
    

    reverse: true
    
    });
    $("#carouselTicker_ltr2").carouselTicker({


      speed: 3,
      
      delay: 30,
      
  
      reverse: true
      
      });
    $("#carouselTicker_rtl").carouselTicker({


      speed: 3,
      
      delay: 30,
      "direction": "next",
      
  
      reverse: false
      
      });
    
  
});
