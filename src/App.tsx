import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Schedule from './pages/Schedule';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import DefaultLayout from './layout/DefaultLayout';
import Trends from './pages/Trends';
import LinkedAccounts from './pages/LinkedAccounts';
import Advertisements from './pages/Advertisements';
import Billing from './pages/Billing';
import Developer from './pages/Developer';
import MyProfile from './pages/MyProfile'


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/schedule"
          element={
            <>
              <PageTitle title="Schedule Post" />
              <Schedule />
            </>
          }
        />
        <Route
          path="/trends"
          element={
            <>
              <PageTitle title="Trends" />
              <Trends />
            </>
          }
        />
        <Route
          path="/Linked Accounts"
          element={
            <>
              <PageTitle title="Linked Accounts" />
              <LinkedAccounts />
            </>
          }
        />
        <Route
          path="/Advertisements"
          element={
            <>
              <PageTitle title="Advertisement" />
              <Advertisements />
            </>
          }
        />
        <Route
          path="/Billing"
          element={
            <>
              <PageTitle title="Billing" />
              <Billing />
            </>
          }
        />
        <Route
          path="/Settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="/MyProfile"
          element={
            <>
              <PageTitle title="My Profile" />
              <MyProfile />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />

 
        <Route
          path="/Developer"
          element={
            <>
              <PageTitle title="About Developer" />
              <Developer />
            </>
          }
        />

      </Routes>
    </DefaultLayout>
  );
}

export default App;
