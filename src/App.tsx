import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Order from './components/Order';
import LeaderBoard from './components/itemlist/ItemList';
import Products from './components/Products';
import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/Messages';
import Settings from './components/Settings';
import Authentication from './pages/Authentication';
import SignUp from './components/Authentications/signup/SignUp';
import SignIn from './components/Authentications/signin/SignIn';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<Authentication />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<SharedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="itemlist" element={<LeaderBoard />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="order" element={<Order />} />
        <Route path="products" element={<Products />} />
      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
