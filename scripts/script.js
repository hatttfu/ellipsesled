$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .nav__container').toggleClass('active')
        $('body').toggleClass('lock')
    })
    
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav__container').removeClass('active')
        $('body').toggleClass('lock')
    })
})

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };





$(document).ready(function($) {

    $("#phone3").click(function(){
        $(this).setCursorPosition(3);
      }).mask("7 (999) 999 99 99" , {
        placeholder: "7 (xxx) xxx xx xx"
    });

    $("#phone3").inputmask({removeMaskOnSubmit: true});

     $("#myForm").submit(function() {
        $("#phone3").unmask();
       });

});




