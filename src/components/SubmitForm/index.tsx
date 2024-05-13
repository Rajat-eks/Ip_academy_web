import React from "react";
import { FcApproval } from "react-icons/fc";
const SubmitForm = ({ isOpen }: any) => {
  const handleClose = () => {
    isOpen(false);
  };
  return (
    <div
      onClick={(e) => handleClose()}
      id="wrapper"
      className=" w-full  p-6 bg-transparent bg-black backdrop:blur-sm bg-opacity-5 fixed inset-0 z-[200] flex justify-center items-center "
    >
      <div className="bg-white w-[33vw] rounded border-[1px] border-gray-600 text-gray-900 p-4 py-10">
        <div className="flex justify-center py-2">
          <FcApproval size={100} />
        </div>
        <p className="text-justify pt-3 text-[16px] font-normal">
          <h2 className=" font-semibold text-[18px] text-center">
            Test submitted! Thanks for your participation.
          </h2>
        </p>

        {/* <div className="flex flex-row-reverse">
          <button className="text-customBlue border-[1px] border-customBlue px-6 rounded py-[6px] shadow-md hover:text-blue-600 hover:bg-customBlue">
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SubmitForm;
