import { Route, Routes } from 'react-router-dom';

import Favorites from './pages/Favorites';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
