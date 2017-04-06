$(document).ready(function () {
    
    $('h1').on('click', function() {
        console.log('It Works');
        $(this).siblings('.dropDown').first().toggleClass('showIt');
    });
    
});


//Click Outside closes
//Click on Other closes
//Esc closes