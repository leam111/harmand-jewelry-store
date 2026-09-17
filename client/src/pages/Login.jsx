import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      localStorage.setItem('token', data.token);
      onLogin();
    } catch (err) {
      setError('Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="w-full max-w-sm relative" style={{ background: '#FFFFFF', border: '1px solid #E8E1D3' }}>
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #B8923C, transparent)' }} />

        <form onSubmit={handleSubmit} className="p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#B8923C', letterSpacing: '0.3em', fontSize: 'clamp(20px, 2.4vw, 26px)' }} className="uppercase">
              Harmand
            </h1>
            <p style={{ color: '#6B6558', letterSpacing: '0.25em' }} className="text-[10px] uppercase mt-2">
              Admin Access
            </p>
          </div>

          {error && <p className="text-red-500 text-xs text-center mb-4 tracking-wide">{error}</p>}

          <label className="block text-[10px] uppercase tracking-[0.2em] text-[#6B6558] mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-5 px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E1D3] text-[#1C1B19] text-sm outline-none focus:border-[#B8923C] transition-colors"
          />

          <label className="block text-[10px] uppercase tracking-[0.2em] text-[#6B6558] mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-7 px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E1D3] text-[#1C1B19] text-sm outline-none focus:border-[#B8923C] transition-colors"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-[11px] uppercase tracking-[0.25em] font-medium transition-opacity disabled:opacity-50"
            style={{ background: '#B8923C', color: '#FFFFFF' }}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;