class Employee {
  employee = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employee");
      console.log("adel", response.data);
      this.Employee = response.data;
    } catch (error) {
      console.error("EmployeeStore -> fetchEmployeeStore -> error", error);
    }
  };
}

const Employee = new EmployeeStore();
EmployeeStore.fetchEmployee();

export default Employee;
