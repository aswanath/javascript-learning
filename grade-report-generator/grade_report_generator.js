function getLetterGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
}

function hasPassed(score) {
  return score >= 60;
}

function getFeedback(grade) {
  const feedBacks = {
    A: "Excellent Work",
    B: "Great Work",
    C: "You Passed",
    D: "You Passed",
    F: "Keep Practising",
  };
  return feedBacks[grade];
}

function createGradeReport(name, score) {
  const grade = getLetterGrade(score);
  const passed = hasPassed(score);
  const feedback = getFeedback(grade);

  return {
    name: name,
    score: score,
    grade: grade,
    passed: passed,
    feedback: feedback,
  };
}

console.log(createGradeReport("Ava", 92));
console.log(createGradeReport("Noah", 48));
console.log(createGradeReport("Mina", 75));
console.log(createGradeReport("Sam", 60));
