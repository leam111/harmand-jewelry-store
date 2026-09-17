import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function CollectionHeader({ title, to = "/collection" }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
      <h2
        className="text-lg sm:text-xl md:text-3xl font-extralight tracking-[0.35em] uppercase"
        style={{ color: '#c9b97a' }}
      >
        {title}
      </h2>

      <Link
        to={to}
        className="group flex items-center gap-2 text-[10px] sm:text-xs md:text-sm tracking-[0.25em] transition-colors duration-300"
        style={{ color: '#6b6047' }}
        onMouseEnter={e => e.currentTarget.style.color = '#c9b97a'}
        onMouseLeave={e => e.currentTarget.style.color = '#6b6047'}
      >
        <span className="uppercase">View More</span>
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
      </Link>
    </div>
  )
}

export default function ProductCard({ id, image, name }) {
  return (
    <Link to={`/product/${id}`} className="block group w-full">
      <div
        className="relative w-full max-w-[260px] sm:max-w-[240px] md:max-w-[220px] lg:max-w-[200px] mx-auto transition-transform duration-500 group-hover:-translate-y-1"
        style={{ background: '#111111' }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[1px] z-10 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to right, transparent, #c9b97a, transparent)', opacity: 0.4 }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[1px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to right, transparent, #f0d98a, transparent)' }}
        />

        <div className="relative overflow-hidden h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
            style={{ filter: 'brightness(0.75) saturate(0.8)' }}
            onMouseEnter={e => e.target.style.filter = 'brightness(0.95) saturate(1)'}
            onMouseLeave={e => e.target.style.filter = 'brightness(0.75) saturate(0.8)'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div
            className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-in-out z-10"
            style={{ background: 'linear-gradient(to right, transparent, #c9b97a, transparent)' }}
          />
        </div>

        <div className="pt-4 pb-5 px-2 text-center">
          <h3
            className="text-[10px] sm:text-xs md:text-[11px] font-light tracking-[0.3em] uppercase transition-colors duration-300 line-clamp-2 min-h-[2.6em] flex items-center justify-center leading-snug"
            style={{ color: '#a89060' }}
          >
            {name}
          </h3>
          <div
            className="mx-auto mt-3 mb-0 h-[1px] w-8 group-hover:w-16 transition-all duration-500"
            style={{ background: 'linear-gradient(to right, transparent, #c9b97a, transparent)' }}
          />
        </div>

        <div className="absolute inset-0 border border-transparent group-hover:border-amber-900/40 transition duration-500 pointer-events-none" />
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-transparent group-hover:border-amber-600/50 transition-all duration-500 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-amber-600/50 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent group-hover:border-amber-600/50 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-transparent group-hover:border-amber-600/50 transition-all duration-500 pointer-events-none" />
      </div>
    </Link>
  )
}