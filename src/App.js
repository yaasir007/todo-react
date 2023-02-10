import './App.css';
import { Header } from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";

function App(props) {
  return (
    <>
      <Header tabOne="Project" tabThree="Contact" />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
