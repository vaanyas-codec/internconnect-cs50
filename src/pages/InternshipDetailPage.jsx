import { ArrowLeft, Bookmark } from 'lucide-react';
import { internships } from '../data/internships';

/**
 * Internship Detail Page
 * 
 * Full details of a single internship
 */

const InternshipDetailPage = ({ user, internshipId, navigateTo }) => {
  const internship = internships.find(i => i.id === internshipId);

  if (!internship) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Internship not found</p>
          <button
            onClick={() => navigateTo('browse')}
            className="text-black hover:underline"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  // Get similar internships
  const similarInternships = internships
    .filter(i => 
      i.id !== internship.id && 
      (i.company === internship.company || 
       i.location === internship.location ||
       i.skills.some(skill => internship.skills.includes(skill)))
    )
    .slice(0, 3)
    .map(i => ({ ...i, matchPercentage: 75 }));

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigateTo('browse')}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Company Header Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
                {internship.company.charAt(0)}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-black mb-2">{internship.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{internship.company}</p>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <span>{internship.location}</span>
                  <span>•</span>
                  <span>{internship.workMode}</span>
                  <span>•</span>
                  <span>{internship.duration} weeks</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-black mb-2">
                ₹{internship.salary.toLocaleString('en-IN')}/month
              </div>
              <div className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block">
                85% Match
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (70%) */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Role */}
            <section className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">About the Role</h2>
              <p className="text-gray-700 leading-relaxed">
                We are looking for a talented {internship.title} to join our team. 
                This internship offers hands-on experience working on real-world projects 
                in a collaborative environment. You'll work alongside experienced professionals 
                and gain valuable industry insights.
              </p>
            </section>

            {/* Responsibilities */}
            <section className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Responsibilities</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Develop and maintain software applications using modern technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Collaborate with cross-functional teams to deliver high-quality solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Participate in code reviews and contribute to technical discussions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Write clean, maintainable, and well-documented code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Learn and adapt to new technologies and frameworks</span>
                </li>
              </ul>
            </section>

            {/* Requirements */}
            <section className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Requirements</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Currently pursuing {internship.minCGPA >= 3.5 ? 'a Bachelor\'s or Master\'s degree' : 'a Bachelor\'s degree'} in Computer Science or related field</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Minimum CGPA of {internship.minCGPA}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Strong problem-solving and analytical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Excellent communication and teamwork abilities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Passion for technology and continuous learning</span>
                </li>
              </ul>
            </section>

            {/* Required Skills */}
            <section className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm border border-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Benefits</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Competitive stipend of ₹{internship.salary.toLocaleString('en-IN')}/month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mentorship from industry experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Flexible work arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Potential for full-time conversion</span>
                </li>
              </ul>
            </section>

            {/* About the Company */}
            <section className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-black mb-4">About {internship.company}</h2>
              <p className="text-gray-700 leading-relaxed">
                {internship.company} is a leading company in the {internship.industry} industry, 
                known for innovation and excellence. We provide a dynamic work environment where 
                interns can grow their skills and make meaningful contributions to real projects.
              </p>
            </section>
          </div>

          {/* Right Column - Sidebar (30%) */}
          <div className="space-y-6">
            {/* Apply Now Button */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4">
                Apply Now
              </button>
              <button className="w-full border-2 border-black text-black py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Bookmark size={20} />
                Save for Later
              </button>
            </div>

            {/* Quick Facts */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-black">{internship.duration} weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stipend</span>
                  <span className="font-medium text-black">₹{internship.salary.toLocaleString('en-IN')}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Work Mode</span>
                  <span className="font-medium text-black">{internship.workMode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date</span>
                  <span className="font-medium text-black">Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Min CGPA</span>
                  <span className="font-medium text-black">{internship.minCGPA}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Positions</span>
                  <span className="font-medium text-black">Multiple</span>
                </div>
              </div>
            </div>

            {/* Similar Internships */}
            {similarInternships.length > 0 && (
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <h3 className="text-lg font-bold text-black mb-4">Similar Internships</h3>
                <div className="space-y-4">
                  {similarInternships.map(similar => (
                    <button
                      key={similar.id}
                      onClick={() => navigateTo('internship', similar.id)}
                      className="w-full text-left border border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors"
                    >
                      <h4 className="font-semibold text-black mb-1">{similar.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{similar.company}</p>
                      <p className="text-sm font-medium text-black">
                        ₹{similar.salary.toLocaleString('en-IN')}/mo
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetailPage;
