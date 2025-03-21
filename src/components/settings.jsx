import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, Settings, BarChart2, Layers, CheckSquare, PieChart,
  Users, HelpCircle, Search, LogOut, Menu, X, Mail, CloudDownload, Check, MoreVertical, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/assets/Logomark.png";
import ProfilePic from "@/assets/Image wrap.png";
import Avatar from "@/assets/Avatar.png";
import AvatarWrap from "@/assets/Avatar wrap.png";
import AvatarWrap1 from "@/assets/Avatar wrap (1).png";
import AvatarWrap2 from "@/assets/Avatar wrap (2).png";
import AvatarWrap3 from "@/assets/Avatar wrap (3).png";
import AvatarWrap4 from "@/assets/Avatar wrap (4).png";

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

const SettingsContent = () => {
  return (
    <main className="flex-1 px-6 py-6 bg-gray-50 min-h-screen overflow-auto">
      {/* Add margin-top on mobile to account for the fixed header */}
      <div className="w-full max-w-full mx-auto mt-14 md:mt-0 pr-6">
        <h1 className="text-2xl font-bold mb-1">Settings</h1>
        <p className="text-gray-600 mb-6">Manage your team and preferences here.</p>

        {/* Navigation Tabs - Updated for better mobile handling */}
        <div className="relative w-full mb-6">
          <div className="bg-white rounded-md shadow-sm overflow-x-auto no-scrollbar">
            <div className="inline-flex min-w-full">
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 border-r border-gray-200 whitespace-nowrap">My details</Button>
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 border-r border-gray-200 whitespace-nowrap">Profile</Button>
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 border-r border-gray-200 whitespace-nowrap">Password</Button>
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 border-r border-gray-200 whitespace-nowrap">Team</Button>
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 border-r border-gray-200 whitespace-nowrap">Plan</Button>
              <Button variant="link" className="text-gray-800 px-4 py-2 text-sm font-medium border-b-2 border-gray-800 border-r border-gray-200 bg-gray-100 whitespace-nowrap">Roles</Button>
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 border-r border-gray-200 whitespace-nowrap">Notifications</Button>
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 border-r border-gray-200 whitespace-nowrap">Integrations</Button>
              <Button variant="link" className="text-gray-600 px-4 py-2 text-sm font-medium hover:text-gray-800 whitespace-nowrap">API</Button>
            </div>
          </div>
        </div>

        {/* User Roles Section */}
        <div className="mb-8 bg-gray rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">User Roles</h2>
          <p className="text-sm text-gray-500 mb-6">Update your roles details and information.</p>

          {/* Connected Email */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex flex-col md:flex-row md:gap-10">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Connected email</h3>
                <p className="text-sm text-gray-500">Select role account</p>
              </div>
              
              <div className="md:w-3/4 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input 
                      id="account-email"
                      type="radio" 
                      name="email" 
                      className="h-4 w-4 bg-white border-gray-300 text-purple-600 focus:ring-purple-500 accent-purple-600 checked:appearance-auto"
                    />
                  </div>
                  <label htmlFor="account-email" className="ms-2 block">
                    <span className="text-sm font-medium text-gray-700">My account email</span>
                    <span className="text-sm text-gray-500 ml-2">olivia@untitledui.com</span>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input 
                      id="alternative-email"
                      type="radio" 
                      name="email" 
                      className="h-4 w-4 bg-white border-gray-300 text-purple-600 focus:ring-purple-500 accent-purple-600 checked:appearance-auto"
                      defaultChecked
                    />
                  </div>
                  <label htmlFor="alternative-email" className="ms-2 block text-sm font-medium text-gray-700">
                    An alternative email
                  </label>
                </div>
                
                <div className="pl-6 mt-2">
                  <div className="relative w-full max-w-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      defaultValue="billing@untitledui.com"
                      className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Role */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex flex-col md:flex-row md:gap-10">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Active Role</h3>
                <p className="text-sm text-gray-500">Select active role available to the user.</p>
              </div>
              
              <div className="md:w-3/4 space-y-4">
                <div className="bg-purple-50 rounded-lg border border-purple-200 p-4 flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-purple-700 font-medium">Superadmin</h4>
                        <p className="text-purple-600 text-sm">Last active 06/2023</p>
                      </div>
                      <div className="relative">
                        <input 
                          type="radio" 
                          name="role" 
                          className="sr-only peer" 
                          id="role-superadmin"
                          defaultChecked 
                        />
                        <label 
                          htmlFor="role-superadmin" 
                          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white peer-checked:bg-purple-600 peer-checked:border-purple-600"
                        >
                          <Check className="h-3 w-3 text-white hidden peer-checked:block" />
                        </label>
                      </div>
                    </div>
                    <div className="flex space-x-3 mt-2">
                      <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">Set as default</Button>
                      <Button variant="link" className="p-0 h-auto text-purple-600 text-sm">Edit</Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-700 font-medium">Developeradmin</h4>
                        <p className="text-gray-500 text-sm">Last active 01/2023</p>
                      </div>
                      <div className="relative">
                        <input 
                          type="radio" 
                          name="role" 
                          className="sr-only peer" 
                          id="role-developeradmin"
                        />
                        <label 
                          htmlFor="role-developeradmin" 
                          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white peer-checked:bg-purple-600 peer-checked:border-purple-600"
                        >
                          <Check className="h-3 w-3 text-white hidden peer-checked:block" />
                        </label>
                      </div>
                    </div>
                    <div className="flex space-x-3 mt-2">
                      <Button variant="link" className="p-0 h-auto text-gray-500 text-sm">Set as default</Button>
                      <Button variant="link" className="p-0 h-auto text-gray-500 text-sm">Edit</Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-700 font-medium">Supportadmin</h4>
                        <p className="text-gray-500 text-sm">Last active 10/2022</p>
                      </div>
                      <div className="relative">
                        <input 
                          type="radio" 
                          name="role" 
                          className="sr-only peer" 
                          id="role-supportadmin"
                        />
                        <label 
                          htmlFor="role-supportadmin" 
                          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white peer-checked:bg-purple-600 peer-checked:border-purple-600"
                        >
                          <Check className="h-3 w-3 text-white hidden peer-checked:block" />
                        </label>
                      </div>
                    </div>
                    <div className="flex space-x-3 mt-2">
                      <Button variant="link" className="p-0 h-auto text-gray-500 text-sm">Set as default</Button>
                      <Button variant="link" className="p-0 h-auto text-gray-500 text-sm">Edit</Button>
                    </div>
                  </div>
                </div>

                <Button variant="link" className="flex items-center text-gray-500 text-sm p-0">
                  <span className="flex items-center justify-center w-5 h-5 text-gray-400 mr-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Add role to user
                </Button>
              </div>
            </div>
          </div>

          {/* User Roles Table */}
          <div>
            {/* Table Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-1 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">User Roles</h2>
                {/* <p className="text-sm text-gray-500">Manage your team member's roles</p> */}
              </div>
              <Button variant="outline" size="sm" className="h-8 px-3 text-gray-700 border-gray-300 rounded-md mt-4 md:mt-0">
                <CloudDownload className="h-4 w-4 mr-2" />
                Download All
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-md">
                <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase">
                  <tr>
                    <th scope="col" className="pl-4 pr-2 py-3 text-left">
                      <Checkbox className="h-4 w-4" />
                    </th>
                    <th scope="col" className="px-4 py-3 text-left">Name</th>
                    <th scope="col" className="px-4 py-3 text-left">Type</th>
                    <th scope="col" className="px-4 py-3 text-left">Date created</th>
                    <th scope="col" className="px-4 py-3 text-left">Status</th>
                    <th scope="col" className="px-4 py-3 text-left">Role users</th>
                    <th scope="col" className="w-10 px-2 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50">
                    <td className="pl-4 pr-2 py-3">
                      <Checkbox className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Superadmin</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">DEFAULT</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">Jan 1, 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          <img src={AvatarWrap} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap1} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap2} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap3} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap4} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                        </div>
                        <span className="ml-1 text-xs text-gray-500">+2</span>
                      </div>
                    </td>
                    <td className="w-10 px-2 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <CloudDownload className="h-4 w-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50">
                    <td className="pl-4 pr-2 py-3">
                      <Checkbox className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Merchantadmin</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">DEFAULT</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">Feb 1, 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                           <img src={AvatarWrap} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap1} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap2} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap3} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap4} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                        </div>
                        <span className="ml-1 text-xs text-gray-500">+1</span>
                      </div>
                    </td>
                    <td className="w-10 px-2 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <CloudDownload className="h-4 w-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50">
                    <td className="pl-4 pr-2 py-3">
                      <Checkbox className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Supportadmin</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">DEFAULT</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">Feb 1, 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                            <img src={AvatarWrap} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap1} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap2} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap3} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap4} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                        </div>
                      </div>
                    </td>
                    <td className="w-10 px-2 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <CloudDownload className="h-4 w-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-gray-50">
                    <td className="pl-4 pr-2 py-3">
                      <Checkbox className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Sales personnel</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">CUSTOM</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">Mar 1, 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                            <img src={AvatarWrap} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap1} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap2} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                        </div>
                      </div>
                    </td>
                    <td className="w-10 px-2 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <CloudDownload className="h-4 w-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-gray-50">
                    <td className="pl-4 pr-2 py-3">
                      <Checkbox className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Deputy sales personnel</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">CUSTOM</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">Apr 1, 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#F2994A] text-white">
                        In Active
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                              <img src={AvatarWrap} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap1} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap2} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap3} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                        </div>
                      </div>
                    </td>
                    <td className="w-10 px-2 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <CloudDownload className="h-4 w-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="hover:bg-gray-50">
                    <td className="pl-4 pr-2 py-3">
                      <Checkbox className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Developeradmin</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">SYSTEM-CUSTOM</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">May 1, 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                             <img src={AvatarWrap} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap1} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap2} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap3} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                        </div>
                      </div>
                    </td>
                    <td className="w-10 px-2 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <CloudDownload className="h-4 w-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                  {/* Row 7 */}
                  <tr className="hover:bg-gray-50">
                    <td className="pl-4 pr-2 py-3">
                      <Checkbox className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">Developer-basic</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">SYSTEM-CUSTOM</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-500">Jun 1, 2023</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <Check className="w-3 h-3 mr-1" /> Active
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                              <img src={AvatarWrap} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap1} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                          <img src={AvatarWrap2} alt="User avatar" className="h-6 w-6 rounded-full border-2 border-white" />
                        </div>
                      </div>
                    </td>
                    <td className="w-10 px-2 py-3 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <CloudDownload className="h-4 w-4 text-gray-500" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const SettingsPage = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen w-full">
      {/* This is a flex container for desktop layout */}
      <div className="flex">
        {/* Sidebar */}
      <Sidebar />
        
        {/* Main content area - takes available space */}
        <div className="flex-1 min-w-0">
      <SettingsContent />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
