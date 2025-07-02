import Question from "./Home/Question";
import QuizSummery from "./Home/QuizSummery";
import { useAppSelector } from "./redux/hook";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div>
      <h1 className="font-bold text-center text-6xl my-12">Quiz App</h1>
      {!quizComplete ? <Question /> : <QuizSummery />}
    </div>
  );
}

export default App;
