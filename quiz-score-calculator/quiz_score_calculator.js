function isAnswerCorrect(question, userAnswer) {
  if (question.id !== userAnswer.id) return false;
  return question.correctAnswer === userAnswer.answer;
}

function countCorrectAnswers(questions, userAnswers) {
  let correctAnswersCount = 0;
  userAnswers.forEach((userAnswer) => {
    const question = questions.find(
      (question) => question.id === userAnswer.questionId
    );
    if (isAnswerCorrect(question, userAnswer)) {
      correctAnswersCount++;
    }
  });
  return correctAnswersCount;
}

function calculatePercentage(correctCount, totalQuestions) {
  return (correctCount * 100) / totalQuestions;
}

function getResultMessage(percentage) {
  if (percentage >= 75) {
    return "Excellent Work";
  } else if (percentage >= 50) {
    return "You Passed";
  } else {
    return "Keep Practising";
  }
}

function createQuizResult(questions, userAnswers) {
  const correctCount = countCorrectAnswers(questions, userAnswers);
  const totalQuestions = questions.length;
  const percentage = calculatePercentage(correctCount, totalQuestions);
  const message = getResultMessage(percentage);
  return {
    correctCount,
    totalQuestions,
    percentage,
    message,
  };
}

const questions = [
  { id: 1, correctAnswer: "B" },
  { id: 2, correctAnswer: "A" },
  { id: 3, correctAnswer: "D" },
  { id: 4, correctAnswer: "C" },
];

const userAnswers = [
  { questionId: 1, answer: "B" },
  { questionId: 2, answer: "C" },
  { questionId: 3, answer: "D" },
  { questionId: 4, answer: "C" },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: "B" }];
console.log(createQuizResult(questions, partialAnswers));
