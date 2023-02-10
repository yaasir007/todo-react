import './App.css';
import { Header } from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";

function App(props) {
  let todos = [
    {
      number: 1,
      title: "Shoes",
      description: "Nice Shoes with different color combinations",
    },
    {
      number: 2,
      title: "Clothes",
      description: "Good Clothes with different color combinations",
    },
    {
      number: 3,
      title: "Cap",
      description: "Hard Cap with different color combinations",
    },
  ];




  return (
    <>
      <Header tabOne="Project" tabThree="Contact" />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
