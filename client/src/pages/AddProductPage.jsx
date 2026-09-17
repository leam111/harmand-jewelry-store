import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud } from 'lucide-react';

const CATEGORIES = ["Rings", "Necklaces", "Bracelets", "Earrings"];

function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!category) {
      setError('Please select a category');
      return;
    }
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      let imageUrl = '';

      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        const uploadRes = await fetch('http://localhost:5000/api/upload', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });
        const uploadData = await uploadRes.json();
        if (!uploadRes.ok) {
          setError(uploadData.error);
          setLoading(false);
          return;
        }
        imageUrl = uploadData.imageUrl;
      }

      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name, price, description, category, imageUrl }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      navigate('/harmand-portal/products');
    } catch (err) {
      setError('Something went wrong');
      setLoading(false);
    }
  };

  const inputClass = "w-full px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E1D3] text-[#1C1B19] text-sm outline-none focus:border-[#B8923C]";
  const labelClass = "block text-[10px] uppercase tracking-[0.2em] text-[#6B6558] mb-2";

  return (
    <div>
      <h2 style={{ color: '#B8923C', letterSpacing: '0.2em' }} className="text-xs uppercase mb-8">Add Product</h2>

      <form onSubmit={handleSubmit} className="max-w-lg p-6 sm:p-8" style={{ background: '#FFFFFF', border: '1px solid #E8E1D3' }}>
        {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

        <div className="grid grid-cols-2 gap-5 mb-5">
          <div><label className={labelClass}>Name</label><input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div>
            <label className={labelClass}>Category</label>
            <select className={inputClass} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div><label className={labelClass}>Price</label><input className={inputClass} type="number" value={price} onChange={(e) => setPrice(e.target.value)} /></div>
          <div>
            <label className={labelClass}>Photo</label>
            <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
              <UploadCloud size={15} style={{ color: '#B8923C' }} />
              <span className="truncate text-[#6B6558]">{imageFile ? imageFile.name : 'Choose file'}</span>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => setImageFile(e.target.files[0])} />
            </label>
          </div>
        </div>

        <label className={labelClass}>Description</label>
        <textarea className={`${inputClass} mb-2`} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        <p className="text-[10px] text-[#6B6558] mb-6">French translation is generated automatically.</p>

        <button type="submit" disabled={loading} className="px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] disabled:opacity-50" style={{ background: '#B8923C', color: '#FFFFFF' }}>
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;