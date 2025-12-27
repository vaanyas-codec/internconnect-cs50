import { LogOut, User } from 'lucide-react';

/**
 * Header Component
 * 
 * Fixed header with navigation and user info
 */

const Header = ({ user, onLogout, navigateTo }) => {
  const handleLogout = () => {
    onLogout();
  };

  if (!user) return null;

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigateTo('dashboard')}
            className="text-2xl font-bold text-black hover:text-gray-700 cursor-pointer"
          >
            InternConnect
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigateTo('browse')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Browse Internships
            </button>
            <button
              onClick={() => navigateTo('companies')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Top Companies
            </button>
            <button
              onClick={() => navigateTo('resources')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => navigateTo('profile')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              My Profile
            </button>
          </nav>

          {/* User Info & Logout */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="hidden md:block text-gray-700">{user.fullName}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
