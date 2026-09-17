import { Pencil, Trash2 } from 'lucide-react';

function ProductRow({ product, onEdit, onDelete }) {
  return (
    <div className="flex items-center gap-4 px-4 py-3" style={{ background: '#FFFFFF', border: '1px solid #E8E1D3' }}>
      <div className="w-14 h-14 flex-shrink-0 bg-[#FAF7F2] overflow-hidden" style={{ border: '1px solid #E8E1D3' }}>
        {product.imageUrl && (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[#1C1B19] text-sm truncate">{product.name}</p>
        <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#6B6558' }}>{product.category}</p>
      </div>

      <button onClick={onEdit} className="p-2 text-[#6B6558] hover:text-[#B8923C] transition-colors">
        <Pencil size={15} />
      </button>
      <button onClick={onDelete} className="p-2 text-[#6B6558] hover:text-red-500 transition-colors">
        <Trash2 size={15} />
      </button>
    </div>
  );
}

export default ProductRow;