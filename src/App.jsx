import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Mountain from "./pages/Mountain";
import Map from "./pages/Map";
import Community from "./pages/Community";
import MyPage from "./pages/MyPage";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mountain/:name" element={<Mountain />} />
        <Route path="/map" element={<Map />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
