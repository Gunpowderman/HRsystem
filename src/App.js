import {
  CardContainer,
  Container,
  HeaderContainer,
  ModalWrapper,
  NavBarText,
} from "./style";
import EmployeeList from "./Components/Employee/EmployeeList";
import DepartmentList from "./Components/Department/DepartmentList";
import JobList from "./Components/Job/JobList";
import Modal from "./Components/Modal";
import EmployeeForm from "./Components/EmployeeForm";
import { useState } from "react";
import Navbar from "./Components/NavBar";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <NavBarText> landing page </NavBarText>
        </HeaderContainer>
        <Navbar />
        <CardContainer>
          <h2>Employees</h2>
          <EmployeeList />
          <h2>Departments</h2>

          <DepartmentList />
          <h2>Job Titles</h2>

          <JobList />
          <ModalWrapper>
            {modalVisible ? (
              <Modal
                title="Add product"
                visible={modalVisible}
                hideModal={hideModal}
              >
                <EmployeeForm />
              </Modal>
            ) : (
              <button onClick={showModal}>New Hire</button>
            )}
          </ModalWrapper>
        </CardContainer>
      </Container>
    </>
  );
}

export default App;
