import "./App.css";
import StarRating from "./components/starRating/StarRating";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/randomColor/RandomColor";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreButton from "./components/loadMoreButton/LoadMoreButton";
import TreeNavigate from "./components/treeNavigate/TreeNavigate";
import menus from "./components/treeNavigate/data";
import QrCodeGenerator from "./components/qrCodeGenerator/QrCodeGenerator";
function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider />
      <LoadMoreButton />
      <TreeNavigate menus={menus} />
      <QrCodeGenerator />
    </>
  );
}

export default App;
