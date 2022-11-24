import "./App.css";
import Main from "./Main";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function App() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  };
  const items = [
    <div className="item" data-value="1">
      <Main />
    </div>
  ];
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
}

export default App;
