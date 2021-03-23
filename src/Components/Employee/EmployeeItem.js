import { Name } from "../../style";

import EmployeeDelete from "./DeleteButton";

const EmployeeItems = (props) => {
  const employee = props.employee;

  return (
    <>
      <Name>{employee.firstName}</Name>
      <EmployeeDelete emp={employee.id} />
    </>
  );
};

export default EmployeeItems;
