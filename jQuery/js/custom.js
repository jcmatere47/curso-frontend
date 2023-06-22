// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');



   
    

    $('.featured-item:first h4').append('<span class="badge bg-success">Novo</span>')

    $('h4:eq(1)').append('<span class="badge bg-warning">Esgotado</span>')

    $('h4:eq(4)').append('<span class="badge bg-warning">Esgotado</span>')

    $('.categoria4').append('<span class="badge bg-info">Sapatos</span>')

    $('.categoria1').html('<span class="badge bg-info">Calças</span>')

    $('.categoria2').html('<span class="badge bg-info">Casacos</span>')

    $('.categoria3').html('<span class="badge bg-info">Bolsas</span>')

   
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').click( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a:eq(1)').on('click', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })

     $('.featured-item a:eq(4)').on('click', function(event){

      event.preventDefault();

      alert('Produto esgotado');

   })
     
     $('.featured-item a:eq(0)').on('click', function(event){

      event.preventDefault();

      alert('Produto em estoque');

   })
     
   $('.featured-item a:eq(2)').on('click', function(event){

      event.preventDefault();

      alert('Produto em estoque');

   })
     
   $('.featured-item a:eq(3)').on('click', function(event){

      event.preventDefault();

      alert('Produto em estoque');

   })
     






})
