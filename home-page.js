const body = document.body;
const btn = document.querySelector('.btn');
const item = document.querySelectorAll('.item');

btn.addEventListener('click', function(){
    for(let i=0; i<item.length; i++) {
        item[i].style.display = 'block' ;
    }
    btn.remove();
});