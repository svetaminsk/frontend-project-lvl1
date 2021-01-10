import { start, getRandomNumber } from '../index.js'

const calc = (question) => {
  let arr = question.split(' ');
    switch (arr[1]) {
      case '+':
        return Math.round((+arr[0] + +arr[2]) * 100) / 100;
          break;
      case '-':
        return Math.round((+arr[0] - +arr[2]) * 100) / 100;
          break;
      case '*':
        return Math.round((+arr[0] * +arr[2]) * 100) / 100;
          break;
    }
};
  
const description = 'What is the result of the expression?';
let operation = '+-*'
const randomOperation = operation[getRandomNumber(0, 2)];
  
const data = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const question = `${number1} ${randomOperation} ${number2}`;
  const answer = `${calc(question)}`;
  return { question, answer };
};
export default () => start(description, data);