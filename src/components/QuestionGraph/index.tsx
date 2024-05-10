import React, { useState } from "react";

const QuestionGraph = ({
  questionCount,
  currentQuestion,
  setCurrentQuestion,
}: any) => {
  const numbers = Array.from(
    { length: questionCount },
    (_, index) => index + 1
  );
  const [count, setCount] = useState(numbers);
  return (
    <main className="bg-[#01091F] text gray-400 p-4 w-[25vw] h-[60vh] rounded-lg">
      <h2 className="font-medium text-lg">Questions</h2>
      <div className="grid grid-cols-5 gap-4 py-4 text-gray-400">
        {count?.map((_, index) => {
          return index !== currentQuestion ? (
            <span
              onClick={() => setCurrentQuestion(index)}
              className="h-8 w-8 rounded-full border-2 border-red-600 flex justify-center items-center text-[18px] cursor-pointer"
            >
              {index + 1}
            </span>
          ) : (
            <span className="h-8 w-8 rounded-full border-2 border-blue-600 flex justify-center items-center text-[18px] cursor-pointer">
              {index + 1}
            </span>
          );
        })}
      </div>
    </main>
  );
};

export default QuestionGraph;
