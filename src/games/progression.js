import { start, getRandomNumber } from '../index.js';

const calc = (number1) => {
  const array = [];
  array[0] = number1;
  const next = getRandomNumber(1, 10);
  for (let i = 0; i < 9; i += 1) {
    array.push(array[0 + i] + next);
  } return array;
};

const description = 'What number is missing in the progression?';

const data = () => {
  const number1 = getRandomNumber(0, 100);
  const fullArray = calc(number1);
  const removeNumber = getRandomNumber(0, 9);
  const missingNumber = fullArray.splice(removeNumber, 1, '..');
  const question = `${fullArray}`;
  const answer = `${missingNumber}`;
  return { question, answer };
};

export default () => start(description, data);
