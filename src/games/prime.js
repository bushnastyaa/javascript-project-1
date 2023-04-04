import startGame from '../index.js';
import generateRandomNum from '../getRandomNum.js';

const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }

  for (let div = 2; div <= Math.sqrt(num); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }

  return true;
};

const startPrimeGame = () => {
  const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

  const getCorrectAnswer = () => {
    const question = generateRandomNum(100);
    const correctAnswer = isPrimeNum(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startPrimeGame;
