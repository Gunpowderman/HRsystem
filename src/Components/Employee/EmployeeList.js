import { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import employeeStore from "../../Store/HResource";
import { observer } from "mobx-react";

const EmployeeList = () => {
  const [query, setQuery] = useState("");
  console.log(employeeStore.employees);
  const employeeList = employeeStore.employees

    .filter((employee) => employee.firstName.includes(query))
    .map((employee) => <EmployeeItem employee={employee} />);
  return <>{employeeList}</>;
};

export default observer(EmployeeList);
