import { Route, Routes } from "react-router-dom";
// import PrivateGuard from "./guard/PrivateGuard";
// import LayoutCource from "./Layout/LayoutCource";
import Layout from "./Layout/Layout";
import ContentCource from "./pages/ContentCource";
import PresentationCourse from "./pages/PresentationCourse";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Error from "./pages/Error";
// import Matter from "./pages/Matter";
// import Influencers from "./pages/Influencers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cursos">
          <Route index element={<Course />} />
          <Route path=":urltitle">
            <Route index element={<PresentationCourse />} />
            <Route path=":url" element={<ContentCource />} />
          </Route>
        </Route>
        {/* <Route path="/materias" element={<Matter />} /> */}
        {/* <Route path="/influencers" element={<Influencers />} /> */}

        {/* <Route element={<PrivateGuard />}>
          <Route path="/guardados" element={<h1>guardados</h1>} />
          <Route path="/user" element={<h1>user</h1>} />
        </Route> */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
