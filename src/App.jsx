import Header from "./components/Header"
import ToDo from "./components/ToDo"
import { styled } from "styled-components"
import { ToDoProvider } from "./context";

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  `;

function App() {
  return (
    <ToDoProvider>
      <MainWrapper>
        <Header />
        <ToDo />
      </MainWrapper>
    </ToDoProvider>
  )
}

export default App
