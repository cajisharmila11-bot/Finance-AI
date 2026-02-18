import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { ThemeProvider } from '../../context/ThemeContext';
import { Toaster } from '../ui/sonner';

export function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Outlet />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
