import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControl from "./QuizControl";
import { setAnswer } from "@/redux/features/counter/quizeSlice";

const Question = () => {
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswerChange = (ans: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuestionIndex,
        answer: ans,
      })
    );
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">{`Question ${
            currentQuestionIndex + 1
          } of ${questions.length}`}</p>
          <div>
            {currentQuestion.options.map((option, idx) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
                className="w-full mt-3"
                size={"lg"}
                key={idx}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <QuizControl></QuizControl>
      </Card>
    </div>
  );
};

export default Question;
