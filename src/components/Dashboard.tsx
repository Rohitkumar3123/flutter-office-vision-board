
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { ProjectsSection } from './ProjectsSection';
import { PerformanceChart } from './PerformanceChart';
import { TopCreators } from './TopCreators';
import { CalendarWidget } from './CalendarWidget';
import { EventsWidget } from './EventsWidget';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top section with featured project */}
            <ProjectsSection />
            
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left column - Performance chart */}
              <div className="lg:col-span-2">
                <PerformanceChart />
              </div>
              
              {/* Right column - Calendar */}
              <div>
                <CalendarWidget />
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Top Creators */}
              <div className="lg:col-span-2">
                <TopCreators />
              </div>
              
              {/* Events */}
              <div>
                <EventsWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
