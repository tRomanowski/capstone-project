import { Route, Routes } from 'react-router-dom';

import Favorites from './Pages/Favorites';
import Header from './components/Header';
import Home from './Pages/Home';

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
