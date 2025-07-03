import Question from "./Home/Question";
import QuizSummery from "./Home/QuizSummery";
import AddQuiz from "./Home/AddQuiz";
import { useAppSelector } from "./redux/hook";
import AllQuiz from "./Home/AllQuiz";

function App() {
  const { completeQuiz } = useAppSelector((state) => state.quiz);
  return (
    <div>
      <h1 className="font-bold text-center text-6xl my-12">Quiz App</h1>
      <div className="flex items-center justify-center">
        <AddQuiz />
      </div>
      <div className="max-w-screen mx-auto my-10">
        <AllQuiz />
      </div>
      {!completeQuiz ? <Question /> : <QuizSummery />}
    </div>
  );
}

export default App;
