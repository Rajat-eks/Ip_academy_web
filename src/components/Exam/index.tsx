import React, { useState } from "react";
import Question from "../Question";
import QuestionGraph from "../QuestionGraph";
import BgImage from "../../assets/logo/bg-image.jpg";
import { submitTest } from "../../services/exam/submitExam";
import { toast } from "react-toastify";
import SubmitForm from "../SubmitForm";

const question: any = [
  {
    question: "Which of the following is not a type of patent?",
    answers: ["Design", "Utility", "Plant", "Physical Phenomenon"],
    correct: "4",
  },
  {
    question:
      "Which of the following types of intellectual property is not protected by the law?",
    answers: ["Patent", "Copyright", "Trademark", "Trade secret"],
    correct: "4",
  },
  {
    question:
      "Which of the following is generally not eligible for patent protection?",
    answers: [
      "Novel inventions that are not obvious to someone skilled in the relevant field.",
      "Machines or processes that produce a useful result and are novel and non-obvious.",
      "Abstract ideas, laws of nature, and natural phenomena.",
      "Inventions that are disclosed to the public but have not yet been patented",
    ],
    correct: "3",
  },
  {
    question:
      "Which of the following is not a condition to be met for patent protection?",
    answers: [
      "Invention must have an element of novelty.",
      "Invention must be non-obvious.",
      "Invention must be patentable by law.",
      "Invention should have commercial value",
    ],
    correct: "4",
  },
  {
    question:
      "Choose the correct duration of utility patent protection from the following.",
    answers: ["10 Years", "30 Years", "20 Years", "15 Years"],
    correct: "3",
  },
  {
    question:
      "Which of the following best describes a claim in a patent application?",
    answers: [
      "A description of the inventor's qualifications and background",
      "A statement declaring the inventor's exclusive rights to the invention.",
      "A detailed explanation of how the invention works.",
      "A legal document filed with the patent office to establish ownership of the invention.",
    ],
    correct: "2",
  },
  {
    question:
      "Which of the following is true regarding software patentability?",
    answers: [
      "Software algorithms can be patented regardless of their novelty or non-obviousness.",
      "Software that merely implements an abstract idea without a specific technical application is typically not patentable.",
      "All software developed by a company automatically receives patent protection",
      "Software patentability is determined solely by the length of the code.",
    ],
    correct: "2",
  },
  {
    question:
      "Which statement accurately describes the patentability of AI-generated inventions?",
    answers: [
      "AI-generated inventions cannot be patented under any circumstances.",
      "AI-generated inventions are automatically eligible for patent protection.",
      "AI-generated inventions may be eligible for patent protection if they meet the criteria of novelty, non-obviousness, and utility.",
      "AI-generated inventions are subject to a different set of patentability criteria compared to human-generated inventions.",
    ],
    correct: "3",
  },
  {
    question: "Which of the following best describes a design patent?",
    answers: [
      "A patent that protects the functional aspects of an invention.",
      "A patent that protects the ornamental appearance or design of an object.",
      "A patent that protects the underlying algorithms and code of a software invention.",
      "A patent that protects the manufacturing process of a product.",
    ],
    correct: "2",
  },
  {
    question:
      "If a person uses someone’s song as background music in his/her music video that could be an example of?",
    answers: [
      "Copyright Infringement",
      "Identity Theft",
      "Hacking",
      "Cyber Bullying",
    ],
    correct: "1",
  },
  {
    question: "What is the term of copyright for an author of a book?",
    answers: [
      "100 Years",
      "The life of the author",
      "The life of the author plus 60 years",
      "The life of the author plus 50 years",
    ],
    correct: "3",
  },
  {
    question: "The role of the Trade Mark Registry is to:",
    answers: [
      "Register Trade Marks",
      "Notify the Trade Mark owner in case of infringement of his registered Trade Marks",
      "Adjudicate Trade Mark infringement proceedings",
      "All of the above",
    ],
    correct: "1",
  },
  {
    question: "Which of the following can be registered as a Trade Mark:",
    answers: [
      "Descriptive word (e.g., superior, pure, perfect, etc.)",
      "Word indicating a geographical origin",
      "Invented or coined word",
      "Used or proposed to be used mark",
      "All of the above",
      "Only 3 and 4",
    ],
    correct: "6",
  },
  {
    question: "Which of the following best describes a trade secret?",
    answers: [
      "Information that is publicly disclosed and protected by law.",
      "Information that is known to a select group of people but not generally known to the public.",
      "Information that is patented and made available to the public.",
      "Information that is freely shared among competitors in an industry.",
    ],
    correct: "2",
  },
  {
    question: "What is meant by the term “licensing a patent”?",
    answers: [
      "Granting permission to another individual/organization to make, use, sell etc. the patented invention",
      "Obtaining rights to make, sell, use, etc. the patented invention.",
      "Obtaining formal protection for the invention from the court of law",
      "None of the above.",
    ],
    correct: "1",
  },
];
const Exam = ({ setStep, result, setResult }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [skip, setSkip] = useState<any>(0);
  const [currentAns, setCurrentAns] = useState(0);

  const nextHandler = async (correct: any, index: any) => {
    if (currentAns == 0) {
      setSkip((prevCount: any) => prevCount + 1);
    } else {
    }
    if (index + 1 != 15) {
      setCurrentQuestion((prev: any) => prev < 15 && prev + 1);
    } else {
      let score = result?.filter((item: any) => item.isCorrect === true).length;

      const payload = {
        score: String(score),
        result: result,
      };
      const response = await submitTest(payload);
      if (response?.status === true) {
        toast.success(response?.message);
        localStorage.clear();
        setStep(1);
      } else {
        toast.error("Submit Again!");
      }
    }
    setCurrentAns(0);
  };

  const prevHandler = (index: any) => {
    const current = result?.find((item: any) => item?.questionNum == index);
    setCurrentAns(Number(current?.answerNo));
    if (currentQuestion > 0) {
      setCurrentQuestion((prev: any) => prev - 1);
    }
  };

  const questionHandler = (
    question: any,
    questionNum: any,
    answerNo: any,
    content: any,
    correct: any
  ) => {
    setCurrentAns(Number(answerNo));

    const isExist = result?.find(
      (item: any) => item?.questionNum == questionNum
    );

    if (isExist) {
      const updatedResult = result?.filter(
        (item: any) => item?.questionNum != questionNum
      );
      const obj = {
        question: question,
        questionNum: questionNum,
        answerNo: answerNo,
        selectedAnswer: content,
        isCorrect: correct == answerNo,
      };
      console.log("obj", obj);
      setResult([...updatedResult, obj]);
    } else {
      const obj = {
        question: question,
        questionNum: questionNum,
        selectedAnswer: content,
        answerNo: answerNo,
        isCorrect: correct == answerNo,
      };
      setResult([...result, obj]);
    }
  };

  return (
    <main
      style={{ backgroundImage: `url(${BgImage})` }}
      className="sm:h-[92vh] h-[92vh] flex flex-col  bg-[#151C32]  text-white bg-cover bg-center"
    >
      <section className="flex sm:justify-between items-center p-3 gap-4 sm:p-10 sm:px-40">
        <h4 className="text-center">IP Academy</h4>
        <h4>Question: 15</h4>
        <h4>
          Answered: <b className="">{result.length}</b>
        </h4>

        <h4>
          Skipped: <b className="">{skip}</b>
        </h4>
      </section>
      <section className="flex items-center justify-center pt-10 sm:pt-0">
        {question?.map((item: any, index: any) => {
          return (
            index == currentQuestion && (
              <>
                {/* <QuestionGraph
                  questionCount={15}
                  currentQuestion={index}
                  setCurrentQuestion={setCurrentQuestion}
                /> */}

                <Question
                  index={index}
                  setResult={setResult}
                  result={result}
                  setSkip={setSkip}
                  item={item}
                  setCurrentQuestion={setCurrentQuestion}
                  nextHandler={nextHandler}
                  prevHandler={prevHandler}
                  currentAns={currentAns}
                  questionHandler={questionHandler}
                />
              </>
            )
          );
        })}
      </section>
    </main>
  );
};

export default Exam;
