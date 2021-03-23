import { useState } from "react";
import JobItem from "./JobItem";
import jobStore from "../../Store/JobStore";
import { observer } from "mobx-react";

const JobList = () => {
  const [query, setQuery] = useState("");
  console.log(jobStore.jobs);
  const jobList = jobStore.jobs

    .filter((job) => job.jobTitle.includes(query))
    .map((job) => <JobItem job={job} />);
  return <>{jobList}</>;
};

export default observer(JobList);
