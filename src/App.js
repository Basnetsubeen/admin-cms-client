import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRegistration from "./pages/admin-registration/AdminRegistration";
import LoginPage from "./pages/login/LoginPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
