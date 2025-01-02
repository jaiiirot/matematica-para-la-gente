import ReactPlayerVideo from "./components/ReactPlayerVideo";
import PrivateGuard from "./guard/PrivateGuard";
import Layout from "./Layout/Layout";
import LayoutCource from "./Layout/LayoutCource";
import Course from "./pages/Course";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/curso/:urltitle" element={<LayoutCource />}>
          <Route index element={<Course />} />
          <Route path=":url" element={<ReactPlayerVideo />} />
        </Route>
        <Route path="/canal" element={<h1>Sobre</h1>} />

        <Route element={<PrivateGuard />}>
          <Route path="/guardados" element={<h1>guardados</h1>} />
          <Route path="/user" element={<h1>user</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
