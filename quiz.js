const quizData =[
    {
        question:'What is the capital of Finland?',
        a: 'Zimbabwe',
        b: 'Oslo',
        c: 'Helsinki',
        d: 'Tallin',
        correct:'c'
    },
    
    {
        question:'Which five colours make up the Olympic rings?',
        a: 'Black, green, blue, yellow and red',
        b: 'Orange, yellow,purple and brown',
        c: 'Green, blue, pink and white',
        d: 'All of the above.',
        correct:'a'
    

    },
    
{
        question:'How many episodes of The Simpsons are there?',
        a: '720',
        b: '1738',
        c: '420',
        d: '728',
        correct: 'd'

},

{
        question:'What is the biggest animal in the world?',
        A: 'Tiger',
        B: 'Blue Whale',
        C: 'Great White Shark',
        D: 'Dinosaur',
        correct:'B'
},

{
        question:'How many valves does the heart have?',
        a: '2',
        b: '6',
        c: '8',
        d: '4',
        correct:'d'
},

{
        question:'Who painted the Mona Lisa?',
        a: 'Michaelangelo',
        b: 'Francisco Goya',
        c: 'Pablo Picasso',
        d: 'Leonardo da Vinci',
        correct:'d'
},
{
        question:'What social media app did Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams collectively create?',
        a: 'Facebook',
        b: 'WhatsApp',
        c: 'YouTube',
        d: 'Twitter',
        correct:'d'
},

{
        question:'What year was Google images invented, what prompted its creation?',
        A: 'July 2001, as a result of mass Google searches in February 2000 when Jennifer Lopez wore a jungle print dress',
        B: 'February 2002, Super Bowl XXXVI: The New England Patriots beat the St. Louis Rams 20-17 in New Orleans.',
        C: 'June 2007,Senator Barack Obama of Illinois declares his candidacy for President of the United States of America.',
        D: 'August 2015, Chinese govt decision to abandon a one-child policy in favor of a two-child policy,',
        correct:'A'
},

{
        question:'Who painted the Mona Lisa?',
        A: 'Michaelangelo',
        B: 'Francisco Goya',
        C: 'Pablo Picasso',
        D: 'Leonardo da Vinci',
        correct:'D'
},

{
        question:'Who painted the Mona Lisa?',
        A: 'Michaelangelo',
        B: 'Francisco Goya',
        C: 'Pablo Picasso',
        D: 'Leonardo da Vinci',
        correct:'D'
},

];

const questionEl= document.getElementById
('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn =document.getElementById 
('submit')

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText= currentQuizData.
    question;
    A_text.innerText= currentQuizData.a;
    B_text.innerText= currentQuizData.b;
    C_text.innerText= currentQuizData.c;
    D_text.innerText= currentQuizData.d;

    
}

submitBtn.addEventListener('click',()=> {

    currentQuiz++;

    if(currentQuiz <quizData.length) {
        loadQuiz();
    } else{
        alert('Congrats champ! Give yourself a pat on the back!')
    }

 
})