import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "../../assets/img/effectual-logo.png";
import { toast } from "react-toastify";
import { submitTest } from "../../services/exam";

const Header = ({ setStep, result, setResult }: any) => {
  const [seconds, setSeconds] = useState(20 * 60);
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId); // Stop the timer
          if (!apiCalled) {
            // Check if API hasn't been called yet
            setApiCalled(true); // Set apiCalled to true to prevent multiple API calls
          }
          return 0; // Ensure the timer doesn't go negative
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    automateAPI();
  }, [apiCalled]);

  const automateAPI = async () => {
    if (apiCalled == true) {
      try {
        let score = result?.filter(
          (item: any) => item.isCorrect === true
        ).length;

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
      } catch (error) {}
    }
  };

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  let student = localStorage.getItem("student_Name");
  student = student && JSON.parse(student);
  return (
    <nav className="w-screen bg-[#01091F] flex items-center  justify-between px-4">
      <div className="text-white text-[16px] font-semibold flex items-center h-[50px]">
        <img
          src={Logo}
          alt="logo"
          className="sm:h-full h-[70%] rounded-sm py-1"
        />
      </div>
      <div className=" text-[#03C6B5] text-xl">{formatTime(seconds)}</div>
      <div className="text-white flex items-center gap-2">
        <span>
          <FaRegCircleUser size={23} />
        </span>
        <h3 className="text-gray-400 font-semibold">{student}</h3>
      </div>
    </nav>
  );
};

export default Header;
