// import styled from './App.module.scss'
import MyRoutes from "./routes/routes";

function App() {
  return (
    <BackgroundFilter>
      <MyRoutes />
      <Spinner />
    </BackgroundFilter>
  );
}

export default App;

import fondo from "./assets/img/fondo.jpg";
const BackgroundFilter = (porps) => {
  return (
    <>
      {/* <div className="containerCircles">
        <img src={fondo} alt="" />
      </div> */}
      <div className="textura">
        <svg>
          <filter id="pedroduarteisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#pedroduarteisalegend)"
          ></rect>
        </svg>
      </div>
      <div className="bodyFilter">{porps.children}</div>
    </>
  );
};
import stiledSpinner from "./components/Spinner.module.scss";
const Spinner = () => {
  return (
    <div>
      <div className={stiledSpinner.shapes}></div>
    </div>
  );
};
