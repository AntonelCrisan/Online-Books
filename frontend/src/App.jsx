import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LogInPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ProfilePage from "./Pages/ProfilePage";
import OrdersPage from "./Pages/OrdersPage";
import FavoritesPage from "./Pages/FavoritesPage";
import ReviewPage from "./Pages/ReviewPage";
import AddressesPage from "./Pages/AddressesPage";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/addresses" element={<AddressesPage />} />
         
        </Routes>
      </Router>
    </div>
  );
}
