import employeeStore from "./Store/HResource";
import { observer } from "mobx-react";
import { Name } from "../../style";

const EmployeeItems = (props) => {
  const employee = props.employee;
  return <Name>{employee.employeeStore.employee[0].firstName}</Name>;
};

export default observer(EmployeeItems);
