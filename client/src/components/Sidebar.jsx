import { NavLink, useNavigate } from 'react-router-dom';
import { Gem, PlusCircle, LogOut } from 'lucide-react';

function Sidebar({ onLogout }) {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors border-l-2 ${
      isActive ? 'text-[#B8923C] bg-[#B8923C]/5' : 'text-[#6B6558] border-transparent hover:text-[#1C1B19]'
    }`;

  return (
    <aside
      className="w-56 flex-shrink-0 flex flex-col justify-between py-8"
      style={{ background: '#FFFFFF', borderRight: '1px solid #E8E1D3' }}
    >
      <div>
        <div className="px-5 mb-10">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#B8923C', letterSpacing: '0.25em' }} className="uppercase text-lg">
            Harmand
          </h1>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#6B6558] mt-1">Admin</p>
        </div>

        <nav className="flex flex-col gap-1">
<NavLink to="/harmand-portal/products" end className={linkClass} style={({ isActive }) => ({ borderLeftColor: isActive ? '#C9A84C' : 'transparent' })}>
  <Gem size={14} /> Products
</NavLink>
          <NavLink to="/harmand-portal/products/new" className={linkClass} style={({ isActive }) => ({ borderLeftColor: isActive ? '#B8923C' : 'transparent' })}>
            <PlusCircle size={14} /> Add Product
          </NavLink>
        </nav>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem('token');
          onLogout();
          navigate('/harmand-portal');
        }}
        className="flex items-center gap-3 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#6B6558] hover:text-red-500 transition-colors"
      >
        <LogOut size={14} /> Log Out
      </button>
    </aside>
  );
}

export default Sidebar;