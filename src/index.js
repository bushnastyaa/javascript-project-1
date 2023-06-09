import readlineSync from 'readline-sync';

const startGame = (rules, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(rules);

  let win = true;

  for (let attempt = 3; attempt > 0; attempt -= 1) {
    const [question, correctAnswer] = getCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      attempt = 0;
      win = false;
    }
  }

  if (win) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startGame;
