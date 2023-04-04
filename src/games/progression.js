import startGame from '../index.js';

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateProgression = () => {
  const diff = generateRandomNum(1, 6);
  const indexMissingNum = generateRandomNum(1, 10);
  const firstNum = generateRandomNum(1, 30);
  const progression = [];

  for (let i = firstNum; i < firstNum + diff * 10; i += diff) {
    progression.push(i);
  }

  const missingNum = String(progression[indexMissingNum]);
  progression[indexMissingNum] = '..';

  return [progression.join(' '), missingNum];
};

const startProgressionGame = () => {
  const rules = 'What number is missing in the progression';

  const getCorrectAnswer = () => {
    const [question, correctAnswer] = generateProgression();
    return [question, correctAnswer];
  };

  startGame(rules, getCorrectAnswer);
};

export default startProgressionGame;
