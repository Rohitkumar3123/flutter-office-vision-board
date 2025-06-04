
import { Search, ExternalLink, Bell, Clock } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold text-gray-900">Home</h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all w-80"
            />
          </div>
          
          {/* Action buttons */}
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ExternalLink className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Clock className="w-5 h-5" />
          </button>
          
          {/* User avatar */}
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">PM</span>
          </div>
        </div>
      </div>
    </header>
  );
};
