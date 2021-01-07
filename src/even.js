import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const getRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const start = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomNumber();
    console.log(`Question: ${question}`);
    const answer = isEven(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer? ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
       console.log(`${userAnswer} is wrong answer ${name} ;(. Correct answer was ${answer}`);
       console.log('Let\'s try again');
       return;
    }
  }
  console.log(`Congratulations ${name}!`);
};

export default start;
