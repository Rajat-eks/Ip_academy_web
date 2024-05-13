import React from "react";

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
      <div className="bg-white w-[33vw] rounded border-[1px] border-gray-600 text-gray-900 p-4">
        <h2 className="border-b-[1px] font-semibold text-[20px]">
          Terms and Conditions
        </h2>
        <p className="text-justify pt-3 text-[16px] font-normal">
          <h2 className="font-semibold text-black ">1. Test Duration</h2>
          <p>
            - This test will be valid for a duration of 20 minutes from the
            start time.
          </p>
          <p>
            - Participants must complete the test within the specified duration.
            Any answers submitted after the expiration of the 20-minute period
            will not be considered.
          </p>
        </p>

        <div className="flex flex-row-reverse">
          <button className="text-customBlue border-[1px] border-customBlue px-6 rounded py-[6px] shadow-md hover:text-blue-600 hover:bg-customBlue">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
