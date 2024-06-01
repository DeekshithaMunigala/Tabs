import { useEffect, useState } from "react";
import BtnContainer from "./BtnContainer";
import JobsInfo from "./JobsInfo";
import Spinner from "./Spinner";

const url = "https://www.course-api.com/react-tabs-project";

const Body = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currItem, setCurrItem] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setJobs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className=" w-9/12 p-5 mt-16 mx-auto flex flex-col  md:flex-row items-start ">
      <BtnContainer jobs={jobs} currItem={currItem} setCurrItem={setCurrItem} />
      <JobsInfo jobs={jobs} currItem={currItem} />
    </div>
  );
};

export default Body;
