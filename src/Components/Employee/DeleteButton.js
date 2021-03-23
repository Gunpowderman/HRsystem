import { observer } from "mobx-react";
import employeeStore from "../../Store/EmployeeStore";

const EmployeeDelete = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    employeeStore.deleteEmployee(props.emp);
  };
  return (
    <button onClick={handleDelete} emp={props.emp}>
      Delete
    </button>
  );
};

export default observer(EmployeeDelete);
