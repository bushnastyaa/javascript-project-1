import startGame from '../index.js';
import generateRandomNum from '../getRandomNum.js';

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default:
      return operand1 * operand2;
  }
};

const startCalcGame = () => {
  const rules = 'What is the result of the expression?';

  const getCorrectAnswer = () => {
    const operators = ['+', '-', '*'];
    const operator = operators[generateRandomNum(2)];
    const firstNum = generateRandomNum(100);
    const secondNum = generateRandomNum(100);

    const question = `${firstNum} ${operator} ${secondNum}`;
    const correctAnswer = String(calculate(firstNum, secondNum, operator));
    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startCalcGame;
