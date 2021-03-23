import { Name } from "../../style";

const DepartmentItems = (props) => {
  const department = props.department;
  return <Name>{department.name}</Name>;
};

export default DepartmentItems;
