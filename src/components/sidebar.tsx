import { NavLink, useLocation } from "react-router-dom";
import { sidebarMenus } from "./sidebar-menu";
import { Pin, PinOff } from "lucide-react";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(true);

  // 🔥 FIX: role hanya dari localStorage
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("user");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setRole(parsed?.role || "");
      } catch (err) {
        console.error("Invalid user data in localStorage");
        setRole("");
      }
    }
  }, []);

  const togglePinned = () => {
    const newPinned = !isPinned;
    setIsPinned(newPinned);
    localStorage.setItem("sidebarPinned", JSON.stringify(newPinned));
  };

  const shouldBeOpen = isPinned || (!isPinned && isHovered);
  const sidebarWidth = shouldBeOpen ? "w-64" : "w-20";

  // 🔥 FIX: filter aman
  const filteredMenus = sidebarMenus.filter((menu) =>
    menu.roles.includes(role as any)
  );

  console.log("ROLE FROM STORAGE:", role);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex h-screen border-r border-gray-200 bg-white flex-col fixed transition-all duration-300 z-30 ${sidebarWidth}`}
        onMouseEnter={() => !isPinned && setIsHovered(true)}
        onMouseLeave={() => !isPinned && setIsHovered(false)}
      >
        {/* Header */}
        <div
          className={`pt-6 pb-6 flex items-center border-b ${
            shouldBeOpen ? "px-10 justify-start" : "justify-center"
          }`}
        >
          <img
            src="/images/icon-magnets.png"
            alt="MagNetS"
            className="h-10 w-10 object-contain"
          />

          {shouldBeOpen && (
            <span className="ml-3 text-xl font-bold text-gray-800">
              MagNetS
            </span>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 pt-6 overflow-y-auto">
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
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                    ${!shouldBeOpen ? "justify-center px-3" : ""}`
                  }
                  title={!shouldBeOpen ? menu.title : ""}
                >
                  <Icon
                    size={22}
                    className={`${
                      isActive ? "text-white" : "text-gray-500"
                    } flex-shrink-0`}
                  />
                  {shouldBeOpen && (
                    <span className="truncate">{menu.title}</span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 mt-auto">
          {shouldBeOpen && (
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">v1.0.0</p>
              <button
                onClick={togglePinned}
                className={`p-1.5 rounded-lg transition-all hover:bg-gray-100 ${
                  isPinned ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {isPinned ? <Pin size={16} /> : <PinOff size={16} />}
              </button>
            </div>
          )}

          {!shouldBeOpen && (
            <div className="flex justify-center">
              <button
                onClick={togglePinned}
                className="p-2 rounded-lg transition-all hover:bg-gray-100 text-gray-400"
              >
                <PinOff size={18} />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Spacer */}
      <div
        className={`hidden lg:block transition-all duration-300 ${sidebarWidth}`}
      />

      {/* Mobile Bottom Nav - MODIFIED */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
        <div className="flex justify-around py-2 px-2">
          {filteredMenus.map((menu) => {
            const Icon = menu.icon;
            const isActive = location.pathname === menu.href;

            return (
              <NavLink
                key={menu.href}
                to={menu.href}
                className={({ isActive }) =>
                  `flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white" // Changed from text-blue-600 bg-blue-50 to bg-blue-600 text-white
                      : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                <Icon
                  size={22}
                  className={isActive ? "text-white" : "text-gray-500"} // Changed from text-blue-600 to text-white
                />
                <span className={`text-[10px] mt-1 font-medium ${
                  isActive ? "text-white" : ""
                }`}> {/* Added white text for active state */}
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