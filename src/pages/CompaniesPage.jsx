import { useState, useMemo } from 'react';
import { Bookmark, Star, ExternalLink } from 'lucide-react';
import { internships } from '../data/internships';

/**
 * Top Companies Page
 * 
 * Display companies with open positions
 */

const CompaniesPage = ({ navigateTo }) => {
  const [savedCompanies, setSavedCompanies] = useState(new Set());

  // Company career URLs mapping
  const companyCareerUrls = {
    'TCS': 'https://www.tcs.com/careers',
    'Infosys': 'https://www.infosys.com/careers/',
    'Wipro': 'https://careers.wipro.com/',
    'HCL Technologies': 'https://www.hcltech.com/careers',
    'Tech Mahindra': 'https://careers.techmahindra.com/',
    'Flipkart': 'https://www.flipkartcareers.com/',
    'Zomato': 'https://www.zomato.com/careers',
    'Swiggy': 'https://careers.swiggy.com/',
    'Paytm': 'https://paytm.com/careers/',
    'PhonePe': 'https://www.phonepe.com/careers/',
    'CRED': 'https://careers.cred.club/',
    'Razorpay': 'https://razorpay.com/jobs/',
    'Freshworks': 'https://www.freshworks.com/company/careers/',
    'Zoho': 'https://www.zoho.com/careers/',
    'Ola': 'https://www.olacabs.com/careers',
    'Ola Electric': 'https://www.olacabs.com/careers',
    'Byju\'s': 'https://byjus.com/careers/',
    'Unacademy': 'https://unacademy.com/careers',
    'Dream11': 'https://www.dream11.com/careers',
    'Meesho': 'https://www.meesho.com/careers',
    'CARS24': 'https://www.cars24.com/careers/',
    'ShareChat': 'https://sharechat.com/careers',
    'Google India': 'https://careers.google.com/locations/india/',
    'Microsoft India': 'https://careers.microsoft.com/v2/global/en/locations/india',
    'Amazon India': 'https://www.amazon.jobs/en/locations/india',
    'Meta India': 'https://www.metacareers.com/locations/india/',
    'Apple India': 'https://www.apple.com/careers/in/',
    'Adobe India': 'https://www.adobe.com/in/careers.html',
    'Intel India': 'https://jobs.intel.com/en/locations/india',
    'Qualcomm India': 'https://www.qualcomm.com/company/careers/india',
    'NVIDIA India': 'https://www.nvidia.com/en-in/about-nvidia/careers/',
    'IBM India': 'https://www.ibm.com/in-en/employment/',
    'Oracle India': 'https://www.oracle.com/in/corporate/careers/',
    'SAP Labs India': 'https://jobs.sap.com/search/?q=&locationsearch=india',
    'Cisco India': 'https://jobs.cisco.com/jobs/SearchJobs/?21178=%5B206632%5D',
    'VMware India': 'https://careers.vmware.com/location/india-jobs/',
    'Salesforce India': 'https://www.salesforce.com/in/careers/',
    'Accenture India': 'https://www.accenture.com/in-en/careers',
    'Deloitte India': 'https://www2.deloitte.com/in/en/pages/careers/articles/careers-home.html',
    'KPMG India': 'https://home.kpmg/in/en/home/careers.html',
    'EY India': 'https://www.ey.com/en_in/careers',
    'PwC India': 'https://www.pwc.in/careers.html',
    'McKinsey India': 'https://www.mckinsey.com/careers/location/india',
    'BCG India': 'https://careers.bcg.com/locations/india',
    'Goldman Sachs India': 'https://www.goldmansachs.com/careers/locations/india/',
    'JP Morgan India': 'https://careers.jpmorgan.com/global/en/locations/india',
    'Morgan Stanley India': 'https://www.morganstanley.com/people-opportunities/india',
    'HSBC India': 'https://www.hsbc.co.in/careers/',
    'Citibank India': 'https://jobs.citi.com/location/india-jobs',
    'Jio Platforms': 'https://careers.jio.com/',
    'Airtel': 'https://www.airtel.in/careers',
    'Reliance Jio': 'https://careers.jio.com/',
    'Vodafone Idea': 'https://careers.vil.com/',
    'Postman': 'https://www.postman.com/careers/',
    'Hasura': 'https://hasura.io/careers/',
    'BrowserStack': 'https://www.browserstack.com/careers',
    'Clevertap': 'https://clevertap.com/careers/',
    'Chargebee': 'https://www.chargebee.com/careers/',
    'Practo': 'https://www.practo.com/careers',
    '1mg': 'https://www.1mg.com/careers',
    'Rapido': 'https://www.rapido.bike/careers',
    'Nykaa': 'https://www.nykaa.com/careers',
    'MercadoLibre': 'https://careers.mercadolibre.com/'
  };

  // Calculate company statistics
  const companies = useMemo(() => {
    const companyMap = new Map();
    
    internships.forEach(internship => {
      if (!companyMap.has(internship.company)) {
        companyMap.set(internship.company, {
          name: internship.company,
          count: 0,
          avgSalary: 0,
          locations: new Set(),
          industries: new Set()
        });
      }
      const company = companyMap.get(internship.company);
      company.count++;
      company.avgSalary = (company.avgSalary * (company.count - 1) + internship.salary) / company.count;
      company.locations.add(internship.location);
      company.industries.add(internship.industry);
    });

    return Array.from(companyMap.values())
      .map(company => ({
        ...company,
        locations: Array.from(company.locations),
        industries: Array.from(company.industries),
        careerUrl: companyCareerUrls[company.name] || null
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const toggleSave = (companyName) => {
    setSavedCompanies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(companyName)) {
        newSet.delete(companyName);
      } else {
        newSet.add(companyName);
      }
      return newSet;
    });
  };

  const handleApplyClick = (careerUrl) => {
    if (careerUrl) {
      window.open(careerUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigateTo('browse');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Top Employers in India</h1>
          <p className="text-xl text-gray-600">Explore the best companies for internships</p>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Company Banner */}
              <div className="h-24 bg-gray-200"></div>
              
              {/* Company Info */}
              <div className="p-6 -mt-12">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-4 border-white">
                  {company.name.charAt(0)}
                </div>
                
                <h3 className="text-xl font-bold text-black text-center mb-2">{company.name}</h3>
                
                {/* Rating (placeholder) */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={16} className="text-gray-300 fill-gray-300" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.2</span>
                </div>

                <div className="text-center mb-4">
                  <p className="text-lg font-semibold text-black">{company.count}</p>
                  <p className="text-sm text-gray-600">open positions</p>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Avg. Stipend:</span>
                    <span className="font-medium text-black">₹{Math.round(company.avgSalary).toLocaleString('en-IN')}/mo</span>
                  </div>
                  <div>
                    <span className="font-medium">Locations: </span>
                    {company.locations.slice(0, 2).join(', ')}
                    {company.locations.length > 2 && ` +${company.locations.length - 2}`}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApplyClick(company.careerUrl)}
                    className="flex-1 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Apply Now
                    {company.careerUrl && <ExternalLink size={16} />}
                  </button>
                  <button
                    onClick={() => toggleSave(company.name)}
                    className={`p-2 border rounded-lg transition-colors ${
                      savedCompanies.has(company.name)
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Bookmark size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
