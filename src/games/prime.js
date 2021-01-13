import { start, getRandomNumber } from '../index.js';

// eslint-disable-next-line consistent-return
const calc = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    } return true;
  }
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const data = () => {
  const number = getRandomNumber(0, 100);
  const question = `${number}`;
  const answer = calc(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => start(description, data);
