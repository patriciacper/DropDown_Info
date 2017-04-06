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
});

//Click Outside closes
//Click on Other closes
//Esc closes