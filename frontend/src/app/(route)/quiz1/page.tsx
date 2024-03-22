"use client";

import React, { useEffect, useState } from "react";
import Timer from "@/app/_components/timer";
import CorrectModal from "@/app/_components/modal_correct";
import WrongModal from "@/app/_components/modal_wrong";
import ProgressBar from "@/app/_components/ProgressBar";
import { useGameResultMutation } from "@/app/hooks/useGameA";
import storeProfile from "@/app/_store/storeProfile";
import Word1 from "./_components/word1";
import Camera from "./_components/camera";

import { Wrapper, Wrapper2, Title, Explain } from "./styles/page.styled";

const mockQuizData = {
  data: [
    {
      question_seq: 1,
      question_name: "사과",
      question_picture: "사과 이미지",
    },
    {
      question_seq: 3,
      question_name: "배",
      question_picture: "배 이미지",
    },
    {
      question_seq: 523,
      question_name: "포도",
      question_picture: "포도 이미지",
    },
    {
      question_seq: 33,
      question_name: "참외",
      question_picture: "참외 이미지",
    },
    {
      question_seq: 87,
      question_name: "키위",
      question_picture: "키위 이미지",
    },
  ],
};
// const mockQuizData = [{}];

interface IQuizData {
  question_seq: number;
  question_history_is_ok: boolean;
}

function Quiz1Page() {
  const { data } = mockQuizData;
  const { profile } = storeProfile();
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const numProblems: number = data.length;
  const [status, setStatus] = useState<IQuizData[]>([]);
  const [currentSeq, setCurrentSeq] = useState(0);
  const [isTrue, setIsTrue] = useState<boolean>();
  const { mutate } = useGameResultMutation();

  useEffect(() => {
    if (isTrue !== undefined) {
      setStatus([
        ...status,
        {
          question_seq: data[currentSeq].question_seq,
          question_history_is_ok: isTrue,
        },
      ]);
      setCurrentSeq(currentSeq + 1);
      setIsCorrectModalOpen(true);
    }
    setIsTrue(undefined);
  }, [isTrue]);

  useEffect(() => {
    if (currentSeq >= numProblems) {
      const req = {
        child_seq: profile.child_seq,
        question_category_seq: 123,
        mode: "A",
        questions: status,
      };
      mutate(req, {
        onSuccess: (newData) => {
          // eslint-disable-next-line no-console
          console.log(newData);
        },
      });
    }
  }, [currentSeq]);

  const handleIsTrue = (stat: boolean) => {
    setIsTrue(stat);
  };

  const handleCorrectAnswer = () => {
    setIsCorrectModalOpen(true);
  };

  const handleCloseCorrectModal = () => {
    setIsCorrectModalOpen(false);
  };

  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);

  const handleWrongAnswer = () => {
    setIsWrongModalOpen(true);
  };

  const handleCloseWrongModal = () => {
    setIsWrongModalOpen(false);
  };

  return (
    <Wrapper>
      <Wrapper2>
        <ProgressBar max={numProblems} value={status.length} />
        <progress className="w-full " value="63" max="100" />
        <div className="flex w-full items-center">
          <div className="flex-grow text-center">
            <Title>ROUND 1</Title>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <Explain>단어에 해당하는 물체/대상을 찾아주세요!</Explain>
        <div className="flex justify-center gap-20">
          <Word1 />
          <Camera
            setIsTrue={handleIsTrue}
            input={data[currentSeq].question_name}
          />
        </div>
      </Wrapper2>
      {/* 조건에 따라서 정답 맞추면 정답 모달/ 틀리면 오답 모달 */}
      <button onClick={handleCorrectAnswer} type="button">
        Show Correct Modal
      </button>
      <CorrectModal
        isOpen={isCorrectModalOpen}
        onClose={handleCloseCorrectModal}
      />

      <button onClick={handleWrongAnswer} type="button">
        Show Wrong Modal
      </button>
      <WrongModal isOpen={isWrongModalOpen} onClose={handleCloseWrongModal} />
    </Wrapper>
  );
}

export default Quiz1Page;
