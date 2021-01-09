import { start, getRandomNumber } from '../index.js'

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const data = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => start(description, data);
