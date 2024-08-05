const a = document.querySelector('#num-a');
const b = document.querySelector('#num-b');
const enviar = document.querySelector('#enviar');


verificacao = b.addEventListener('keyup', function(e){
        const valorA = parseInt(a.value);
        const valorB = parseInt(b.value);
    
        if (valorB < valorA) {
            document.querySelector('.error').style.display ='block'   
            enviar.disabled = true;
        } else{
            document.querySelector('.error').style.display = 'none'
            enviar.disabled = false;
        }
});


enviar.addEventListener('click', verificacao);
enviar.addEventListener('submit', alert('Enviado'));

