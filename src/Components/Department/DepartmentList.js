import { useState } from "react";
import DepartmentItem from "./DepartmentItem";
import departmentStore from "../../Store/DepartmentStore";
import { observer } from "mobx-react";

const DepartmentList = () => {
  const [query, setQuery] = useState("");
  console.log(departmentStore.departments);
  const departmentList = departmentStore.departments

    .filter((department) => department.name.includes(query))
    .map((department) => <DepartmentItem department={department} />);
  return <>{departmentList}</>;
};

export default observer(DepartmentList);
