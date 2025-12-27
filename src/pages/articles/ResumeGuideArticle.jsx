import { ArrowLeft } from 'lucide-react';

/**
 * Resume Guide Article Page
 * 
 * Detailed guide on writing a standout resume
 */

const ResumeGuideArticle = ({ navigateTo }) => {
  const relatedArticles = [
    {
      title: "Interview Preparation Tips",
      category: "Interview",
      onClick: () => window.open('https://www.geeksforgeeks.org/company-interview-corner/', '_blank', 'noopener,noreferrer')
    },
    {
      title: "Internship to Full-Time Conversion",
      category: "Career",
      onClick: () => navigateTo('resource-internship-conversion')
    },
    {
      title: "Top Skills for 2024",
      category: "Skills",
      onClick: () => window.open('https://www.naukri.com/learning/', '_blank', 'noopener,noreferrer')
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
          <span>Resume Writing</span>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How to Write a Standout Resume
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive guide to creating a resume that gets you noticed by recruiters in the Indian job market
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-700 leading-7 mb-4">
            Your resume is often the first impression you make on potential employers. In India's competitive job market, 
            where thousands of students apply for the same internship positions, a well-crafted resume can be the difference 
            between getting an interview call and being overlooked. This guide will walk you through everything you need to 
            know to create a resume that stands out.
          </p>
          <p className="text-gray-700 leading-7">
            According to recent surveys, recruiters spend an average of 6-7 seconds scanning a resume before deciding whether 
            to read it in detail. This means your resume needs to be clear, concise, and immediately impactful. Let's dive into 
            the essential components and best practices.
          </p>
        </section>

        {/* Essential Resume Components */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Essential Resume Components</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">1. Contact Information</h3>
              <p className="text-gray-700 leading-7 mb-3">
                Start with your contact details at the top. Include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Full name (as it appears on official documents)</li>
                <li>Phone number with country code (+91)</li>
                <li>Professional email address (avoid unprofessional usernames)</li>
                <li>LinkedIn profile URL (if you have one)</li>
                <li>Location (City, State) - helpful for location-based opportunities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">2. Professional Summary</h3>
              <p className="text-gray-700 leading-7 mb-3">
                A 2-3 line summary that highlights your key strengths, academic background, and career objectives. 
                This is your elevator pitch - make it count.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-3">
                <p className="text-sm text-gray-700 italic">
                  Example: "Computer Science student at [University] with strong foundation in Python, Java, and web development. 
                  Seeking software engineering internship to apply technical skills and contribute to innovative projects."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">3. Education</h3>
              <p className="text-gray-700 leading-7 mb-3">
                List your educational qualifications in reverse chronological order:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Degree name and specialization</li>
                <li>University/College name</li>
                <li>CGPA (if above 7.5/10 or 3.0/4.0)</li>
                <li>Graduation year (or expected graduation)</li>
                <li>Relevant coursework (optional, if space permits)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">4. Experience/Projects</h3>
              <p className="text-gray-700 leading-7 mb-3">
                This section is crucial for internships. Include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Previous internships or work experience</li>
                <li>Academic projects (especially final year or major projects)</li>
                <li>Personal projects that demonstrate your skills</li>
                <li>Open source contributions</li>
                <li>Freelance work or part-time jobs</li>
              </ul>
              <p className="text-gray-700 leading-7 mt-3">
                For each entry, use the STAR method: Situation, Task, Action, Result. Quantify your achievements where possible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black mb-3">5. Skills</h3>
              <p className="text-gray-700 leading-7 mb-3">
                Organize skills into categories:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong>Technical Skills:</strong> Programming languages, frameworks, tools</li>
                <li><strong>Soft Skills:</strong> Communication, teamwork, leadership</li>
                <li><strong>Languages:</strong> English, Hindi, regional languages with proficiency levels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Formatting Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Formatting Tips for Indian Job Market</h2>
          
          <div className="space-y-4 text-gray-700 leading-7">
            <p>
              <strong>Length:</strong> Keep your resume to 1 page if you're a student or recent graduate. 
              Only extend to 2 pages if you have substantial experience (5+ years).
            </p>
            <p>
              <strong>Font:</strong> Use professional fonts like Arial, Calibri, or Times New Roman. 
              Size should be between 10-12pt for body text, 14-16pt for headings.
            </p>
            <p>
              <strong>Format:</strong> Save as PDF to preserve formatting. Name the file professionally: 
              "YourName_Resume.pdf" or "YourName_CV.pdf".
            </p>
            <p>
              <strong>Layout:</strong> Use clear section headers, consistent spacing, and bullet points for readability. 
              White space is your friend - don't cram too much information.
            </p>
            <p>
              <strong>Indian Context:</strong> Include your CGPA if it's above 7.5/10. Mention your year of study 
              (Year 1, Year 2, etc.). Include any competitive exam scores (GATE, CAT, etc.) if relevant.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Common Mistakes to Avoid</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">❌ Typos and Grammatical Errors</h3>
              <p className="text-gray-700 text-sm">
                Always proofread multiple times. Use tools like Grammarly. Ask a friend or mentor to review.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">❌ Generic, One-Size-Fits-All Resume</h3>
              <p className="text-gray-700 text-sm">
                Tailor your resume for each application. Highlight relevant skills and experiences for the specific role.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">❌ Including Irrelevant Information</h3>
              <p className="text-gray-700 text-sm">
                Don't include hobbies unless they're directly relevant. Avoid personal details like marital status, 
                religion, or photos (unless specifically requested).
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">❌ Using Unprofessional Email</h3>
              <p className="text-gray-700 text-sm">
                Create a professional email address. Avoid emails like "coolguy123@gmail.com". 
                Use your name or a variation of it.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-black mb-2">❌ Listing Skills Without Context</h3>
              <p className="text-gray-700 text-sm">
                Don't just list skills - show how you've used them in projects or experiences. 
                Provide examples of your proficiency.
              </p>
            </div>
          </div>
        </section>

        {/* ATS-Friendly Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">ATS-Friendly Resume Tips</h2>
          
          <p className="text-gray-700 leading-7 mb-4">
            Many companies use Applicant Tracking Systems (ATS) to screen resumes before they reach human recruiters. 
            To ensure your resume passes ATS screening:
          </p>
          
          <ol className="list-decimal ml-6 space-y-3 text-gray-700">
            <li><strong>Use Standard Section Headers:</strong> "Education", "Experience", "Skills" - avoid creative names</li>
            <li><strong>Include Keywords:</strong> Use keywords from the job description naturally throughout your resume</li>
            <li><strong>Avoid Graphics and Tables:</strong> ATS systems struggle with complex formatting. Keep it simple.</li>
            <li><strong>Use Standard Fonts:</strong> Stick to common fonts that ATS can read easily</li>
            <li><strong>Save as PDF:</strong> PDFs are generally ATS-friendly, but some systems prefer .docx format</li>
            <li><strong>Check File Size:</strong> Keep your resume file under 2MB</li>
          </ol>
        </section>

        {/* Templates and Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Templates and Examples</h2>
          
          <p className="text-gray-700 leading-7 mb-4">
            While there's no one-size-fits-all template, here are some reliable formats:
          </p>
          
          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Chronological Format</h3>
              <p className="text-gray-700 text-sm">
                Best for: Students with consistent work experience or internships. Lists experiences in reverse chronological order.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Functional Format</h3>
              <p className="text-gray-700 text-sm">
                Best for: Career changers or students with limited experience. Emphasizes skills over work history.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Combination Format</h3>
              <p className="text-gray-700 text-sm">
                Best for: Most students. Combines chronological work history with a skills section.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-7 mt-4">
            You can find free resume templates on platforms like Canva, Overleaf (LaTeX), or Microsoft Word templates. 
            Remember to customize any template to reflect your unique experiences and skills.
          </p>
        </section>

        {/* Action Items Checklist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Action Items Checklist</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Gather all your academic records, project details, and work experience information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Choose a clean, professional template or create your own</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Write your professional summary (2-3 lines)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>List education details with CGPA and graduation year</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Detail your projects and experiences using the STAR method</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Organize skills into technical and soft skills categories</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Proofread for typos and grammatical errors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Get feedback from mentors, professors, or career counselors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Save as PDF with a professional filename</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-bold">□</span>
                <span>Update your resume regularly as you gain new experiences</span>
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

export default ResumeGuideArticle;

