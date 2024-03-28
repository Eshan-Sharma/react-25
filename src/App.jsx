import "./App.css";
import StarRating from "./components/starRating/StarRating";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/randomColor/RandomColor";
import ImageSlider from "./components/imageSlider/ImageSlider";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider />
    </>
  );
}

export default App;
