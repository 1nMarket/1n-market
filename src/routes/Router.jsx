import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Navbar from '../components/common/Navbar';
import RequireAuth from '../components/common/RequireAuth';
import Follows from '../pages/Follows';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Public from '../pages/Public';
import Search from '../pages/Search';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Public />} />
          <Route path='login' element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route element={<Navbar />}>
              <Route path='home' element={<Home />} />

              <Route path='profile/:accountname'>
                <Route index element={<Profile />} />
                <Route path='followings' element={<Follows />} />
                <Route path='followers' element={<Follows />} />
              </Route>

              <Route path='search' element={<Search />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

