import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RestaurantsPage from './Pages/RestaurantsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="Restaurants" element={<RestaurantsPage />} />
    </Routes>
  );
}
