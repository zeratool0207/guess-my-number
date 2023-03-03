 'use strict'

 /*
 console.log(document.querySelector('.message').textContent);

 document.querySelector('.message').textContent = `🎉🎉
 Correct Number!!`;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '😨 No number!';
    // When palyer wins
    } else if ( guess === secretNumber ) {
        document.querySelector('.message').textContent = `🎉🎉 Correct Number!!`;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    // When guess is too high
    } else if ( guess > secretNumber) {
        if ( score > 1) {
            document.querySelector('.message').textContent = `😢😢 Too high!!`;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `😱😱You Lost Game!!`;
            document.querySelector('.score').textContent = 0;
        }
    // When guess is too low
    } else if ( guess < secretNumber) {
        if ( score > 1) {
            document.querySelector('.message').textContent = `😢😢 Too Low!!`;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `😱😱You Lost Game!!`;
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    // again 버튼 클릭시 발생
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});