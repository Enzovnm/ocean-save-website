const hb = document.querySelector('#hb-menu');

hb.addEventListener('click', function(){
    
    if(hb.classList.contains('open')){
        hb.classList.remove('open');
    }
    else{
        hb.classList.add('open');
    }
});