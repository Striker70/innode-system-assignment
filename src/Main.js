import "./App.css";
import Cars from "./cars.json";

function Main() {
  return (
    <>
      <div className="container">
        {Cars.map((e) => (
          <div className="car" key={e.id}>
            <div>
              <div className="car-type">
                <div>{e.bodyType}</div>
                <div>
                  <span className="car-details">{e.modelName}</span>
                  <span>{e.modelType}</span>
                </div>
              </div>
              <img className="car-img" src={e.imageUrl} alt="Car Image" />
              <div className="car-btn">
                <button className="btn">
                  <span>
                    LEARN
                    <img
                      className="btn-image"
                      src="../images/chevron-small.svg"
                      alt="arrow"
                    />
                  </span>
                </button>
                <button className="btn">
                  <span>
                    SHOP
                    <img
                      className="btn-image"
                      src="../images/chevron-small.svg"
                      alt="arrow"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="low-btn">
        <button className="left-btn button">
          <img src="./images/chevron-circled.svg" alt="Right Button" />
        </button>
        <button className="right-btn button">
          <img src="./images/chevron-circled.svg" alt="Left Button" />
        </button>
      </div>
    </>
  );
}

export default Main;
