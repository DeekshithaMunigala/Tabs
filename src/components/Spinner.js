import React from "react";

const Spinner = () => {
  return (
    <div className="w-9/12 p-5 mt-16 mx-auto flex items-start">
      <div className="border-4 border-t-4 border-t-[#14b8a6] border-gray-200 rounded-full w-20 h-20 animate-spin"></div>
    </div>
  );
};

export default Spinner;
