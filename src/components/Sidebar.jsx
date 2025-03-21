import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, Settings, BarChart2, Layers, CheckSquare, PieChart,
  Users, HelpCircle, Search, LogOut, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/Logomark.png";
import ProfilePic from "@/assets/Image wrap.png";
import Avatar from "@/assets/Avatar.png";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile header - always visible on mobile */}
      <header className="fixed top-0 left-0 right-0 z-20 md:hidden flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Untitled UI Logo"
            className="w-8 h-8 mr-3"
          />
          <span className="font-semibold">Untitled UI</span>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
          <Menu className="w-6 h-6" />
        </Button>
      </header>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Sidebar for both mobile and desktop */}
      <aside className={cn(
        "flex flex-col bg-white border-r h-screen overflow-hidden transition-all duration-300 ease-in-out",
        "w-72 fixed md:sticky top-0 left-0 z-50",
        "md:translate-x-0", // Always visible on desktop
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full", // Toggle visibility on mobile
      )}>
        {/* Sidebar header */}
        <div className="p-4 flex justify-between items-center border-b md:border-b-0">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Untitled UI Logo"
              className="w-8 h-8"
            />
            <span className="font-semibold">Untitled UI</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              type="text" 
              placeholder="Olivia Rhye" 
              className="pl-9 bg-white border-purple-200 ring-1 ring-purple-100 rounded-lg w-full focus:border-purple-300 focus:ring-purple-200"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                )}
              >
                <Home className="w-5 h-5 mr-3 text-gray-600" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                )}
              >
                <BarChart2 className="w-5 h-5 mr-3 text-gray-600" />
                Dashboard
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-0.5">10</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                )}
              >
                <Layers className="w-5 h-5 mr-3 text-gray-600" />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tasks" 
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                )}
              >
                <CheckSquare className="w-5 h-5 mr-3 text-gray-600" />
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/reporting" 
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                )}
              >
                <PieChart className="w-5 h-5 mr-3 text-gray-600" />
                Reporting
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/users" 
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                )}
              >
                <Users className="w-5 h-5 mr-3 text-gray-600" />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support" 
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                )}
              >
                <HelpCircle className="w-5 h-5 mr-3 text-gray-600" />
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings" 
                className={({ isActive }) => cn(
                  "flex items-center px-3 py-2 rounded-md text-sm text-gray-700",
                  isActive ? "bg-gray-100 font-medium" : "hover:bg-gray-50",
                  "bg-gray-100 font-medium" // Always active for this page
                )}
              >
                <Settings className="w-5 h-5 mr-3 text-gray-600" />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* New features alert */}
        <div className="p-4 mx-4 my-2 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium">New features available!</h3>
          <p className="text-xs text-gray-500 mt-1">Check out the new dashboard view. Pages now load faster.</p>
          <div className="mt-3 mb-1">
            <img 
              src={ProfilePic} 
              alt="Profile" 
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <Button variant="ghost" size="sm" className="text-xs text-gray-500">Dismiss</Button>
            <Button variant="link" size="sm" className="text-xs text-purple-600 p-0">What's new?</Button>
          </div>
        </div>

        {/* User profile */}
        <div className="mt-auto p-4 border-t flex items-center">
          <img 
            src={Avatar} 
            alt="Profile" 
            className="w-9 h-9 rounded-full object-cover mr-3"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium truncate">Olivia Rhye</h3>
            <p className="text-xs text-gray-500 truncate">olivia@untitledui.com</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-1">
            <LogOut className="w-4 h-4 text-gray-500" />
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 