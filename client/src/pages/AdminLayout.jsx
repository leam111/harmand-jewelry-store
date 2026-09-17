import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Sidebar from '../components/Sidebar';

function AdminLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#FAF7F2' }}>
      <Sidebar onLogout={() => setIsLoggedIn(false)} />
      <div className="flex-1 px-8 sm:px-12 py-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;