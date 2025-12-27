import { ArrowLeft } from 'lucide-react';

/**
 * Internship Conversion Article Page
 * 
 * Guide on converting internships to full-time employment
 */

const InternshipConversionArticle = ({ navigateTo }) => {
  const relatedArticles = [
    {
      title: "How to Write a Resume",
      category: "Resume",
      onClick: () => navigateTo('resource-resume-guide')
    },
    {
      title: "Interview Preparation Tips",
      category: "Interview",
      onClick: () => window.open('https://www.geeksforgeeks.org/company-interview-corner/', '_blank', 'noopener,noreferrer')
    },
    {
      title: "Salary Negotiation",
      category: "Career",
      onClick: () => window.open('https://www.ambitionbox.com/', '_blank', 'noopener,noreferrer')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigateTo('resources')}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Resources
        </button>

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <span className="hover:text-black cursor-pointer" onClick={() => navigateTo('resources')}>Resources</span>
          <span className="mx-2">/</span>
          <span>Career Advice</span>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Converting Your Internship to Full-Time Employment
          </h1>
          <p className="text-xl text-gray-600">
            Proven strategies to turn your internship into a permanent position at top Indian companies
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-700 leading-7 mb-4">
            Landing an internship is just the first step. The ultimate goal for many students is to convert that 
            internship into a full-time job offer. In India, companies like TCS, Infosys, Wipro, and tech startups 
            like Flipkart and Zomato often hire 40-60% of their interns as full-time employees. This guide will 
            show you exactly how to position yourself for that conversion.
          </p>
          <p className="text-gray-700 leading-7">
            Converting an internship to a full-time role requires a strategic approach from day one. It's not just 
            about doing your assigned work - it's about demonstrating value, building relationships, and showing 
            that you're a long-term asset to the company. Let's explore the proven strategies that successful 
            interns use.
          </p>
        </section>

        {/* Why Companies Hire from Interns */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Why Companies Hire from Interns</h2>
          
          <p className="text-gray-700 leading-7 mb-4">
            Understanding why companies prefer to hire interns can help you align your approach:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">💰 Cost-Effective Hiring</h3>
              <p className="text-gray-700 text-sm">
                Hiring interns who already know the company culture, systems, and processes saves significant 
                onboarding time and costs. Companies save 30-40% on recruitment and training expenses.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">🎯 Proven Fit</h3>
              <p className="text-gray-700 text-sm">
                Internships serve as an extended interview. Companies have already seen your work ethic, 
                communication skills, and cultural fit over 2-6 months.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">📈 Reduced Risk</h3>
              <p className="text-gray-700 text-sm">
                Hiring someone you've worked with reduces the risk of a bad hire. Companies know your 
                strengths and areas for growth.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">🚀 Faster Productivity</h3>
              <p className="text-gray-700 text-sm">
                Interns who convert can start contributing immediately without the typical 3-6 month 
                learning curve of new hires.
              </p>
            </div>
          </div>
        </section>

        {/* Proven Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Proven Strategies to Stand Out</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">1. Exceed Expectations from Day One</h3>
              <p className="text-gray-700 leading-7 mb-3">
                Don't just complete your assigned tasks - go above and beyond. If you're asked to write a report, 
                add data visualization. If you're building a feature, suggest improvements. Show initiative and 
                ownership of your work.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Complete tasks before deadlines</li>
                <li>Ask for additional responsibilities when you finish early</li>
                <li>Propose solutions, not just problems</li>
                <li>Document your work thoroughly for future reference</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">2. Be Proactive and Self-Directed</h3>
              <p className="text-gray-700 leading-7 mb-3">
                Companies value interns who don't need constant supervision. Show that you can work independently 
                and take initiative.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> Instead of waiting for your manager to assign the next task, 
                  identify a problem in your team's workflow and propose a solution. This shows critical 
                  thinking and ownership.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">3. Maintain Consistent Performance</h3>
              <p className="text-gray-700 leading-7 mb-3">
                It's not enough to have a great first week. Maintain high performance throughout your internship. 
                Companies notice consistency and reliability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">4. Show Long-Term Thinking</h3>
              <p className="text-gray-700 leading-7 mb-3">
                Demonstrate that you're thinking beyond your internship period. Ask about long-term projects, 
                company goals, and how you can contribute to future initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Building Relationships */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Building Relationships with Team Members</h2>
          
          <p className="text-gray-700 leading-7 mb-4">
            Your relationships at work matter just as much as your technical skills. Here's how to build 
            strong professional relationships:
          </p>
          
          <ol className="list-decimal ml-6 space-y-4 text-gray-700">
            <li>
              <strong>Network Actively:</strong> Attend team meetings, company events, and informal gatherings. 
              Make an effort to know people beyond your immediate team.
            </li>
            <li>
              <strong>Seek Mentorship:</strong> Find a mentor who can guide you and advocate for you. 
              This could be your manager, a senior colleague, or someone from another department.
            </li>
            <li>
              <strong>Be Helpful:</strong> Offer to help colleagues with their projects when you have capacity. 
              This builds goodwill and shows teamwork.
            </li>
            <li>
              <strong>Communicate Effectively:</strong> Keep your manager and team updated on your progress. 
              Ask for feedback regularly and act on it.
            </li>
            <li>
              <strong>Show Cultural Fit:</strong> Understand and align with the company's values and culture. 
              Participate in company initiatives and events.
            </li>
          </ol>
        </section>

        {/* Demonstrating Value */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Demonstrating Value and Impact</h2>
          
          <p className="text-gray-700 leading-7 mb-4">
            Quantify your contributions. Companies want to see measurable impact:
          </p>
          
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Track Your Achievements</h3>
              <p className="text-gray-700 text-sm mb-2">
                Keep a record of:
              </p>
              <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                <li>Projects completed and their impact</li>
                <li>Time saved or efficiency improvements</li>
                <li>Problems solved</li>
                <li>Positive feedback received</li>
                <li>Skills learned and applied</li>
              </ul>
            </div>
            
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Create a Portfolio</h3>
              <p className="text-gray-700 text-sm">
                Document your work with code samples, reports, presentations, or demos. This provides concrete 
                evidence of your contributions and can be shared during conversion discussions.
              </p>
            </div>
            
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Share Your Learnings</h3>
              <p className="text-gray-700 text-sm">
                Present your work to the team. Write blog posts or documentation. Share knowledge through 
                internal knowledge-sharing sessions. This positions you as a thought leader.
              </p>
            </div>
          </div>
        </section>

        {/* How to Ask */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">How to Ask for Full-Time Offer</h2>
          
          <p className="text-gray-700 leading-7 mb-4">
            Timing and approach matter when asking for a full-time position:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">When to Ask</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong>Mid-internship check-in:</strong> Around the halfway point, express your interest in continuing</li>
                <li><strong>End-of-internship review:</strong> During your final performance review, explicitly ask about opportunities</li>
                <li><strong>Before graduation:</strong> If you're graduating soon, mention your timeline and interest</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">How to Ask</h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-3">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Sample conversation starter:</strong>
                </p>
                <p className="text-sm text-gray-700 italic">
                  "I've really enjoyed my time here and feel like I've learned a lot. I'm very interested in 
                  continuing with [Company Name] after my graduation. Are there opportunities for full-time 
                  positions, and what would be the process?"
                </p>
              </div>
              <p className="text-gray-700 leading-7">
                Be direct but respectful. Show enthusiasm for the company and role. Highlight your contributions 
                and how you see yourself growing with the organization.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Prepare Your Case</h3>
              <p className="text-gray-700 leading-7 mb-3">
                Before the conversation, prepare:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>A summary of your key achievements and contributions</li>
                <li>Specific examples of value you've added</li>
                <li>Your interest in specific teams or projects</li>
                <li>Your career goals and how they align with the company</li>
                <li>Questions about the role, team, and growth opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* If Not Converted */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">What to Do If Not Converted</h2>
          
          <p className="text-gray-700 leading-7 mb-4">
            Not getting a conversion offer isn't the end of the world. Here's how to handle it professionally:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">1. Ask for Feedback</h3>
              <p className="text-gray-700 text-sm">
                Request specific feedback on areas for improvement. This shows maturity and helps you grow. 
                Ask: "What skills or experiences should I focus on to be a strong candidate in the future?"
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">2. Request a Recommendation</h3>
              <p className="text-gray-700 text-sm">
                Ask your manager or mentor for a LinkedIn recommendation or reference letter. This can 
                be valuable for future job applications.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">3. Stay in Touch</h3>
              <p className="text-gray-700 text-sm">
                Maintain professional relationships. Connect on LinkedIn. You never know when opportunities 
                might arise in the future.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">4. Use the Experience</h3>
              <p className="text-gray-700 text-sm">
                Your internship experience is valuable regardless. Use it to strengthen your resume and 
                interview answers for other positions.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">5. Reapply Later</h3>
              <p className="text-gray-700 text-sm">
                Many companies welcome former interns to reapply. Keep an eye on their job postings and 
                apply when you're ready, mentioning your previous internship experience.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Success Stories from Indian Companies</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Flipkart Intern → Software Engineer</h3>
              <p className="text-gray-700 text-sm">
                "I started as a backend engineering intern at Flipkart. I focused on understanding the 
                system architecture and took ownership of a critical feature. By the end of my 6-month 
                internship, I had not only completed my project but also helped optimize existing systems. 
                My manager appreciated my proactive approach, and I received a full-time offer before 
                my internship ended."
              </p>
            </div>
            
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">TCS Intern → Systems Engineer</h3>
              <p className="text-gray-700 text-sm">
                "During my internship at TCS, I made it a point to network with people across different 
                teams. I volunteered for cross-functional projects and learned technologies beyond my 
                assigned work. When a full-time position opened up, multiple managers recommended me 
                because they had seen my work and collaborative spirit."
              </p>
            </div>
            
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Zomato Intern → Product Manager</h3>
              <p className="text-gray-700 text-sm">
                "I interned in the product team at Zomato. Instead of just executing assigned tasks, 
                I started analyzing user data and proposing feature improvements. I presented my findings 
                to the product leadership, which led to implementing one of my suggestions. This 
                demonstrated strategic thinking and got me a full-time offer in the product team."
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Key Takeaways</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>Start thinking about conversion from day one of your internship</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>Exceed expectations consistently, not just occasionally</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>Build genuine relationships with your team and managers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>Document and quantify your contributions and impact</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>Be proactive in asking about full-time opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>Even if not converted, use the experience to strengthen your profile</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16 pt-8 border-t border-gray-300">
          <h2 className="text-2xl font-bold text-black mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((article, index) => (
              <button
                key={index}
                onClick={article.onClick}
                className="text-left bg-white border border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors"
              >
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded inline-block mb-2">
                  {article.category}
                </span>
                <h3 className="font-semibold text-black">{article.title}</h3>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InternshipConversionArticle;

