const BtnContainer = ({ jobs, currItem, setCurrItem }) => {
  return (
    <div className="flex flex-wrap flex-col mr-12">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrItem(index)}
            className={
              index === currItem
                ? " w-52 flex items-start justify-center text-sm mb-[16px] font-normal tracking-widest text-[#14b8a6]"
                : " w-52 flex items-start justify-center text-sm mb-[16px] font-normal tracking-widest text-[#0f172a]"
            }
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
