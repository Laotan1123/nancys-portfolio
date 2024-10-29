import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > prevScroll && currentScroll > 50) {
        setScrollDirection('down');
      } else if (currentScroll < prevScroll) {
        setScrollDirection('up');
      }
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return scrollDirection;
};

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close menus when scrolling down
  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  }, [scrollDirection]);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm shadow-sm transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">
            NU
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={closeMenus}
            >
              About Me
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={closeMenus}
            >
              Contact Me
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50"
                >
                  <Link
                    to="/thesis"
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    My Thesis
                  </Link>
                  <Link
                    to="/projects"
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    My Projects
                  </Link>
                  <Link
                    to="/freelance"
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    Freelance
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800 border-t border-gray-700"
        >
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/about"
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={closeMenus}
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={closeMenus}
            >
              Contact Me
            </Link>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 border-t border-gray-700"
                >
                  <Link
                    to="/thesis"
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    My Thesis
                  </Link>
                  <Link
                    to="/projects"
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    My Projects
                  </Link>
                  <Link
                    to="/freelance"
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    Freelance
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}