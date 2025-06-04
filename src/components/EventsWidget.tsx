
import { Gift, Calendar } from 'lucide-react';

const events = [
  {
    type: 'birthday',
    title: 'Today Birthday',
    count: 2,
    people: [
      { name: 'John', avatar: 'JD' },
      { name: 'Jane', avatar: 'JS' }
    ],
    buttonText: 'Birthday Wishing',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    type: 'anniversary',
    title: 'Anniversary',
    count: 3,
    people: [
      { name: 'Mike', avatar: 'MR' },
      { name: 'Sarah', avatar: 'SJ' },
      { name: 'Tom', avatar: 'TB' }
    ],
    buttonText: 'Anniversary Wishing',
    gradient: 'from-blue-500 to-purple-500'
  }
];

export const EventsWidget = () => {
  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <div key={index} className="bg-dashboard-dark rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            {event.type === 'birthday' ? (
              <Gift className="w-5 h-5 text-yellow-400" />
            ) : (
              <Calendar className="w-5 h-5 text-blue-400" />
            )}
            <h3 className="font-semibold">{event.title}</h3>
            {event.type === 'birthday' && <span className="text-yellow-400">✨</span>}
            {event.type === 'anniversary' && <span className="text-blue-400">✨</span>}
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-2">
              {event.people.map((person, personIndex) => (
                <div
                  key={personIndex}
                  className={`w-10 h-10 bg-gradient-to-r ${event.gradient} rounded-full flex items-center justify-center border-2 border-dashboard-dark text-white font-medium text-sm`}
                >
                  {person.avatar}
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-300 text-sm">Total</p>
              <p className="font-bold text-2xl">{event.count}</p>
            </div>
          </div>
          
          <button className={`w-full bg-gradient-to-r ${event.gradient} text-white py-2 px-4 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity`}>
            🎉 {event.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};
