import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/ImageSlider";
import RandomColor from "./components/RamdomColorGenerator";
import StarRating from "./components/starRating";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page="1" limit="5" />
    </>
  );
}

export default App;
