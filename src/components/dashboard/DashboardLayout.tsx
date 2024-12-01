import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bot, LayoutDashboard, Phone, Settings, LogOut, Search, Bell } from 'lucide-react';
import Logo from '../Logo';
import { useAuthStore } from '@/store/authStore';
import NotificationsPopover from './NotificationsPopover';
import SearchDialog from './SearchDialog';
import UserMenu from './UserMenu';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Phone, label: 'Appels', href: '/dashboard/calls' },
  { icon: Settings, label: 'Paramètres', href: '/dashboard/settings' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Top Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-dark-800/80 backdrop-blur-lg border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="h-16 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/5"
            >
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Bot className="w-6 h-6" />
              </motion.div>
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center space-x-2 px-4 py-2 text-white/60 hover:text-white bg-white/5 rounded-lg"
            >
              <Search className="w-4 h-4" />
              <span>Rechercher...</span>
              <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium">
                ⌘K
              </kbd>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <NotificationsPopover />
            <UserMenu />
          </div>
        </div>
      </motion.header>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 280 }}
        className="fixed top-16 left-0 bottom-0 bg-dark-800/80 backdrop-blur-lg border-r border-white/5 z-30"
      >
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-primary-400/20 text-primary-400'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="w-6 h-6 flex-shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}

          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            <LogOut className="w-6 h-6 flex-shrink-0" />
            {!isCollapsed && <span>Déconnexion</span>}
          </button>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className={`pt-24 pb-16 transition-all ${isCollapsed ? 'ml-20' : 'ml-[280px]'} px-4`}>
        {children}
      </main>

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}