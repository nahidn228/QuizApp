import { Button } from "@/components/ui/button";
import {
  nextQuestion,
  previousQuestion,
} from "@/redux/features/counter/quizeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControl() {
  const { currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );

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
  return (
    <div className="flex justify-between mt-1 mx-4">
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next </Button>
    </div>
  );
}
