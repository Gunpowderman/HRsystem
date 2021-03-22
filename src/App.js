import { CardContainer, Container, HeaderContainer, NavBarText } from "./style";
import EmployeeList from "./Components/Employee/EmployeeList";

function App() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <NavBarText> landing page </NavBarText>
        </HeaderContainer>
        <EmployeeList />
        <CardContainer></CardContainer>
      </Container>
    </>
  );
}

export default App;
