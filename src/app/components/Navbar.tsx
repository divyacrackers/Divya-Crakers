// import { Link, useLocation } from 'react-router';
// import { ShoppingCart, Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import logo from '../../assets/logo.png';

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const { getCartCount } = useCart();

//   // Updated array: "Gallery" removed, "About" added
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Products', path: '/products' },
//     { name: 'About', path: '/about' },
//     { name: 'Cart', path: '/cart' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logo} alt="Divya Crackers Logo" className="w-10 h-10 object-contain" />
//             <span className="font-bold text-xl text-gray-800">Divya Crackers</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`transition-colors relative flex items-center gap-1 ${
//                   isActive(link.path)
//                     ? 'text-red-500 font-semibold'
//                     : 'text-gray-700 hover:text-red-500'
//                 }`}
//               >
//                 {link.name === 'Cart' && <ShoppingCart size={18} />}
//                 {link.name}
//                 {link.name === 'Cart' && getCartCount() > 0 && (
//                   <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                     {getCartCount()}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-gray-700"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`flex items-center py-2 transition-colors ${
//                   isActive(link.path)
//                     ? 'text-red-500 font-semibold'
//                     : 'text-gray-700'
//                 }`}
//               >
//                 {link.name === 'Cart' && <ShoppingCart size={18} className="mr-2" />}
//                 {link.name}
//                 {link.name === 'Cart' && getCartCount() > 0 && (
//                   <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                     {getCartCount()}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import logo from '../../assets/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Cart', path: '/cart' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Divya Crackers Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl text-gray-800">Divya Crackers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative flex items-center gap-1 ${
                  isActive(link.path)
                    ? 'text-red-500 font-semibold'
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                {link.name === 'Cart' && <ShoppingCart size={18} />}
                {link.name}
                {link.name === 'Cart' && getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Right Side Icons */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Cart Icon - Always Visible */}
            <Link 
              to="/cart" 
              className={`relative p-2 ${isActive('/cart') ? 'text-red-500' : 'text-gray-700'}`}
            >
              <ShoppingCart size={24} />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-1"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center py-3 px-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-red-500 font-semibold bg-red-50'
                    : 'text-gray-700'
                }`}
              >
                {link.name === 'Cart' && <ShoppingCart size={18} className="mr-2" />}
                {link.name}
                {link.name === 'Cart' && getCartCount() > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}