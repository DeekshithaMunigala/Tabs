import React from "react";
import Duties from "./Duties";

const JobsInfo = ({ jobs, currItem }) => {
  const { title, company, dates, duties } = jobs[currItem];

  return (
    <div>
      <h3 className=" text-3xl tracking-wider mb-[12px] text-[#0f172a]">
        {title}
      </h3>
      <span className="px-[12px] py-[6px] bg-[#C8D5E1] rounded text-[#334155]">
        {company}
      </span>
      <p className="mt-[12px] mb-[32px] text-[#64748B] text-[16px] tracking-widest">
        {dates}
      </p>
      <Duties duties={duties} />
    </div>
  );
};

export default JobsInfo;
