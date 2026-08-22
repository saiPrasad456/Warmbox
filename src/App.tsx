import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TechnologyFaq from './pages/TechnologyFaq'
import ProductDetail from './pages/ProductDetail'
import SolutionDetail from './pages/SolutionDetail'
import BuyNow from './pages/BuyNow'
import Checkout from './pages/Checkout'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ScrollToHash from './hooks/ScrollToHash'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToHash />
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/technology-faq" element={<TechnologyFaq />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/solutions/:slug" element={<SolutionDetail />} />
              <Route path="/buy-now" element={<BuyNow />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
