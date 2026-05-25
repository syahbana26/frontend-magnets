import { NavLink, useLocation } from "react-router-dom";
import { sidebarMenus } from "./sidebar-menu";
import type { Role } from "./sidebar-menu";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarProps {
  role: Role;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Sidebar({ role, isOpen, setIsOpen }: SidebarProps) {
  const location = useLocation();

  const filteredMenus = sidebarMenus.filter((menu) =>
    menu.roles.includes(role)
  );

  return (
    <>
      <aside
        className={`hidden lg:flex h-screen border-r border-gray-200 bg-white flex-col fixed transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header yang Diperbaiki */}
        <div className="px-7 pt-6 pb-6 flex items-center border-b">
          <div className="flex-1 flex items-center min-w-0">
            <img 
              src={isOpen ? "/images/magnets.png" : "/images/icon-magnets.png"} 
              alt="MagNetS"
              className={`transition-all duration-300 object-contain 
                ${isOpen ? "h-[68px] w-auto" : "h-9 w-9"}`} 
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-3 p-2 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0"
          >
            {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        {/* Menu (tidak diubah) */}
        <nav className="flex-1 px-3 pt-6">
          <div className="space-y-1">
            {filteredMenus.map((menu) => {
              const Icon = menu.icon;
              const isActive = location.pathname === menu.href;

              return (
                <NavLink
                  key={menu.href}
                  to={menu.href}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all
                     ${isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                     ${!isOpen ? "justify-center px-3" : ""}`
                  }
                >
                  <Icon size={22} className={isActive ? "text-white" : ""} />
                  {isOpen && <span>{menu.title}</span>}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {isOpen && (
          <div className="p-4 border-t border-gray-100 mt-auto">
            <p className="text-xs text-gray-400">v1.0.0</p>
          </div>
        )}
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed -bottom-1 left-0 right-0 bg-white border-t z-40">
        <div className="flex justify-around py-2">
          {filteredMenus.map((menu) => {
            const Icon = menu.icon;
            const isActive = location.pathname === menu.href;

            return (
              <NavLink
                key={menu.href}
                to={menu.href}
                className={`flex flex-col items-center py-0.5 ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}
              >
                <Icon size={20} />
                <span className="text-[9px] mt-0.5">
                  {menu.title}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}