import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/counter/quizSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControl() {
  const { questions, currentQuestionIndex, userAnswer, quizComplete } =
    useAppSelector((state) => state.quiz);

  const isSelectedAnswer = userAnswer[currentQuestionIndex] !== null;

  const dispatch = useAppDispatch();
  const handleNext = () => {
    if (isSelectedAnswer) {
      dispatch(nextQuestion());
    }
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  // Handle the "Complete Quiz" button click
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };

  const isCompleteEnabled =
    isSelectedAnswer || currentQuestionIndex !== questions.length - 1;

  return (
    <div className="flex justify-between mt-1 mx-4">
      <Button onClick={handlePrevious}>Previous</Button>

      {currentQuestionIndex < questions.length - 1 && !quizComplete && (
        <Button onClick={handleNext} disabled={!isSelectedAnswer}>
          Next
        </Button>
      )}

      {/* Complete Quiz Button */}
      {currentQuestionIndex === questions.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
}
