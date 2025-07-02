import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useAppSelector } from "@/redux/hook";
import * as Progress from "@radix-ui/react-progress";

const getPerformance = (percentage: number) => {
  if (percentage >= 90) {
    return {
      rating: "Excellent",
      color: "bg-green-800",
    };
  } else if (percentage >= 50) {
    return {
      rating: "Good",
      color: "bg-yellow-500",
    };
  } else if (percentage >= 30) {
    return {
      rating: "Need Improvements",
      color: "bg-orange-500",
    };
  } else {
    return {
      rating: "Poor",
      color: "bg-red-500",
    };
  }
};

function QuizSummery() {
  const { questions, userAnswer } = useAppSelector((state) => state.quiz);

  //calculate correct answer

  const correctAnswerCount = questions.reduce((count, questions, idx) => {
    return questions.correctAnswer === userAnswer[idx] ? count + 1 : count;
  }, 0);

  const incorrectAnswer = questions.length - correctAnswerCount;
  const correctPercentage = parseFloat(
    ((correctAnswerCount / questions.length) * 100).toFixed(2)
  );

  const { color, rating } = getPerformance(correctPercentage);

  return (
    <div className="max-w-lg mx-auto p-6 shadow-xl rounded-xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Summery</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-medium mb-4 ">
            You Got {correctAnswerCount} out of {questions.length}{" "}
          </h3>

          {/* Progress Bar */}
          <div className="mb-4">
            <Progress.Root
              className="h-4 bg-gray-200 rounded-full overflow-hidden"
              value={correctPercentage}
            >
              <Progress.Indicator
                className={`h-full transition-all duration-300 ${color}`}
                style={{ width: `${correctPercentage}%` }}
              />
            </Progress.Root>
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-sm"> {correctPercentage} % </span>
            <span className="text-sm">Performance: {rating} </span>
          </div>

          <div className="mb-4">
            <p className="text-sm">
              <strong>Incorrect Answer: </strong> {incorrectAnswer}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm">Great Job! Keep practicing</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizSummery;
