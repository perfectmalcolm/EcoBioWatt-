import { Bell, Moon, Sun, LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Topbar({ darkMode, toggleDark }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Dashboard Overview
      </h2>
      <div className="flex items-center gap-4">
        <button className="relative" onClick={() => console.log("Notification button clicked!")}>
          <Bell className="text-gray-600 dark:text-gray-300" size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button onClick={toggleDark}>
          {darkMode ? (
            <Sun className="text-yellow-400" size={22} />
          ) : (
            <Moon className="text-gray-600 dark:text-gray-300" size={22} />
          )}
        </button>
        <button onClick={handleLogout} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </header>
  );
}
