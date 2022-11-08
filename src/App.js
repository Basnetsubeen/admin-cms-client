import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRegistration from "./pages/admin-registration/AdminRegistration";
import LoginPage from "./pages/login/LoginPage";
import EmailVerification from "./pages/admin-registration/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/products/Product";
import PrivateRouter from "./components/private-router/PrivateRouter";
import Category from "./pages/categories/Category";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Private router */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/product"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
          <Route
            path="/category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />
          {/* Public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistration />} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
