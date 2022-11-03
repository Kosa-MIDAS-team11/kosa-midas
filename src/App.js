import * as S from "./AppStyle";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DivisionList from "./pages/DivisionListPage";
import MyPage from "./pages/MyPage"

export default function App() {
  return (
    <S.Container>
      <Routes>
        <Route path="/division" element={<DivisionList />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </S.Container>
  );
}
