import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import ProductRow from '../components/ProductRow';
import ConfirmDialog from '../components/ConfirmDialog';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();

  const loadProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const confirmDelete = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:5000/api/products/${productToDelete._id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) loadProducts();
    setProductToDelete(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ color: '#B8923C', letterSpacing: '0.2em' }} className="text-xs uppercase mb-1">Products</h2>
      <p className="text-[#6B6558] text-sm mb-6">{products.length} total</p>

      <div className="relative max-w-sm mb-6">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6558]" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E8E1D3] text-[#1C1B19] text-sm outline-none focus:border-[#B8923C]"
        />
      </div>

      <div className="flex flex-col gap-3">
        {filteredProducts.length === 0 ? (
          <p className="text-[#6B6558] text-sm">No products match "{searchTerm}"</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductRow
              key={product._id}
              product={product}
              onEdit={() => navigate(`/harmand-portal/products/${product._id}/edit`, { state: { product } })}
              onDelete={() => setProductToDelete(product)}
            />
          ))
        )}
      </div>

      <ConfirmDialog
        open={!!productToDelete}
        title="Delete this product?"
        message={productToDelete ? `"${productToDelete.name}" will be permanently removed.` : ''}
        onConfirm={confirmDelete}
        onCancel={() => setProductToDelete(null)}
      />
    </div>
  );
}

export default ProductsPage;