import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import RankingPage from './RankingPage';
import SignInPage from './SignInPage';


const AppRoutes  = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/dashboard" element={<DashboardPage/>} />
      <Route exact path="/ranking" element={<RankingPage/>} />
      <Route exact path="/signIn" element={<SignInPage/>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
