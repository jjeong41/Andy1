import Navigation from "@/app/_components/navigation/Navigation";
import BackgroundSVG from "@/app/_components/background/Background";
import Chalkak from '@/app/asset/lottie/Chalkak_quiz.json'
import Ddalkak from '@/app/asset/lottie/Ddalkak_quiz.json'
import Tryagin from '@/app/asset/lottie/Tryagain_quiz.json'
import { Wrapper } from "./styles/Page.styled";
import QuizButton from "./_components/QuizButton";

const btnData = [
  {
    quizName: "찰칵 퀴즈",
    quizImg: Chalkak,
    quizRoute: "quiz1",
  },
  {
    quizName: "딸깍 퀴즈",
    quizImg: Ddalkak,
    quizRoute: "quiz2",
  },
  {
    quizName: "다시 풀기",
    quizImg: Tryagin,
    quizRoute: "incorrect_list",
  },
];

export default function MainQuiz() {
  return (
    <div className="flex flex-col h-svh w-full justify-center items-center">
      <BackgroundSVG />
      <Navigation />
      <Wrapper>
        {btnData.map((btn) => (
          <QuizButton
            key={btn.quizName}
            quizName={btn.quizName}
            quizImg={btn.quizImg}
            quizRoute={btn.quizRoute}
          />
        ))}
      </Wrapper>
    </div>
  );
}
