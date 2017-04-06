$(document).ready(function () {
    
    $('h1').on('click', function() {
        console.log('It Works');
        
        if ($(this).next().hasClass('showIt')) {
            $('div').removeClass('showIt');
//            $('div').addClass('dropDown');
            
        } else {
            $('.showIt').removeClass('showIt');
            $(this).next('.dropDown').addClass('showIt'); 
        }
        
    });
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            $('div').removeClass('showIt');
        }
    });
});

//Click Outside closes
//Esc closes