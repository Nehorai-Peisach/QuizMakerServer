const CalculateScore = (studentAnswers, quiz) => {
  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const answersResults = [];

  quiz.questions.forEach((question) => {
    const studentAnswer = studentAnswers.find((x) => {
      if (x.question_id === question._id) return x;
    });

    if (studentAnswer === undefined) answersResults.push(0);
    else {
      const correctsAnswers = question.answers.filter((x) => x.is_correct === true);
      if (studentAnswer.answers.length === correctsAnswers.length) {
        let isAll = true;
        studentAnswer.answers.forEach((x) => {
          if (x.is_correct === false) isAll = false;
        });
        if (isAll) answersResults.push(100);
        else answersResults.push(0);
      } else answersResults.push(0);
    }
  });

  const result = Math.ceil(average(answersResults));

  return result;
};

module.exports = CalculateScore;
