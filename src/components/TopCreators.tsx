
const creators = [
  { name: '@maddison_c21', artworks: '9821', rating: 95 },
  { name: '@karl.will02', artworks: '7032', rating: 92 },
  { name: '@maddison_c21', artworks: '9821', rating: 90 },
  { name: '@maddison_c21', artworks: '9821', rating: 88 },
];

export const TopCreators = () => {
  return (
    <div className="bg-dashboard-dark rounded-2xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-6">Top Creators</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-400 px-4">
          <span>Name</span>
          <span>Artworks</span>
          <span>Rating</span>
        </div>
        
        {creators.map((creator, index) => (
          <div key={index} className="flex items-center gap-4 p-4 hover:bg-dashboard-dark-light rounded-lg transition-colors">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-medium text-sm">
                {creator.name.charAt(1).toUpperCase()}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 flex-1">
              <span className="font-medium">{creator.name}</span>
              <span className="text-gray-300">{creator.artworks}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${creator.rating}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-300">{creator.rating}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
