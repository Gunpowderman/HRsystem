import axios from "axios";
import { makeAutoObservable } from "mobx";

class DepartmentStore {
  departments = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:8000/department");
      console.log("adel", response.data);
      this.departments = response.data;
    } catch (error) {
      console.error("DepartmentStore -> fetchDepartmentStore -> error", error);
    }
  };
}

const departmentStore = new DepartmentStore();
departmentStore.fetchDepartments();

export default departmentStore;
