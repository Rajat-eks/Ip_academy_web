import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Question = ({
  item: { question, answers, correct },
  setCurrentQuestion,
  index,
  result,
  setResult,
  setSkip,
  currentAns,
  setCurrentAns,
  nextHandler,
  prevHandler,
  questionHandler,
}: any) => {
  console.log(correct, "correct");
  return (
    <section className="bg-[#116BC5] sm:w-[80vw] w-[70vw] px-4 pt-8 pb-8 rounded-lg">
      <h2 className=" sm:text-lg text-[15px] font-medium">
        {index + 1}. {question}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 px-10 ">
        {answers?.map((content: string, i: any) => {
          return i + 1 !== currentAns ? (
            <span
              onClick={() =>
                questionHandler(question, index + 1, i + 1, content, correct)
              }
              className="border-[1px] border-rounded sm:w-[350px]     rounded text-[13px] sm:text-[18px] p-2 flex items-center gap-2 cursor-pointer hover:border-[#03D3BF] hover:text-[#03D3BF]"
            >
              <h1 className=" flex items-center justify-center px-2">
                {i + 1}
              </h1>
              <h2>{content}</h2>
            </span>
          ) : (
            <span
              onClick={() =>
                questionHandler(question, index + 1, i + 1, content, correct)
              }
              className="border-[1px] border-rounded w-[350px]   rounded text-[18px] p-2 flex items-center gap-2 cursor-pointer border-[#03D3BF] text-[#03D3BF]"
            >
              <h1 className="flex items-center justify-center px-2">{i + 1}</h1>
              <h2>{content}</h2>
            </span>
          );
        })}
      </div>
      <div className="flex flex-row-reverse gap-6 pt-10">
        <button
          onClick={() => nextHandler(correct, index)}
          className="border-2   font-medium w-28 p-2 rounded text-[#03D3BF] border-[#03D3BF] flex justify-center items-center gap-2"
        >
          {index + 1 != 15 ? `Next ` : `Submit`}
          <GrNext />{" "}
        </button>
        <button
          onClick={() => prevHandler(index)}
          className="border-2 border-[#03D3BF] text-[#03D3BF] font-medium w-28 p-2  rounded flex items-center gap-2"
        >
          {" "}
          <GrPrevious /> Previous
        </button>
      </div>
    </section>
  );
};

export default Question;
