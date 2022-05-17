const hb = document.querySelector('#hb-menu');
const header = document.querySelector('.header');
const fades = document.querySelectorAll('.has-fade');
const body = document.querySelector('body')

hb.addEventListener('click', function(){
    
    if(header.classList.contains('open')){
        body.classList.remove('static')
        header.classList.remove('open');
        fades.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });


    }
    else{
        body.classList.add('static')
        header.classList.add('open');
        fades.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});