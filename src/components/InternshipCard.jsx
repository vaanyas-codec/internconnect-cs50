/**
 * Internship Card Component
 * 
 * Displays individual internship information in a card format.
 */

const InternshipCard = ({ internship, userSkills }) => {
  // Convert skills to Set for efficient lookup
  const userSkillsSet = new Set(userSkills);
  const internshipSkillsSet = new Set(internship.skills);

  // Determine match badge color based on percentage (grayscale only)
  const getMatchBadgeColor = (percentage) => {
    if (percentage >= 80) return 'bg-gray-800 text-white';
    if (percentage >= 50) return 'bg-gray-600 text-white';
    return 'bg-gray-400 text-white';
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
      {/* Header with Company and Match Badge */}
      <div className="bg-gray-50 border-b border-gray-300 p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold text-lg">
              {internship.company.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-lg text-black">{internship.company}</h3>
              <p className="text-sm text-gray-600">{internship.title}</p>
            </div>
          </div>
          <div className={`${getMatchBadgeColor(internship.matchPercentage)} px-3 py-1 rounded text-sm font-semibold`}>
            {internship.matchPercentage}% Match
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Salary */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-black">
            ₹{internship.salary.toLocaleString('en-IN')}
          </span>
          <span className="text-gray-600">/month</span>
        </div>

        {/* Location and Work Mode */}
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          <span>{internship.location}</span>
          <span>•</span>
          <span>{internship.workMode}</span>
          <span>•</span>
          <span>{internship.duration} weeks</span>
        </div>

        {/* Required Skills */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
          <div className="flex flex-wrap gap-2">
            {internship.skills.map(skill => {
              // Check if skill matches user's selected skills
              const isMatched = userSkillsSet.has(skill);
              return (
                <span
                  key={skill}
                  className={`px-2 py-1 rounded text-xs font-medium border ${
                    isMatched
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {skill}
                  {isMatched && ' ✓'}
                </span>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            <span className="font-medium">Min CGPA:</span> {internship.minCGPA}
          </div>
          <div className="text-xs text-gray-500">
            <span className="font-medium">Industry:</span> {internship.industry}
          </div>
        </div>

        {/* View Details Button */}
        <div className="pt-4">
          <button className="w-full px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
