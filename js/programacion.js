    $(function(){
        $(".box-a").typed({
            // Waits 1000ms after typing "First"
          stringsElement: $('#typed-strings'),
          contentType: 'html',
          loop:true,
          showCursor:true,
          cursorChar:"|",
          // typing speed
          typeSpeed: 130,
          backSpeed:50
        });
    });


