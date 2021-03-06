$(function(){
  $("#starter-text").typed({
    strings: ["THAT'S ME!! ^1055 VIEW MY PROFILE BELOW"], // ^{number} denotes time in ms to wait

    // typing speed
    typeSpeed: 70,
    
    // time before typing starts
    startDelay: 0,
    
    // backspacing speed
    backSpeed: 0,
    
    // time before backspacing
    backDelay: 50,
    
    // loop
    loop: false,
    
    // false = infinite
    loopCount: false,
    
    // show cursor
    showCursor: true,
    
    // character for cursor
    cursorChar: "",
    
    // attribute to type (null == text)
    attr: null,
    
    // either html or text
    contentType: 'html',
    
    // call when done callback function
    callback: function() {

       $('.resource').delay(500).fadeIn('slow');
      setTimeout (function () {
        $('#starter-text + .typed-cursor').css({'opacity': '0', 'animation': 'none'});
      }, 1300);

    },
    
    // starting callback function before each string
    preStringTyped: function() {},
    
    //callback for every typed string
    onStringTyped: function() {},
    
    // callback for reset
    resetCallback: function() {}
  });

  $("#thanks-text").typed({
    strings: ["THANKS!! SEE YOU AGAIN"], // ^{number} denotes time in ms to wait

    // typing speed
    typeSpeed: 70,
    
    // time before typing starts
    startDelay: 0,
    
    // backspacing speed
    backSpeed: 0,
    
    // time before backspacing
    backDelay: 50,
    
    // loop
    loop: false,
    
    // false = infinite
    loopCount: false,
    
    // show cursor
    showCursor: true,
    
    // character for cursor
    cursorChar: "",
    
    // attribute to type (null == text)
    attr: null,
    
    // either html or text
    contentType: 'html',
    
    // call when done callback function
    callback: function() {

       $('.resource').delay(500).fadeIn('slow');
      setTimeout (function () {
        $('#starter-text + .typed-cursor').css({'opacity': '0', 'animation': 'none'});
      }, 1300);

    },
    
    // starting callback function before each string
    preStringTyped: function() {},
    
    //callback for every typed string
    onStringTyped: function() {},
    
    // callback for reset
    resetCallback: function() {}
  });
});