import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { internships } from '../data/internships';
import InternshipCard from '../components/InternshipCard';

/**
 * Dashboard/Home Page
 * 
 * Hero section with search and recommended internships
 */

const DashboardPage = ({ user, navigateTo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState(new Set());

  // Calculate statistics
  const stats = useMemo(() => {
    const totalMatches = internships.length;
    const averageSalary = Math.round(
      internships.reduce((sum, i) => sum + i.salary, 0) / totalMatches
    );
    const remoteCount = internships.filter(i => i.workMode === 'Remote').length;
    const perfectMatches = 0; // Would be calculated based on user profile

    return { totalMatches, averageSalary, remoteCount, perfectMatches };
  }, []);

  // Get recommended internships (top 6 by salary)
  const recommendedInternships = useMemo(() => {
    return [...internships]
      .sort((a, b) => b.salary - a.salary)
      .slice(0, 6)
      .map(internship => ({
        ...internship,
        matchPercentage: 85 // Placeholder
      }));
  }, []);

  // Get top companies
  const topCompanies = useMemo(() => {
    const companyMap = new Map();
    internships.forEach(internship => {
      if (!companyMap.has(internship.company)) {
        companyMap.set(internship.company, {
          name: internship.company,
          count: 0,
          avgSalary: 0
        });
      }
      const company = companyMap.get(internship.company);
      company.count++;
      company.avgSalary = (company.avgSalary * (company.count - 1) + internship.salary) / company.count;
    });
    return Array.from(companyMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-black mb-4">
              Find Your Perfect Internship in India
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Match your skills with top opportunities
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search internships, companies, skills..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Remote
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Hybrid
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                On-site
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Bangalore
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Mumbai
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-1">Total Matches</p>
              <p className="text-3xl font-bold text-black">{stats.totalMatches}</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-1">Average Salary</p>
              <p className="text-3xl font-bold text-black">₹{stats.averageSalary.toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-1">Remote Opportunities</p>
              <p className="text-3xl font-bold text-black">{stats.remoteCount}</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-1">Perfect Matches</p>
              <p className="text-3xl font-bold text-black">{stats.perfectMatches}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended For You */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-black">Recommended For You</h2>
            <button
              onClick={() => navigateTo('browse')}
              className="text-gray-600 hover:text-black transition-colors"
            >
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedInternships.map(internship => (
              <InternshipCard
                key={internship.id}
                internship={internship}
                userSkills={selectedSkills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Hiring */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-black">Top Companies Hiring</h2>
            <button
              onClick={() => navigateTo('companies')}
              className="text-gray-600 hover:text-black transition-colors"
            >
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topCompanies.map((company, index) => (
              <button
                key={index}
                onClick={() => navigateTo('companies')}
                className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {company.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-black mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.count} open positions</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;

