import React, { useState } from "react";
import BgImage from "../../assets/logo/bg-image.jpg";
import Student from "../../assets/logo/student.svg";
import EffectualLogo from "../../assets/img/effectual-logo.png";
import { registerStudent } from "../../services/user";
import { toast } from "react-toastify";
import { FaAnglesRight } from "react-icons/fa6";
import Terms from "../Terms";

const UserDetail = ({ setStep }: any) => {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    phone: "+91",
    college: "",
  });
  const [term, setTerm] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        name: userDetail?.name,
        email: userDetail?.email,
        phone: userDetail?.phone,
        collegeName: userDetail?.college,
      };
      const result = await registerStudent(payload);
      if (result?.status == true && result?.access_token) {
        localStorage.setItem("access_token", result?.access_token);
        localStorage.setItem(
          "student_Name",
          JSON.stringify(result?.data?.name)
        );
        toast.success(result?.message);
        setStep(2);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong! Try Again.");
    }
    setUserDetail({
      name: "",
      email: "",
      phone: "",
      college: "",
    });
  };

  return (
    <main
      className="grid sm:grid-cols-2 h-screen w-full bg-cover bg-center overflow-hidden py-1 "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <section className="  flex flex-col    sm:justify-between items-center sm:items-start">
        <div className=" flex p-1">
          <img
            src={EffectualLogo}
            alt="logo"
            className="text-center h-14 rounded"
          />
        </div>
        <img src={Student} alt="student" className="hidden sm:block w-[70%]" />
      </section>
      <section className=" flex items-center justify-center text-white  ">
        <div className="sm:w-[35vw]   rounded-2xl sm:py-4 shadow-lg bg-[#146FCA]">
          <h1 className="text-center font-semibold text-2xl ">IP Academy</h1>
          <h2 className="text-center font-semibold text-2xl  pt-3">
            Student Registeration Form
          </h2>
          <p className="text-center font-light text-sm text-gray-200  pt-3">
            Fill your Details!
          </p>
          <form action="" onSubmit={submitHandler}>
            <div className="grid grid-cols-1 py-6 px-10 gap-6">
              <div>
                <label htmlFor="" className="p-1">
                  Name<span className="text-red-600 font-bold text-xl">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  required
                  id=""
                  value={userDetail?.name}
                  onChange={(e) =>
                    setUserDetail({ ...userDetail, name: e.target.value })
                  }
                  className="border-[1px] rounded-md bg-transparent p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="px-1">
                  Email<span className="text-red-600 font-bold text-xl">*</span>
                </label>
                <input
                  type="email"
                  name=""
                  required
                  id=""
                  value={userDetail?.email}
                  onChange={(e) =>
                    setUserDetail({ ...userDetail, email: e.target.value })
                  }
                  className="border-[1px] rounded-md bg-transparent p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="px-1">
                  Phone<span className="text-red-600 font-bold text-xl">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  required
                  id=""
                  value={userDetail?.phone}
                  onChange={(e) =>
                    setUserDetail({ ...userDetail, phone: e.target.value })
                  }
                  className="border-[1px] rounded-md bg-transparent p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="" className="px-1">
                  College Name
                  <span className="text-red-600 font-bold text-xl">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  required
                  id=""
                  value={userDetail?.college}
                  max={10}
                  onChange={(e) =>
                    setUserDetail({ ...userDetail, college: e.target.value })
                  }
                  className="border-[1px] rounded-md bg-transparent p-2 w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" required id="" className="" />
                <label htmlFor="" className="pb-1 text-sm">
                  I accept{" "}
                  <span
                    onClick={() => setTerm(true)}
                    className="text-red-600 cursor-pointer"
                  >
                    terms & condition.
                  </span>
                </label>
              </div>
            </div>
            <div className="px-10">
              <button
                type="submit"
                className="  bg-[#CF9E1E] text-white rounded-2xl py-[8px] w-full px-10 flex items-center justify-center gap-6"
              >
                Go to Test <FaAnglesRight />
              </button>
            </div>
          </form>
        </div>
      </section>
      {term && <Terms isOpen={setTerm} />}
    </main>
  );
};

export default UserDetail;
