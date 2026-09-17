import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLayout from './pages/AdminLayout';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./pages/ProductDetails";
import { LanguageProvider } from "./context/LanguageContext";

import NotFound from "./pages/NotFound";


function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<SiteLayout><Home /></SiteLayout>} />
          <Route path="/collection" element={<SiteLayout><Collection /></SiteLayout>} />
          <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
          <Route path="/contact" element={<SiteLayout><Contact /></SiteLayout>} />
          <Route path="/product/:id" element={<SiteLayout><ProductDetails /></SiteLayout>} />
<Route path="*" element={<SiteLayout><NotFound /></SiteLayout>} />

          <Route path="/harmand-portal" element={<AdminLayout />}>
            <Route index element={<ProductsPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/new" element={<AddProductPage />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;