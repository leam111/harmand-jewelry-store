import { AlertTriangle } from 'lucide-react';

function ConfirmDialog({ open, title, message, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-6 z-50"
      style={{ background: 'rgba(28,27,25,0.5)' }}
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm relative"
        style={{ background: '#FFFFFF', border: '1px solid #E8E1D3' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(to right, transparent, #B8923C, transparent)' }}
        />

        <div className="p-7 text-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: '#FDEAEE' }}
          >
            <AlertTriangle size={20} style={{ color: '#E14C68' }} />
          </div>

          <h3 className="text-[#1C1B19] text-base font-medium mb-2">{title}</h3>
          <p className="text-[#6B6558] text-sm mb-7">{message}</p>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#6B6558] border border-[#E8E1D3] hover:bg-[#FAF7F2] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-2.5 text-[11px] uppercase tracking-[0.2em] text-white transition-colors"
              style={{ background: '#E14C68' }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;