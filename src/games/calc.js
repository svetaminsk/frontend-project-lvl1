import { start, getRandomNumber } from '../index.js';

// eslint-disable-next-line consistent-return
const calc = (question) => {
  const arr = question.split(' ');
  // eslint-disable-next-line default-case
  switch (arr[1]) {
    case '+':
      return Math.round((+arr[0] + +arr[2]) * 100) / 100;
    case '-':
      return Math.round((+arr[0] - +arr[2]) * 100) / 100;
    case '*':
      return Math.round((+arr[0] * +arr[2]) * 100) / 100;
  }
};
const description = 'What is the result of the expression?';
const operation = '+-*';
const randomOperation = operation[getRandomNumber(0, 2)];

const data = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const question = `${number1} ${randomOperation} ${number2}`;
  const answer = `${calc(question)}`;
  return { question, answer };
};
export default () => start(description, data);
