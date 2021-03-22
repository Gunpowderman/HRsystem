import axios from "axios";
import { makeAutoObservable } from "mobx";

class EmployeeStore {
  employees = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employee");
      console.log("adel", response.data);
      this.employees = response.data;
    } catch (error) {
      console.error("EmployeeStore -> fetchEmployeeStore -> error", error);
    }
  };
}

const employeeStore = new EmployeeStore();
employeeStore.fetchEmployees();

export default employeeStore;
