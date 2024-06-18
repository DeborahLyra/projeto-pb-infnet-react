import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";
import { Login } from "./components/login/Login";
import Profile from "./components/profile/Profile";
import SignIn from "./components/signIn/SignIn";
import { Header } from "./components/header/Header";
import DashboardPage from "./pages/DashboardPage";
import RankingPage from "./pages/RankingPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
}

const Main = () => {
  const location = useLocation();
  const rotasSemHeader = ["/login", "/signin", "/forgotPassword"];
  
  return (
    <div className="min-h-full">
      { !rotasSemHeader.includes(location.pathname) && <Header /> }
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
              <Route exact path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route exact path="/ranking" element={<ProtectedRoute><RankingPage /></ProtectedRoute>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
