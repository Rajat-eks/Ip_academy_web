import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Exam from "./components/Exam";
import Header from "./components/Header";
import UserDetail from "./components/UserDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitForm from "./components/SubmitForm";

function App() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<any>([]);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setStep(2);
    }
  }, []);

  
  return (
    <div>
      <ToastContainer />
      {step == 1 ? (
        <UserDetail setStep={setStep} />
      ) : (
        <>
          <Header setStep={setStep} result={result} setResult={setResult} />
          <Exam
            setStep={setStep}
            result={result}
            setResult={setResult}
            setIsSubmit={setIsSubmit}
          />
        </>
      )}
      {isSubmit && <SubmitForm isOpen={setIsSubmit} />}
    </div>
  );
}

export default App;
