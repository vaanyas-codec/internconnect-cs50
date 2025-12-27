import { useState, useMemo } from 'react';
import { LogOut, Search, X } from 'lucide-react';
import { internships, getAllSkills, getAllLocations } from '../data/internships';
import StatsDashboard from './StatsDashboard';
import InternshipCard from './InternshipCard';
import Footer from './Footer';

/**
 * Dashboard Component
 * 
 * This is the main component that displays internships and handles matching.
 */

const Dashboard = ({ user, onLogout }) => {
  // State management for filters and search
  const [selectedSkills, setSelectedSkills] = useState(new Set());
  const [customSkillInput, setCustomSkillInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [workModeFilter, setWorkModeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [minSalary, setMinSalary] = useState(0);
  const [sortBy, setSortBy] = useState('Best Match');

  // Get all available skills and locations
  const allSkills = getAllSkills();
  const allLocations = getAllLocations();

  // Calculate max salary for slider
  const maxSalary = Math.max(...internships.map(i => i.salary));

  /**
   * MATCHING ALGORITHM
   * 
   * Calculates match percentage for each internship based on:
   * - Skill matching (50% weight)
   * - Location matching (30% weight)
   * - Work mode matching (20% weight)
   */
  const calculateMatchPercentage = (internship) => {
    let score = 0;
    let maxScore = 0;

    // Skill matching using Set intersection
    const userSkillsSet = new Set(selectedSkills);
    const internshipSkillsSet = new Set(internship.skills);
    
    // Find intersection (common skills)
    const commonSkills = [...userSkillsSet].filter(skill => 
      internshipSkillsSet.has(skill)
    );
    
    // Skill match: 50% weight
    maxScore += 50;
    if (userSkillsSet.size > 0) {
      const skillMatchRatio = commonSkills.length / Math.max(userSkillsSet.size, internshipSkillsSet.size);
      score += skillMatchRatio * 50;
    } else {
      score += 25; // Base score if no skills selected
    }

    // Location match: 30% weight
    maxScore += 30;
    if (internship.location === user.preferredLocation) {
      score += 30;
    } else {
      score += 5; // Partial match
    }

    // Work mode match: 20% weight
    maxScore += 20;
    if (internship.workMode === user.workMode) {
      score += 20;
    } else if (user.workMode === 'Hybrid' || internship.workMode === 'Hybrid') {
      score += 10; // Partial match for hybrid
    } else {
      score += 2;
    }

    // Calculate percentage
    return Math.round((score / maxScore) * 100);
  };

  /**
   * FILTER AND SORT INTERNSHIPS
   */
  const filteredAndSortedInternships = useMemo(() => {
    // Step 1: Filter by CGPA requirement
    let filtered = internships.filter(internship => {
      const userCGPA = parseFloat(user.cgpa);
      const maxCGPA = user.cgpaScale === '4' ? 4 : 10;
      const normalizedCGPA = user.cgpaScale === '4' 
        ? userCGPA 
        : (userCGPA / 10) * 4; // Normalize to 4.0 scale
      return normalizedCGPA >= internship.minCGPA;
    });

    // Step 2: Filter by work mode
    if (workModeFilter !== 'All') {
      filtered = filtered.filter(internship => 
        internship.workMode === workModeFilter
      );
    }

    // Step 3: Filter by location
    if (locationFilter !== 'All') {
      filtered = filtered.filter(internship => 
        internship.location === locationFilter
      );
    }

    // Step 4: Filter by minimum salary
    filtered = filtered.filter(internship => 
      internship.salary >= minSalary
    );

    // Step 5: Search algorithm - linear search through all fields
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(internship => 
        internship.company.toLowerCase().includes(query) ||
        internship.title.toLowerCase().includes(query) ||
        internship.location.toLowerCase().includes(query) ||
        internship.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Step 6: Calculate match percentages and add to each internship
    filtered = filtered.map(internship => ({
      ...internship,
      matchPercentage: calculateMatchPercentage(internship)
    }));

    // Step 7: Sort using custom comparison functions
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
  }, [selectedSkills, searchQuery, workModeFilter, locationFilter, minSalary, sortBy, user]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalMatches = filteredAndSortedInternships.length;
    const averageSalary = totalMatches > 0
      ? Math.round(filteredAndSortedInternships.reduce((sum, i) => sum + i.salary, 0) / totalMatches)
      : 0;
    const remoteCount = filteredAndSortedInternships.filter(i => i.workMode === 'Remote').length;
    const perfectMatches = filteredAndSortedInternships.filter(i => i.matchPercentage === 100).length;

    return { totalMatches, averageSalary, remoteCount, perfectMatches };
  }, [filteredAndSortedInternships]);

  // Toggle skill selection
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

  // Add custom skill
  const addCustomSkill = () => {
    const skill = customSkillInput.trim();
    if (skill && !selectedSkills.has(skill)) {
      setSelectedSkills(prev => new Set([...prev, skill]));
      setCustomSkillInput('');
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedSkills(new Set());
    setSearchQuery('');
    setWorkModeFilter('All');
    setLocationFilter('All');
    setMinSalary(0);
    setSortBy('Best Match');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white border-b border-gray-300 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">InternConnect</h1>
              <p className="text-gray-300 text-sm">
                Welcome, {user.fullName}
              </p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats Dashboard */}
      <StatsDashboard stats={stats} />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Filters and Skills */}
          <aside className="lg:w-80 space-y-4">
            {/* Filters Section */}
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>

              <div className="space-y-4">
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

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  >
                    <option>All</option>
                    {allLocations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
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

                {/* Clear All Filters */}
                <button
                  onClick={clearAllFilters}
                  className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg border border-gray-300 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h2 className="font-semibold text-gray-900 mb-4">Select Skills</h2>

              {/* Add Custom Skill */}
              <div className="mb-4">
                <div className="flex gap-2">
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
              </div>

              {/* Skills List */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
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

              {/* Selected Skills Pills */}
              {selectedSkills.size > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Selected Skills:</p>
                  <div className="flex flex-wrap gap-2">
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
                </div>
              )}
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
            <div className="mb-4 text-gray-600">
              <p>
                Found <span className="font-semibold text-black">{filteredAndSortedInternships.length}</span> internship{filteredAndSortedInternships.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Internship Cards */}
            {filteredAndSortedInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAndSortedInternships.map(internship => (
                  <InternshipCard
                    key={internship.id}
                    internship={internship}
                    userSkills={selectedSkills}
                  />
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

      <Footer />
    </div>
  );
};

export default Dashboard;
