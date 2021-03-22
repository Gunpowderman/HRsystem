import { Name } from "../../style";

const EmployeeItems = (props) => {
  const employee = props.employee;
  return <Name>{employee.firstName}</Name>;
};

export default EmployeeItems;
