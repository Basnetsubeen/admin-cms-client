import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRegistration from "./pages/admin-registration/AdminRegistration";
import LoginPage from "./pages/login/LoginPage";
import EmailVerification from "./pages/admin-registration/EmailVerification";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistration />} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
