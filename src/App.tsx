import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Order from './components/Order';
import LeaderBoard from './components/LeaderBoard';
import Products from './components/Products';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout />}>
          <Route
            index
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/leaderboard"
            element={<LeaderBoard />}
          />
          <Route
            path="/order"
            element={<Order />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
