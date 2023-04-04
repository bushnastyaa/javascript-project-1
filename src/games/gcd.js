import startGame from '../index.js';
import generateRandomNum from '../getRandomNum.js';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const startCalcGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const getCorrectAnswer = () => {
    const firstNum = generateRandomNum(100);
    const secondNum = generateRandomNum(100);
    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = String(getGcd(firstNum, secondNum));
    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startCalcGame;
