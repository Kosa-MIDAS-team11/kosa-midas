import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}
