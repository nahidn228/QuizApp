import { Card } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/Api/quizApi";
import { setQuiz } from "@/redux/features/counter/quizSlice";
import { useAppDispatch } from "@/redux/hook";

interface IQuiz {
  id: number;
  title: string;
  description: string;
}

const AllQuiz = () => {
  const dispatch = useAppDispatch();
  const { data: quizzes, isLoading } = useGetAllQuizQuery(undefined);
  console.log({ quizzes, isLoading });

  if (isLoading) return <div>Loading...</div>;

  const handleSetQuiz = (data) => {
    console.log(data);
    dispatch(setQuiz(data.questions));
  };
  return (
    <div className="grid grid-cols-6 gap-4">
      {quizzes.map((quiz: IQuiz) => (
        <Card
          key={quiz.id}
          className="cursor-pointer"
          onClick={() => handleSetQuiz(quiz)}
        >
          <h3>{quiz.title}</h3>
          <h3>{quiz.description}</h3>
        </Card>
      ))}
    </div>
  );
};

export default AllQuiz;
