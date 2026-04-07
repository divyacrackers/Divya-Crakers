import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton, ScrollToTop as ScrollToTopButton } from '../components/FloatingButtons';
import { CartProvider } from '../context/CartContext';

// This helper component handles the scroll-to-top logic globally
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll can be used, but 'instant' is standard for route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Root() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Added the ScrollToTop logic here */}
        <ScrollToTop />
        
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        {/* Note: I renamed your floating button import to avoid naming conflict */}
        <ScrollToTopButton />
      </div>
    </CartProvider>
  );
}