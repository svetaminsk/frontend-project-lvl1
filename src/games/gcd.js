import { start, getRandomNumber } from '../index.js';

// eslint-disable-next-line consistent-return
const calc = (number1, number2) => {
  if (number1 > number2) {
    for (let i = number2; i > 0; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        return i;
      }
    }
  } else {
    for (let i = number1; i > 0; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        return i;
      }
    }
  }
};

const description = 'Find the greatest common divisor of given numbers.';

const data = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const answer = `${calc(number1, number2)}`;
  return { question, answer };
};

export default () => start(description, data);
