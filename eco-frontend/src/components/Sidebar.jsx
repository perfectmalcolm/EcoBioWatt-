import { FileText, Headphones, Home, Truck, User, UserCog } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const userRole = localStorage.getItem('userRole');

  const navItems = [
    { name: "Dashboard", path: "/", icon: Home, roles: ['admin', 'user'] },
    { name: "Logistics", path: "/logistics", icon: Truck, roles: ['admin'] },
    { name: "Reports", path: "/reports", icon: FileText, roles: ['admin'] },
    { name: "Support", path: "/support", icon: Headphones, roles: ['admin', 'user'] },
    { name: "User Input", path: "/user-input", icon: User, roles: ['user'] },
    { name: "Admin Dashboard", path: "/admin", icon: UserCog, roles: ['admin'] },
  ];

  return (
    <aside className="bg-white dark:bg-gray-900 shadow-lg h-full w-64 p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-8 text-emerald-600">EcoBioWatt</h1>
      <nav className="flex flex-col gap-3">
        {navItems.map(({ name, path, icon: Icon, roles }) => {
          if (roles && !roles.includes(userRole)) {
            return null; // Don't render if user doesn't have the required role
          }
          return (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl transition ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <Icon size={20} />
              {name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
