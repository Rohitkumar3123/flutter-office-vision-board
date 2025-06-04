
import { ArrowRight, Edit3 } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Technology behind the Blockchain',
      subtitle: 'Project #1',
      status: 'See project details',
      featured: true
    },
    {
      id: 2,
      title: 'Technology behind the Blockchain',
      subtitle: 'Project #1',
      status: 'See project details',
      featured: false
    },
    {
      id: 3,
      title: 'Technology behind the Blockchain',
      subtitle: 'Project #1',
      status: 'See project details',
      featured: false
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Featured Project */}
      <div className="lg:col-span-2">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="bg-white/20 text-xs px-3 py-1 rounded-full inline-block mb-4 backdrop-blur-sm">
              ETHEREUM 2.0
            </div>
            <h2 className="text-3xl font-bold mb-2">Top Rating Project</h2>
            <p className="text-white/90 mb-6 max-w-md">
              Trending project and high rating Project Created by team.
            </p>
            <button className="bg-black/30 hover:bg-black/40 text-white px-6 py-2 rounded-lg transition-colors backdrop-blur-sm">
              Learn More.
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-4 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
      </div>

      {/* All Projects */}
      <div className="bg-dashboard-dark rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-6">All Projects</h3>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={project.id} className={`p-4 rounded-lg ${index === 0 ? 'bg-red-500' : 'bg-dashboard-dark-light'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-xs">🔗</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{project.title}</h4>
                  <p className="text-xs text-gray-300">{project.subtitle} • {project.status}</p>
                </div>
                <Edit3 className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
