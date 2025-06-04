
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CalendarWidget = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();
  
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = [];
  
  // Previous month's trailing days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const prevMonthDay = new Date(currentYear, currentMonth, -i).getDate();
    days.push({ day: prevMonthDay, isCurrentMonth: false });
  }
  
  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({ day, isCurrentMonth: true });
  }
  
  // Next month's leading days
  const remainingDays = 42 - days.length;
  for (let day = 1; day <= remainingDays; day++) {
    days.push({ day, isCurrentMonth: false });
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-sm text-gray-600">GENERAL 10:00 AM TO 7:00 PM</h3>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <h4 className="font-semibold text-gray-900">
            {monthNames[currentMonth]} {currentYear}
          </h4>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((dateObj, index) => (
            <button
              key={index}
              className={`
                text-center py-2 text-sm rounded transition-colors
                ${!dateObj.isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
                ${dateObj.day === today && dateObj.isCurrentMonth ? 'bg-purple-500 text-white font-medium' : 'hover:bg-gray-100'}
                ${dateObj.day === 27 && dateObj.isCurrentMonth ? 'bg-blue-100 text-blue-600' : ''}
                ${dateObj.day === 30 && dateObj.isCurrentMonth ? 'bg-purple-100 text-purple-600' : ''}
              `}
            >
              {dateObj.day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
