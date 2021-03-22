import { useState } from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  const [query, setQuery] = useState("");
  const employeeList = employeeStore.employees
    .filter((employee) => employee.firstName.includes(query))
    .map((employee) => <EmployeeItem>employee</EmployeeItem>);
  return <>employeeList</>;
};

export default EmployeeList;
