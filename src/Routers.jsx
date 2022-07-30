import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailFood from "./pages/DetailFood";
import { useSelector, useDispatch } from "react-redux";
import MenuBar from "./component/MenuBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./component/ProtectedRoute";
import NoFound from "./pages/NoFound";

const Routers = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailfood/:id"
            element={
              <ProtectedRoute>
                <DetailFood />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={
            <NoFound />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;