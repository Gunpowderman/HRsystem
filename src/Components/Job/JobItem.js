import { Name } from "../../style";

const JobItems = (props) => {
  const job = props.job;
  return <Name>{job.jobTitle}</Name>;
};

export default JobItems;
