import { useState } from "react";
import EmployeeItem from "./EmployeeItem";
import employeeStore from "../../Store/EmployeeStore";
import { observer } from "mobx-react";
import Modal from "../Modal";

const EmployeeList = () => {
  const [query, setQuery] = useState("");
  console.log(employeeStore.employees);
  const employeeList = employeeStore.employees

    .filter((employee) => employee.firstName.includes(query))
    .map((employee) => <EmployeeItem employee={employee} />);

  return (
    <>
      {employeeList}
      <Modal />
    </>
  );
};

export default observer(EmployeeList);
