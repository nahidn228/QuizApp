import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hook";

function QuizSummery() {
  const { questions, userAnswer } = useAppSelector((state) => state.quiz);

  //calculate correct answer

  const correctAnswerCount = questions.reduce((count, questions, idx) => {
    return questions.correctAnswer === userAnswer[idx] ? count + 1 : count;
  });
  return (
    <div className="max-w-lg mx-auto p-6 shadow-xl rounded-xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Summery</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-medium mb-4 ">You Got 4 out of 10</h3>

          {/* Progress Bar */}
          <div className="mb-4">
            <Progress
              value={33}
              className="h-4 bg-gray-200 rounded-full overflow-hidden"
            />
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-sm">40%</span>
            <span className="text-sm">Performance: Good</span>
          </div>

          <div className="mb-4">
            <p className="text-sm">
              <strong>Incorrect Answer: </strong> 6
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
