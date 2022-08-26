const newQuotes = [
    {
        quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        person: 'Albert Einstein'
    },
    {
        quote: '“So many books, so little time.”',
        person: 'Frank Zappa'
    },
    {
        quote: '“You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.”', 
        person: 'William W. Purkey'
    },
    {
        quote: '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
        person: 'Dr. Seuss'
    },
    {
        quote: '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
        person: 'C.S. Lewis'
    },
    {
        quote: '“I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
        person: 'Maya Angelou'
    },
    {
        quote: '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
        person: 'Martin Luther King'
    },
    {
        quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        person: 'Mahatma Gandhi'
    },
    {
        quote: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        person: 'Ralph Waldo Emerson'
    },
    {
        quote: '“Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”',
        person: 'Rob Siltanen'
    },
];

const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * newQuotes.length);
    quote.innerText = newQuotes[randomNumber].quote;
    person.innerText = '-  ' + newQuotes[randomNumber].person + '  -';
});