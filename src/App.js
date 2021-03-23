import { CardContainer, Container, HeaderContainer, NavBarText } from "./style";
import EmployeeList from "./Components/Employee/EmployeeList";
import DepartmentList from "./Components/Department/DepartmentList";
import JobList from "./Components/Job/JobList";

function App() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <NavBarText> landing page </NavBarText>
        </HeaderContainer>

        <CardContainer>
          <EmployeeList />
          <DepartmentList />
          <JobList />
        </CardContainer>
      </Container>
    </>
  );
}

export default App;
