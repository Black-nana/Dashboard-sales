import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Order from './components/Order';
import LeaderBoard from './components/LeaderBoard';
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import Messages from './components/Messages';
import Settings from './components/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout />}>
          <Route
            index
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/leaderboard"
            element={<LeaderBoard />}
          />
          <Route
            path="/messages"
            element={<Messages />}
          />
          <Route
            path="/settings"
            element={<Settings />}
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
