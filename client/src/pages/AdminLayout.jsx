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
    <div style={{ backgroundColor: '#FAF7F2' }}>
      <Sidebar onLogout={() => setIsLoggedIn(false)} />
      <div className="ml-56 px-8 sm:px-12 py-10 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;