import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { internships, getAllSkills, getAllLocations } from '../data/internships';
import InternshipCard from '../components/InternshipCard';

/**
 * Browse Internships Page
 * 
 * Full browsing experience with filters sidebar
 */

const BrowsePage = ({ user, navigateTo }) => {
  const [selectedSkills, setSelectedSkills] = useState(new Set());
  const [customSkillInput, setCustomSkillInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [workModeFilter, setWorkModeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [selectedLocations, setSelectedLocations] = useState(new Set());
  const [minSalary, setMinSalary] = useState(0);
  const [sortBy, setSortBy] = useState('Best Match');

  const allSkills = getAllSkills();
  const allLocations = getAllLocations();
  const maxSalary = Math.max(...internships.map(i => i.salary));

  // Calculate match percentage
  const calculateMatchPercentage = (internship) => {
    let score = 0;
    let maxScore = 0;

    const userSkillsSet = new Set(selectedSkills);
    const internshipSkillsSet = new Set(internship.skills);
    const commonSkills = [...userSkillsSet].filter(skill => 
      internshipSkillsSet.has(skill)
    );
    
    maxScore += 50;
    if (userSkillsSet.size > 0) {
      const skillMatchRatio = commonSkills.length / Math.max(userSkillsSet.size, internshipSkillsSet.size);
      score += skillMatchRatio * 50;
    } else {
      score += 25;
    }

    maxScore += 30;
    if (internship.location === user?.preferredLocation) {
      score += 30;
    } else {
      score += 5;
    }

    maxScore += 20;
    if (internship.workMode === user?.workMode) {
      score += 20;
    } else if (user?.workMode === 'Hybrid' || internship.workMode === 'Hybrid') {
      score += 10;
    } else {
      score += 2;
    }

    return Math.round((score / maxScore) * 100);
  };

  // Filter and sort internships
  const filteredAndSortedInternships = useMemo(() => {
    let filtered = internships.filter(internship => {
      if (user) {
        const userCGPA = parseFloat(user.cgpa);
        const normalizedCGPA = userCGPA;
        return normalizedCGPA >= internship.minCGPA;
      }
      return true;
    });

    if (workModeFilter !== 'All') {
      filtered = filtered.filter(internship => 
        internship.workMode === workModeFilter
      );
    }

    if (locationFilter !== 'All') {
      filtered = filtered.filter(internship => 
        internship.location === locationFilter
      );
    }

    if (selectedLocations.size > 0) {
      filtered = filtered.filter(internship =>
        selectedLocations.has(internship.location)
      );
    }

    filtered = filtered.filter(internship => 
      internship.salary >= minSalary
    );

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(internship => 
        internship.company.toLowerCase().includes(query) ||
        internship.title.toLowerCase().includes(query) ||
        internship.location.toLowerCase().includes(query) ||
        internship.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    filtered = filtered.map(internship => ({
      ...internship,
      matchPercentage: calculateMatchPercentage(internship)
    }));

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'Best Match':
          if (b.matchPercentage !== a.matchPercentage) {
            return b.matchPercentage - a.matchPercentage;
          }
          return b.salary - a.salary;
        case 'Highest Salary':
          if (b.salary !== a.salary) {
            return b.salary - a.salary;
          }
          return b.matchPercentage - a.matchPercentage;
        case 'Company Name':
          return a.company.localeCompare(b.company);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedSkills, searchQuery, workModeFilter, locationFilter, selectedLocations, minSalary, sortBy, user]);

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skill)) {
        newSet.delete(skill);
      } else {
        newSet.add(skill);
      }
      return newSet;
    });
  };

  const addCustomSkill = () => {
    const skill = customSkillInput.trim();
    if (skill && !selectedSkills.has(skill)) {
      setSelectedSkills(prev => new Set([...prev, skill]));
      setCustomSkillInput('');
    }
  };

  const toggleLocation = (location) => {
    setSelectedLocations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(location)) {
        newSet.delete(location);
      } else {
        newSet.add(location);
      }
      return newSet;
    });
  };

  const clearAllFilters = () => {
    setSelectedSkills(new Set());
    setSelectedLocations(new Set());
    setSearchQuery('');
    setWorkModeFilter('All');
    setLocationFilter('All');
    setMinSalary(0);
    setSortBy('Best Match');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="lg:w-80 space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-black mb-6">Filters</h2>

              <div className="space-y-6">
                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  >
                    <option>Best Match</option>
                    <option>Highest Salary</option>
                    <option>Company Name</option>
                  </select>
                </div>

                {/* Work Mode Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Mode
                  </label>
                  <select
                    value={workModeFilter}
                    onChange={(e) => setWorkModeFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  >
                    <option>All</option>
                    <option>Remote</option>
                    <option>On-site</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                {/* Location Filter - Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3">
                    {allLocations.map(loc => (
                      <label key={loc} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedLocations.has(loc)}
                          onChange={() => toggleLocation(loc)}
                          className="w-4 h-4 text-black focus:ring-gray-400"
                        />
                        <span className="ml-2 text-sm text-gray-700">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Minimum Salary Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Salary: ₹{minSalary.toLocaleString('en-IN')}/month
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={maxSalary}
                    value={minSalary}
                    onChange={(e) => setMinSalary(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Select Skills */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Skills
                  </label>
                  
                  {/* Add Custom Skill */}
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={customSkillInput}
                      onChange={(e) => setCustomSkillInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()}
                      placeholder="Add custom skill"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    />
                    <button
                      onClick={addCustomSkill}
                      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  {/* Selected Skills Pills */}
                  {selectedSkills.size > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Array.from(selectedSkills).map(skill => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm border border-gray-300"
                        >
                          {skill}
                          <button
                            onClick={() => toggleSkill(skill)}
                            className="hover:text-gray-600"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Suggested Skills */}
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {allSkills.map(skill => (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors border ${
                          selectedSkills.has(skill)
                            ? 'bg-gray-800 text-white border-gray-800'
                            : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear All Filters */}
                <button
                  onClick={clearAllFilters}
                  className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg border border-gray-300 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search companies, titles, locations, skills..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-gray-600">
              <p>
                Found <span className="font-semibold text-black">{filteredAndSortedInternships.length}</span> internship{filteredAndSortedInternships.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Internship Cards */}
            {filteredAndSortedInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAndSortedInternships.map(internship => (
                  <div
                    key={internship.id}
                    onClick={() => navigateTo('internship', internship.id)}
                    className="cursor-pointer"
                  >
                    <InternshipCard
                      internship={internship}
                      userSkills={selectedSkills}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-300 rounded-lg p-12 text-center">
                <p className="text-xl text-gray-600 mb-2">No internships found</p>
                <p className="text-gray-500">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;

