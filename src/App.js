import * as S from './AppStyle';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DivisionList from './pages/DivisionListPage'

export default function App() {
  return (
    <S.Container>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/division" element={<DivisionList />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </S.Container>
  )
}
