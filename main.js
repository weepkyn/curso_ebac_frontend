$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

    
        let atividade = $('form input').val();
        let atividadeNaLista = $(`<li>${atividade}</li>`)

        $('#lista').append(atividadeNaLista);

        $('form input').val('');

        $('#lista').on('click', 'li', function(){
            $(this).css('text-decoration', 'line-through');
            $(this).css('color', 'green')
        })

    });
});



    


