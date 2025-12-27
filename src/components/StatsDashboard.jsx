/**
 * Stats Dashboard Component
 * 
 * Displays key statistics about filtered internships.
 */

const StatsDashboard = ({ stats }) => {
  const statCards = [
    {
      label: 'Total Matches',
      value: stats.totalMatches
    },
    {
      label: 'Average Salary',
      value: `₹${stats.averageSalary.toLocaleString('en-IN')}/mo`
    },
    {
      label: 'Remote Opportunities',
      value: stats.remoteCount
    },
    {
      label: 'Perfect Matches',
      value: stats.perfectMatches
    }
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-300 sticky top-[73px] z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg p-4"
            >
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-black">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
