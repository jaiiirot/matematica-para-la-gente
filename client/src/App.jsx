// import styled from './App.module.scss'
import MyRoutes from "./routes/routes";

function App() {
  return (
    <BackgroundFilter>
      <MyRoutes />
    </BackgroundFilter>
  );
}

export default App;

const BackgroundFilter = (porps) => {
  return (
    <>
      <div className="containerCircles">
        <span
          className="circle circle01"
          style={{ backgroundColor: "#00f7ff" }}
        ></span>
        <span
          className="circle circle02"
          style={{ backgroundColor: "#7a00b0" }}
        ></span>
        <span
          className="circle circle03"
          style={{ backgroundColor: "#0000ff" }}
        ></span> 
      </div>
      <div className="bodyFilter">{porps.children}</div>
    </>
  );
};
