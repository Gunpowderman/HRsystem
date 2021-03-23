import axios from "axios";
import { makeAutoObservable } from "mobx";

class EmployeeStore {
  employees = [];

  constructor() {
    makeAutoObservable(this);
  }

  //get employee
  fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employee");
      console.log("adel", response.data);
      this.employees = response.data;
    } catch (error) {
      console.error("EmployeeStore -> fetchEmployeeStore -> error", error);
    }
  };

  //delete employee
  deleteEmployee = async (emp) => {
    console.log(emp);
    try {
      await axios.delete(`http://localhost:8000/employee/${emp}`);
      this.employees = this.employees.filter(
        (employee) => employee.id !== +emp
      );
    } catch (error) {
      console.error("EmployeeStore -> deleteEmployeeStore -> error", error);
    }
  };

  //create employee
  createEmployee = async (newEmployee) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/employee",
        newEmployee
      );
      this.employees.push(response.data);
    } catch (error) {
      console.log("EmployeeStore -> createEmployee -> error", error);
    }
  };
}

const employeeStore = new EmployeeStore();
employeeStore.fetchEmployees();

export default employeeStore;
