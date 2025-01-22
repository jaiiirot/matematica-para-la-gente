import { Route, Routes } from "react-router-dom";
import PrivateGuard from "./guard/PrivateGuard";
import Layout from "./Layout/Layout";
import LayoutCource from "./Layout/LayoutCource";
import ContentCource from "./pages/ContentCource";
import PresentationCourse from "./pages/PresentationCourse";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Matter from "./pages/Matter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cursos">
          <Route index element={<Course />} />
          <Route path=":urltitle" element={<LayoutCource />}>
            <Route index element={<PresentationCourse />} />
            <Route path=":url" element={<ContentCource />} />
          </Route>
        </Route>
        <Route path="/materias" element={<Matter />} />
        <Route path="/creadores" element={<h1>Sobre</h1>} />

        <Route element={<PrivateGuard />}>
          <Route path="/guardados" element={<h1>guardados</h1>} />
          <Route path="/user" element={<h1>user</h1>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
