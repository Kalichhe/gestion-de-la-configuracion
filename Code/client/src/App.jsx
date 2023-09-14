import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Calculator from "./pages/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import ProtectedRoute from "./ProtectedRoute";
import Navbars from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<h1 className="h1HomePage">Home page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="calculator" element={<Calculator />} />

          <Route element={<ProtectedRoute />}>
            {/* <Route path="/calculator" element={<Calculator />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
