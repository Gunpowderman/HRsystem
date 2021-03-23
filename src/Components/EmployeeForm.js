import { useState } from "react";
import styled from "styled-components";
import employeeStore from "../Store/EmployeeStore";

const M = styled.input`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const B = styled.button`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const EmployeeForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    jobId: [],
    nationality: "",
    gender: "",
    dob: Date.now(),
    salary: 0,
    extension: 0,
    sickDays: 15,
    vacationDays: 30,
    hireDate: Date.now(),
    profilePicture: null,
    departmentId: null,
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    employeeStore.createEmployee(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>Some input fields</div>
      <B type="submit">Submit</B>
      <M name="firstName" onChange={handleChange} placeholder="First Name" />
      <M name="lastName" onChange={handleChange} placeholder="Last Name" />
      <M name="nationality" onChange={handleChange} placeholder="Nationality" />
      <M name="gender" onChange={handleChange} placeholder="Gender" />
      <M name="dob" onChange={handleChange} placeholder="Date of Birth" />
      <M name="salary" onChange={handleChange} placeholder="Salary" />
      <M name="extension" onChange={handleChange} placeholder="Ext." />
      <M name="sickDays" onChange={handleChange} placeholder="Sick Days" />
      <M
        name="vacationDays"
        onChange={handleChange}
        placeholder="Vacation Days"
      />
      <M name="hireDate" onChange={handleChange} placeholder="Hire Date" />
      <M
        name="profilePicture"
        onChange={handleChange}
        placeholder="Enter Url"
      />
      <M
        name="departmentId"
        onChange={handleChange}
        placeholder="Department ID"
      />
      {/* <M name="jobId" onChange={handleChange} placeholder="Job Title ID" /> */}
    </form>
  );
};

export default EmployeeForm;
