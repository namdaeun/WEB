import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ResultPage from './pages/ResultWish';
import QuestionCard from './pages/QuestionCard';
import RecmmendWish from './pages/RecommendWish';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/question" element={<QuestionCard />} />
        <Route path="/recommend" element={<RecmmendWish />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
