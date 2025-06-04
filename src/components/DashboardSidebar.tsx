
import { Home, Users, BarChart3, Calendar, Info, Settings, LogOut, ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Users, label: 'Employees' },
  { icon: BarChart3, label: 'Attendance' },
  { icon: Calendar, label: 'Summary' },
  { icon: Info, label: 'Information' },
];

const workspaces = [
  { name: 'Adstacks', expanded: true },
  { name: 'Finance', expanded: false },
];

export const DashboardSidebar = () => {
  const [expandedWorkspaces, setExpandedWorkspaces] = useState<string[]>(['Adstacks']);

  const toggleWorkspace = (workspace: string) => {
    setExpandedWorkspaces(prev => 
      prev.includes(workspace) 
        ? prev.filter(w => w !== workspace)
        : [...prev, workspace]
    );
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo and User */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AS</span>
          </div>
          <span className="font-semibold text-gray-900">Adstacks</span>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">PM</span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm text-gray-900">Pooja Mishra</p>
            <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Workspaces */}
        <div className="mt-8">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Workspaces
            </span>
            <Plus className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
          
          <ul className="mt-2 space-y-1">
            {workspaces.map((workspace) => (
              <li key={workspace.name}>
                <button
                  onClick={() => toggleWorkspace(workspace.name)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <span>{workspace.name}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${
                      expandedWorkspaces.includes(workspace.name) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              <Settings className="w-4 h-4" />
              Setting
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              <LogOut className="w-4 h-4" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
