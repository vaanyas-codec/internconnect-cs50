import { Bookmark, ExternalLink } from 'lucide-react';
import { useState } from 'react';

/**
 * Resources/Knowledge Page
 * 
 * Career resources and articles
 */

const ResourcesPage = ({ navigateTo }) => {
  const [savedResources, setSavedResources] = useState(new Set());

  const resources = [
    {
      id: 1,
      title: "How to Write a Resume",
      description: "Learn the essential tips and tricks to create a standout resume that gets you noticed by recruiters. Includes templates and examples.",
      category: "Resume",
      type: "internal",
      route: "resume-guide"
    },
    {
      id: 2,
      title: "Interview Preparation Tips",
      description: "Master your interview skills with our comprehensive guide covering common questions, body language, and follow-up strategies.",
      category: "Interview",
      type: "external",
      url: "https://www.geeksforgeeks.org/company-interview-corner/"
    },
    {
      id: 3,
      title: "Internship to Full-Time Conversion",
      description: "Discover how to maximize your internship experience and increase your chances of securing a full-time position.",
      category: "Career",
      type: "internal",
      route: "internship-conversion"
    },
    {
      id: 4,
      title: "Top Skills for 2024",
      description: "Stay ahead of the curve by learning about the most in-demand technical and soft skills in the current job market.",
      category: "Skills",
      type: "external",
      url: "https://www.naukri.com/learning/"
    },
    {
      id: 5,
      title: "Company Culture Guides",
      description: "Understand what to look for in company culture and how to find the right fit for your career goals and values.",
      category: "Culture",
      type: "external",
      url: "https://www.glassdoor.co.in/"
    },
    {
      id: 6,
      title: "Salary Negotiation",
      description: "Learn effective strategies for negotiating your internship stipend and future salary with confidence and professionalism.",
      category: "Career",
      type: "external",
      url: "https://www.ambitionbox.com/"
    }
  ];

  const toggleSave = (resourceId) => {
    setSavedResources(prev => {
      const newSet = new Set(prev);
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId);
      } else {
        newSet.add(resourceId);
      }
      return newSet;
    });
  };

  const handleReadMore = (resource) => {
    if (resource.type === 'external') {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
    } else {
      navigateTo(`resource-${resource.route}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Career Resources</h1>
          <p className="text-xl text-gray-600">Expert advice and guides to help you succeed</p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map(resource => (
            <div
              key={resource.id}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gray-200"></div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {resource.category}
                  </span>
                  <button
                    onClick={() => toggleSave(resource.id)}
                    className={`p-1 transition-colors ${
                      savedResources.has(resource.id)
                        ? 'text-gray-800'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Bookmark size={20} className={savedResources.has(resource.id) ? 'fill-current' : ''} />
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">{resource.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>
                
                <button
                  onClick={() => handleReadMore(resource)}
                  className="w-full border-2 border-black text-black py-2 rounded-lg font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Read More
                  {resource.type === 'external' && <ExternalLink size={16} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
