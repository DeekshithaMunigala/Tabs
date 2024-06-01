import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();
        return (
          <div key={id} className="flex mb-[20px] items-center">
            <FaAngleDoubleRight className="text-[#14b8a6] text-[18px] mr-5 font-medium" />
            <p className="text-[#334155]">{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
