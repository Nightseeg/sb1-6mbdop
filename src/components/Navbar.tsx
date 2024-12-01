import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';
import Button from './ui/Button';
import { useAuthStore } from '@/store/authStore';
import Logo from './Logo';

const publicNavItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Tarifs', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-dark-800/80 backdrop-blur-lg border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center space-x-3">
            <Logo />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent"
            >
              IA-26
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-sm font-medium transition-colors group ${
                  location.pathname === item.href
                    ? 'text-primary-400'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400 origin-left"
                  initial={false}
                  animate={{ 
                    scaleX: location.pathname === item.href ? 1 : 0,
                    opacity: location.pathname === item.href ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400/50 origin-left"
                  initial={false}
                  animate={{ 
                    scaleX: 0,
                    opacity: 0 
                  }}
                  whileHover={{ 
                    scaleX: location.pathname !== item.href ? 1 : 0,
                    opacity: location.pathname !== item.href ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              {isAuthenticated() ? (
                <Button variant="primary" onClick={() => navigate('/dashboard')}>
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button variant="secondary" onClick={() => navigate('/login')}>
                    Connexion
                  </Button>
                  <Button variant="primary" onClick={() => navigate('/register')}>
                    S'inscrire
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-dark-800 border-t border-white/10"
            >
              <div className="py-4 space-y-4">
                {publicNavItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-4 py-2 text-sm font-medium ${
                      location.pathname === item.href
                        ? 'text-primary-400 bg-primary-400/10'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="px-4 space-y-2">
                  {isAuthenticated() ? (
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={() => {
                        navigate('/dashboard');
                        setIsOpen(false);
                      }}
                    >
                      Dashboard
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => {
                          navigate('/login');
                          setIsOpen(false);
                        }}
                      >
                        Connexion
                      </Button>
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={() => {
                          navigate('/register');
                          setIsOpen(false);
                        }}
                      >
                        S'inscrire
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}