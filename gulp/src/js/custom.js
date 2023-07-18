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
       
  
     /*
     / Callbacks
     / entendendo ações que começam ao término de outra
     
     $('.featured-item:nth(1)')
        .hide(2000, function(){
           // este é o callback
        console.log( $(this).find('h4').text() + 'esgotado' )
  
     })
  
     .show(2000, function() {
        console.log($ (this).find('h4').text() + 'em estoque')
     })
     */ 
  
     /*
     / Animações
     /
     $('.featured-item:nth(0)')
     .hide(1000)
     .show(1000)
     .fadeOut(1000)
     .fadeIn(1000)
     .toggle(1000)
     .toggle(1000)
     */
        
        // $('#form-submit').on('click', function(e){
        //   e.preventDefault()
  
        //  if($('#email').val().length < 1){
        //     $('#email').animate({
        //        'border': '2px solid #f00'
        //     })
        //  }
        //});
  
     $('.nav-modal-open').on('click', function(e) {
  
     e.preventDefault();
  
     let elem = $(this).attr('rel')
  
     $('.modal-body').html($('#' +elem).html())
     $('.modal-header h5.modal-title').html($(this).text())
  
     let myModal = new bootstrap.Modal($('#modalId'))
  
     myModal.show()
  
     })
  
     $('#opener.nav-link').on('click', function(e)  {
        e.preventDefault()
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
     
        $( "#opener" ).on( "click", function() {
          $( "#dialog" ).dialog( "open" );
        });
      } );
  
      $(document).ready(function() {
        $('.footer-menu li.nav-item2 a').on('click', function(e) {
          e.preventDefault();
          $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
              duration: 1000
            },
            hide: {
              effect: "explode",
              duration: 1000
            }
          });
      
          $(this).on("click", function() {
            $( "#dialog" ).dialog( "open" );
          });
        });
      });
  
  
     $('body').on('submit', '.modal-body .form', function(e) {
  
        e.preventDefault()
  
        const inputName = $('#nome')
        const inputEmail = $('#email')
  
        validate(inputName)
        validate(inputEmail)
  
        if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
           console.log('verificar campos obrigatórios')
           return false
         } else {
           $(this).submit()
         }
        
  
     })
  
     function validate( elem ) {
        if ( elem.val() == '' || elem.val() == /^[a-zA-Z ]$/ || elem.val().length < 2) {
           console.log('o campo de '+ elem.attr('name') +  'é obrigatório')
  
           elem.parent().find('.text-muted').show()
  
           elem.addClass('invalid')
  
           return false
        }  else {
           elem.parent().find('.text-muted').hide()
           elem.removeClass('invalid')
        }
  
        
      if (elem.attr('name') === 'email') {
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValidation.test(elem.val())) {
            console.log('O campo ' + elem.attr('name') + ' deve ser um endereço de email válido.');
            elem.addClass('invalid');
            return false
           }  else {
              elem.removeClass('invalid')
           }
  
  
        }
        if (elem.attr('name') === 'cpf') {
           const CpfValidation = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
           if(!CpfValidation.test(elem.val())) {
              console.log('O campo' + elem.attr('name') + 'deve ser um CPF válido.');
              elem.addClass('invalid');
              return false 
  
              } else {
                 elem.removeClass('invalid')
              }
        
        }
  
    }
  
     $('body').on('blur', '#nome', function(){
        validate($(this))
     })
  
     $('body').on('blur', '#email', function(){
        validate($(this))
     })
  
     $('body').on('focus', '#date', function(){
        $(this).datepicker()
     })
  
     $('body').on('blur', '#date', function(){
        validate($(this))
        $('#date').mask('00/00/0000');
     })
  
     $('body').on('blur', '#time', function(){
        validate($(this))
        $('#time').mask('00:00');
     })
  
     $('body').on('blur', '#cep', function(){
        validate($(this))
        $('#cep').mask('00000-000');
     })
  
     $('body').on('blur', '#phone', function(){
        validate($(this))
        $('#phone').mask('00000-0000');
     })
  
     $('body').on('blur', '#cpf', function(){
        validate($(this))
        $('#cpf').mask('000.000.000-00');
     })
     
  
     })
  