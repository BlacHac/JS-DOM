const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const symbol = document.querySelectorAll('.symbol');
const questionCard = document.querySelectorAll('.questionCard');

for(let a = 0; a < question.length; a++) {

    questionCard[a].addEventListener('click', function(){
        if(symbol[a].innerText === '+'){
            answer[a].style.display = 'block';
            symbol[a].innerText = "-"
            question[a].style.fontSize = '1rem';
        }else{
            answer[a].style.display = 'none';
            symbol[a].innerText = "+"
            question[a].style.fontSize = '1.3rem';
        }
    });
}

