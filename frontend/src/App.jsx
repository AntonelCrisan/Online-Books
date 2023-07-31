import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
        </Routes>
      </Router>
    </div>
  );
}
