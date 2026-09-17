import { useEffect, useState } from 'react';
import Slideshow from '../components/slideshow'
import CategoryBanner from '../components/CategoryBanner';
import Marquee from '../components/Marquee';
import AtelierTeaser from '../components/AtelierTeaser';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  const categories = uniqueCategories.map((catName) => {
    const firstProduct = products.find((p) => p.category === catName);
    return {
      name: catName,
      image: firstProduct?.imageUrl || '',
      to: `/collection?category=${encodeURIComponent(catName)}`,
    };
  });

  return (
    <>
      <Slideshow />

      {products.length === 0 ? (
        <div className="px-6 md:px-12 lg:px-20 py-12" style={{ backgroundColor: '#080808' }}>
          <p className="text-white/40 text-sm">No products yet.</p>
        </div>
      ) : (
        <>
          <CategoryBanner categories={categories} />
          
<Marquee text={{
  en: "Handcrafted · 18-Karat Gold · Paris, France · Made to Order",
  fr: "Fait à la Main · Or 18 Carats · Paris, France · Sur Mesure",
}} />
        <AtelierTeaser/>
        </>
      )}
    </>
  )
}