let Contador = 0;
/// ZOOM
jQuery(document).ready(function () {

    jQuery('#a_more').click(function () {

        if (Contador < 2) {
            $("span, p, a, h1, h2, h3, h4, h5, input").each(function (index) {
                fz = $(this).css('font-size').split('px')[0] * 1.1;
                let id = this.id;
                if (id == "a_less" || id == "a_more") {
                } else {
                    $(this).css('font-size', fz + 'px')

                }
            })

            Contador = Contador + 1;

        }
    })

    jQuery('#a_less').click(function () {
        if (Contador > 0) {
            $("span, p, a, h1, h2, h3, h4, h5, input").each(function (index) {
                fz = $(this).css('font-size').split('px')[0] * 0.9;
                let id = this.id;
                if (id == "a_less" || id == "a_more") {
                } else {
                    $(this).css('font-size', fz + 'px')

                }
            })
            Contador = Contador - 1;
        }
    })
    /*Alto contraste*/
    
    $('#high_contrast').click(function(){
      
        if($('html').hasClass('altoContraste')){
            $('html').removeClass('altoContraste');
          $(".navbar-default" ).removeClass( "navbar-inverse" );
        }
        else{
          $('html').addClass('altoContraste');
          $(".navbar-default" ).addClass( "navbar-inverse" );
        }
        
    });
})