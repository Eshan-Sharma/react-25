import "./App.css";
import StarRating from "./components/starRating/StarRating";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/randomColor/RandomColor";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
