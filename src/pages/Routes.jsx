import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import RankingPage from './RankingPage';
import SignInPage from './SignInPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';


const AppRoutes  = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<DashboardPage/>} />
      <Route exact path="/dashboard" element={<DashboardPage/>} />
      <Route exact path="/ranking" element={<RankingPage/>} />
      <Route exact path="/signIn" element={<SignInPage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/profile" element={<ProfilePage/>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
