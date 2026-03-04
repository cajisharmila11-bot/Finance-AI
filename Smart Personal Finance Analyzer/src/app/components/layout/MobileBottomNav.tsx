import { Link, useLocation } from 'react-router';
import { LayoutDashboard, PlusCircle, TrendingUp, User } from 'lucide-react';

export function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/add-expense', icon: PlusCircle, label: 'Add' },
    { path: '/analytics', icon: TrendingUp, label: 'Analytics' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center space-y-1 flex-1 ₹{
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
