/**
 * InternConnect - India Internship Database
 * 
 * This file contains an array of internship objects representing various
 * internship opportunities in India. Each object contains:
 * - Company information
 * - Location (Indian cities only)
 * - Salary in INR per month
 * - Work mode (Remote/On-site/Hybrid)
 * - Required skills (array)
 * - Duration
 * - Minimum CGPA requirement
 * - Industry
 */

export const internships = [
  // Indian IT Services Companies
  {
    id: 1,
    company: "TCS",
    title: "Software Development Intern",
    location: "Bangalore",
    salary: 25000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "SQL", "Spring Boot"],
    minCGPA: 3.0,
    industry: "IT Services"
  },
  {
    id: 2,
    company: "Infosys",
    title: "Full Stack Developer Intern",
    location: "Bangalore",
    salary: 28000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    minCGPA: 3.0,
    industry: "IT Services"
  },
  {
    id: 3,
    company: "Wipro",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 26000,
    workMode: "On-site",
    duration: 12,
    skills: ["Java", "Python", "PostgreSQL", "REST APIs"],
    minCGPA: 3.0,
    industry: "IT Services"
  },
  {
    id: 4,
    company: "HCL Technologies",
    title: "Cloud Solutions Intern",
    location: "Noida",
    salary: 24000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["AWS", "Python", "Docker", "Kubernetes"],
    minCGPA: 3.0,
    industry: "IT Services"
  },
  {
    id: 5,
    company: "Tech Mahindra",
    title: "Software Engineering Intern",
    location: "Pune",
    salary: 27000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "JavaScript", "React", "SQL"],
    minCGPA: 3.0,
    industry: "IT Services"
  },

  // E-commerce & Startups
  {
    id: 6,
    company: "Flipkart",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 45000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "MySQL", "Redis", "Kafka"],
    minCGPA: 3.2,
    industry: "E-commerce"
  },
  {
    id: 7,
    company: "Zomato",
    title: "Full Stack Developer Intern",
    location: "Gurugram",
    salary: 40000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "JavaScript", "React", "Django", "PostgreSQL"],
    minCGPA: 3.2,
    industry: "E-commerce"
  },
  {
    id: 8,
    company: "Swiggy",
    title: "Backend Systems Intern",
    location: "Bangalore",
    salary: 42000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Go", "PostgreSQL", "Redis", "Elasticsearch"],
    minCGPA: 3.2,
    industry: "E-commerce"
  },
  {
    id: 9,
    company: "Paytm",
    title: "Payment Systems Intern",
    location: "Noida",
    salary: 38000,
    workMode: "On-site",
    duration: 12,
    skills: ["Java", "Python", "PostgreSQL", "Redis", "Payment Gateway"],
    minCGPA: 3.3,
    industry: "Fintech"
  },
  {
    id: 10,
    company: "PhonePe",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 45000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "PostgreSQL", "Kafka", "Microservices"],
    minCGPA: 3.3,
    industry: "Fintech"
  },
  {
    id: 11,
    company: "CRED",
    title: "Full Stack Engineering Intern",
    location: "Bangalore",
    salary: 50000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["TypeScript", "React", "Node.js", "PostgreSQL", "GraphQL"],
    minCGPA: 3.4,
    industry: "Fintech"
  },
  {
    id: 12,
    company: "Razorpay",
    title: "Payment Systems Intern",
    location: "Bangalore",
    salary: 48000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "PostgreSQL", "Redis", "Payment Processing"],
    minCGPA: 3.3,
    industry: "Fintech"
  },

  // Indian Product Companies
  {
    id: 13,
    company: "Freshworks",
    title: "Product Engineering Intern",
    location: "Chennai",
    salary: 55000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Ruby", "PostgreSQL", "Rails"],
    minCGPA: 3.4,
    industry: "SaaS"
  },
  {
    id: 14,
    company: "Zoho",
    title: "Software Development Intern",
    location: "Chennai",
    salary: 52000,
    workMode: "On-site",
    duration: 12,
    skills: ["Java", "JavaScript", "React", "MySQL", "Zoho API"],
    minCGPA: 3.3,
    industry: "SaaS"
  },
  {
    id: 15,
    company: "Ola",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 45000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "PostgreSQL", "Redis", "Microservices"],
    minCGPA: 3.2,
    industry: "Mobility"
  },
  {
    id: 16,
    company: "Ola Electric",
    title: "IoT Development Intern",
    location: "Bangalore",
    salary: 40000,
    workMode: "On-site",
    duration: 12,
    skills: ["Python", "C++", "IoT", "Embedded Systems", "MQTT"],
    minCGPA: 3.3,
    industry: "Mobility"
  },
  {
    id: 17,
    company: "Byju's",
    title: "Full Stack Developer Intern",
    location: "Bangalore",
    salary: 35000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
    minCGPA: 3.1,
    industry: "EdTech"
  },
  {
    id: 18,
    company: "Unacademy",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 38000,
    workMode: "Remote",
    duration: 12,
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Video Streaming"],
    minCGPA: 3.2,
    industry: "EdTech"
  },

  // MNC India Offices
  {
    id: 19,
    company: "Google India",
    title: "Software Engineering Intern",
    location: "Hyderabad",
    salary: 120000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Java", "C++", "JavaScript", "React", "AWS"],
    minCGPA: 3.6,
    industry: "Tech"
  },
  {
    id: 20,
    company: "Microsoft India",
    title: "Software Development Intern",
    location: "Hyderabad",
    salary: 110000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["C#", "C++", "Python", "Azure", "SQL", "React"],
    minCGPA: 3.6,
    industry: "Tech"
  },
  {
    id: 21,
    company: "Amazon India",
    title: "Cloud Solutions Intern",
    location: "Bangalore",
    salary: 100000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "AWS", "SQL", "Java", "Docker"],
    minCGPA: 3.5,
    industry: "Tech"
  },
  {
    id: 22,
    company: "Meta India",
    title: "Frontend Engineering Intern",
    location: "Hyderabad",
    salary: 115000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "GraphQL"],
    minCGPA: 3.6,
    industry: "Tech"
  },
  {
    id: 23,
    company: "Adobe India",
    title: "Creative Cloud Intern",
    location: "Noida",
    salary: 95000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["C++", "JavaScript", "React", "WebGL", "Canvas API"],
    minCGPA: 3.5,
    industry: "Tech"
  },
  {
    id: 24,
    company: "Oracle India",
    title: "Database Systems Intern",
    location: "Bangalore",
    salary: 90000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "SQL", "Oracle DB", "Python", "PL/SQL"],
    minCGPA: 3.4,
    industry: "Tech"
  },
  {
    id: 25,
    company: "Salesforce India",
    title: "Cloud Platform Intern",
    location: "Hyderabad",
    salary: 98000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "JavaScript", "Apex", "Salesforce", "Lightning"],
    minCGPA: 3.5,
    industry: "Tech"
  },
  {
    id: 26,
    company: "IBM India",
    title: "Cloud Engineering Intern",
    location: "Bangalore",
    salary: 85000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "Cloud", "Kubernetes", "Docker"],
    minCGPA: 3.4,
    industry: "Tech"
  },
  {
    id: 27,
    company: "Intel India",
    title: "Systems Software Intern",
    location: "Bangalore",
    salary: 92000,
    workMode: "On-site",
    duration: 12,
    skills: ["C++", "C", "Assembly", "Linux", "Embedded Systems"],
    minCGPA: 3.5,
    industry: "Tech"
  },
  {
    id: 28,
    company: "NVIDIA India",
    title: "GPU Computing Intern",
    location: "Bangalore",
    salary: 105000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["C++", "CUDA", "Python", "OpenGL", "Deep Learning"],
    minCGPA: 3.6,
    industry: "Tech"
  },

  // More Indian Startups
  {
    id: 29,
    company: "Razorpay",
    title: "Full Stack Engineering Intern",
    location: "Bangalore",
    salary: 48000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    minCGPA: 3.3,
    industry: "Fintech"
  },
  {
    id: 30,
    company: "Meesho",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 42000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Elasticsearch"],
    minCGPA: 3.2,
    industry: "E-commerce"
  },
  {
    id: 31,
    company: "Nykaa",
    title: "Full Stack Developer Intern",
    location: "Mumbai",
    salary: 38000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    minCGPA: 3.1,
    industry: "E-commerce"
  },
  {
    id: 32,
    company: "Dream11",
    title: "Backend Systems Intern",
    location: "Mumbai",
    salary: 45000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "PostgreSQL", "Redis", "Kafka"],
    minCGPA: 3.3,
    industry: "Gaming"
  },
  {
    id: 33,
    company: "ShareChat",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 40000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Go", "PostgreSQL", "Redis", "Microservices"],
    minCGPA: 3.2,
    industry: "Social Media"
  },
  {
    id: 34,
    company: "Rapido",
    title: "Full Stack Developer Intern",
    location: "Bangalore",
    salary: 35000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Maps API"],
    minCGPA: 3.1,
    industry: "Mobility"
  },
  {
    id: 35,
    company: "Practo",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 38000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Django", "PostgreSQL", "Redis"],
    minCGPA: 3.2,
    industry: "Healthcare"
  },
  {
    id: 36,
    company: "1mg",
    title: "Full Stack Developer Intern",
    location: "Gurugram",
    salary: 36000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    minCGPA: 3.1,
    industry: "Healthcare"
  },

  // More Locations
  {
    id: 37,
    company: "TCS",
    title: "Data Science Intern",
    location: "Mumbai",
    salary: 28000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Pandas"],
    minCGPA: 3.2,
    industry: "IT Services"
  },
  {
    id: 38,
    company: "Infosys",
    title: "AI/ML Intern",
    location: "Pune",
    salary: 30000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "NLP"],
    minCGPA: 3.3,
    industry: "IT Services"
  },
  {
    id: 39,
    company: "Wipro",
    title: "Cybersecurity Intern",
    location: "Chennai",
    salary: 27000,
    workMode: "On-site",
    duration: 12,
    skills: ["Python", "Security", "Linux", "Network Security", "Ethical Hacking"],
    minCGPA: 3.2,
    industry: "IT Services"
  },
  {
    id: 40,
    company: "HCL Technologies",
    title: "DevOps Intern",
    location: "Noida",
    salary: 26000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD"],
    minCGPA: 3.1,
    industry: "IT Services"
  },
  {
    id: 41,
    company: "Tech Mahindra",
    title: "Mobile Development Intern",
    location: "Pune",
    salary: 29000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Kotlin", "Android", "React Native", "Firebase"],
    minCGPA: 3.2,
    industry: "IT Services"
  },

  // More Startups in Different Cities
  {
    id: 42,
    company: "Zoho",
    title: "Frontend Engineering Intern",
    location: "Chennai",
    salary: 50000,
    workMode: "On-site",
    duration: 12,
    skills: ["JavaScript", "React", "TypeScript", "CSS", "HTML"],
    minCGPA: 3.3,
    industry: "SaaS"
  },
  {
    id: 43,
    company: "Freshworks",
    title: "Backend Engineering Intern",
    location: "Chennai",
    salary: 53000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Ruby", "Rails", "PostgreSQL", "Redis", "REST APIs"],
    minCGPA: 3.4,
    industry: "SaaS"
  },
  {
    id: 44,
    company: "Chargebee",
    title: "Full Stack Developer Intern",
    location: "Chennai",
    salary: 48000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL", "Stripe API"],
    minCGPA: 3.3,
    industry: "SaaS"
  },
  {
    id: 45,
    company: "BrowserStack",
    title: "Backend Engineering Intern",
    location: "Mumbai",
    salary: 55000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Go", "PostgreSQL", "Redis", "Docker"],
    minCGPA: 3.4,
    industry: "SaaS"
  },
  {
    id: 46,
    company: "Clevertap",
    title: "Full Stack Developer Intern",
    location: "Mumbai",
    salary: 50000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Analytics"],
    minCGPA: 3.3,
    industry: "SaaS"
  },
  {
    id: 47,
    company: "Postman",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 60000,
    workMode: "Remote",
    duration: 12,
    skills: ["Node.js", "PostgreSQL", "Redis", "REST APIs", "GraphQL"],
    minCGPA: 3.5,
    industry: "SaaS"
  },
  {
    id: 48,
    company: "Hasura",
    title: "Backend Engineering Intern",
    location: "Bangalore",
    salary: 58000,
    workMode: "Remote",
    duration: 12,
    skills: ["Haskell", "PostgreSQL", "GraphQL", "Docker", "Kubernetes"],
    minCGPA: 3.5,
    industry: "SaaS"
  },
  {
    id: 49,
    company: "Jio Platforms",
    title: "Software Engineering Intern",
    location: "Mumbai",
    salary: 40000,
    workMode: "On-site",
    duration: 12,
    skills: ["Java", "Python", "Cloud", "5G", "IoT"],
    minCGPA: 3.3,
    industry: "Telecom"
  },
  {
    id: 50,
    company: "Airtel",
    title: "Network Software Intern",
    location: "Gurugram",
    salary: 35000,
    workMode: "On-site",
    duration: 12,
    skills: ["Python", "C++", "Network Programming", "Linux", "Telecom"],
    minCGPA: 3.2,
    industry: "Telecom"
  },
  {
    id: 51,
    company: "Reliance Jio",
    title: "Cloud Engineering Intern",
    location: "Mumbai",
    salary: 42000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "Cloud", "Kubernetes", "Docker"],
    minCGPA: 3.3,
    industry: "Telecom"
  },
  {
    id: 52,
    company: "Vodafone Idea",
    title: "Software Development Intern",
    location: "Pune",
    salary: 32000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "SQL", "Telecom Systems"],
    minCGPA: 3.1,
    industry: "Telecom"
  },
  {
    id: 53,
    company: "Amazon India",
    title: "Machine Learning Intern",
    location: "Bangalore",
    salary: 105000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "AWS"],
    minCGPA: 3.6,
    industry: "Tech"
  },
  {
    id: 54,
    company: "Google India",
    title: "AI Research Intern",
    location: "Bangalore",
    salary: 125000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Research"],
    minCGPA: 3.7,
    industry: "Tech"
  },
  {
    id: 55,
    company: "Microsoft India",
    title: "Azure Cloud Intern",
    location: "Bangalore",
    salary: 115000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["C#", "Python", "Azure", "Docker", "Kubernetes"],
    minCGPA: 3.6,
    industry: "Tech"
  },

  // Consulting Firms
  {
    id: 56,
    company: "Accenture India",
    title: "Technology Consulting Intern",
    location: "Bangalore",
    salary: 35000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "SQL", "Cloud", "Agile"],
    minCGPA: 3.2,
    industry: "Consulting"
  },
  {
    id: 57,
    company: "Deloitte India",
    title: "Technology Analyst Intern",
    location: "Mumbai",
    salary: 38000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "SQL", "Data Analysis", "Excel", "Power BI"],
    minCGPA: 3.3,
    industry: "Consulting"
  },
  {
    id: 58,
    company: "KPMG India",
    title: "IT Advisory Intern",
    location: "Delhi",
    salary: 36000,
    workMode: "On-site",
    duration: 12,
    skills: ["Python", "SQL", "Data Analytics", "Tableau", "Risk Management"],
    minCGPA: 3.3,
    industry: "Consulting"
  },
  {
    id: 59,
    company: "EY India",
    title: "Technology Consulting Intern",
    location: "Bangalore",
    salary: 37000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "Cloud", "DevOps", "Agile"],
    minCGPA: 3.2,
    industry: "Consulting"
  },
  {
    id: 60,
    company: "PwC India",
    title: "Digital Transformation Intern",
    location: "Mumbai",
    salary: 39000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "SQL", "Cloud", "Data Analytics", "Process Automation"],
    minCGPA: 3.3,
    industry: "Consulting"
  },
  {
    id: 61,
    company: "McKinsey India",
    title: "Digital Intern",
    location: "Mumbai",
    salary: 65000,
    workMode: "On-site",
    duration: 12,
    skills: ["Python", "SQL", "Data Science", "Machine Learning", "Analytics"],
    minCGPA: 3.7,
    industry: "Consulting"
  },
  {
    id: 62,
    company: "BCG India",
    title: "Technology Consultant Intern",
    location: "Delhi",
    salary: 60000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "SQL", "Data Analytics", "Strategy", "Problem Solving"],
    minCGPA: 3.6,
    industry: "Consulting"
  },

  // Finance Companies
  {
    id: 63,
    company: "Goldman Sachs India",
    title: "Technology Analyst Intern",
    location: "Bangalore",
    salary: 95000,
    workMode: "On-site",
    duration: 12,
    skills: ["Java", "Python", "C++", "SQL", "Financial Systems"],
    minCGPA: 3.7,
    industry: "Finance"
  },
  {
    id: 64,
    company: "JP Morgan India",
    title: "Software Engineering Intern",
    location: "Mumbai",
    salary: 90000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "SQL", "React", "Microservices"],
    minCGPA: 3.6,
    industry: "Finance"
  },
  {
    id: 65,
    company: "Morgan Stanley India",
    title: "Technology Intern",
    location: "Mumbai",
    salary: 92000,
    workMode: "On-site",
    duration: 12,
    skills: ["Java", "Python", "C++", "SQL", "Trading Systems"],
    minCGPA: 3.7,
    industry: "Finance"
  },
  {
    id: 66,
    company: "HSBC India",
    title: "Digital Banking Intern",
    location: "Pune",
    salary: 45000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "React", "SQL", "Banking Systems"],
    minCGPA: 3.4,
    industry: "Finance"
  },
  {
    id: 67,
    company: "Citibank India",
    title: "Technology Intern",
    location: "Pune",
    salary: 48000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "SQL", "Cloud", "Financial Services"],
    minCGPA: 3.4,
    industry: "Finance"
  },

  // More MNCs
  {
    id: 68,
    company: "Apple India",
    title: "iOS Development Intern",
    location: "Hyderabad",
    salary: 110000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Swift", "Objective-C", "iOS", "Xcode", "UIKit"],
    minCGPA: 3.6,
    industry: "Tech"
  },
  {
    id: 69,
    company: "Qualcomm India",
    title: "Embedded Systems Intern",
    location: "Hyderabad",
    salary: 85000,
    workMode: "On-site",
    duration: 12,
    skills: ["C++", "C", "Embedded Systems", "Linux", "Device Drivers"],
    minCGPA: 3.5,
    industry: "Tech"
  },
  {
    id: 70,
    company: "SAP Labs India",
    title: "Cloud Development Intern",
    location: "Bangalore",
    salary: 75000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "JavaScript", "SAP Cloud", "SQL", "ABAP"],
    minCGPA: 3.4,
    industry: "Tech"
  },
  {
    id: 71,
    company: "Cisco India",
    title: "Network Engineering Intern",
    location: "Bangalore",
    salary: 70000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "C++", "Networking", "Linux", "Protocols"],
    minCGPA: 3.4,
    industry: "Tech"
  },
  {
    id: 72,
    company: "VMware India",
    title: "Virtualization Intern",
    location: "Bangalore",
    salary: 78000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["C++", "Python", "Virtualization", "Cloud", "Linux"],
    minCGPA: 3.5,
    industry: "Tech"
  },

  // More Indian Startups
  {
    id: 73,
    company: "CARS24",
    title: "Backend Engineering Intern",
    location: "Gurugram",
    salary: 40000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Microservices"],
    minCGPA: 3.2,
    industry: "E-commerce"
  },
  {
    id: 74,
    company: "Meesho",
    title: "Full Stack Developer Intern",
    location: "Bangalore",
    salary: 42000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
    minCGPA: 3.2,
    industry: "E-commerce"
  },
  {
    id: 75,
    company: "ShareChat",
    title: "Backend Systems Intern",
    location: "Bangalore",
    salary: 40000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Python", "Go", "PostgreSQL", "Redis", "Microservices"],
    minCGPA: 3.2,
    industry: "Social Media"
  },
  {
    id: 76,
    company: "Dream11",
    title: "Backend Engineering Intern",
    location: "Mumbai",
    salary: 45000,
    workMode: "Hybrid",
    duration: 12,
    skills: ["Java", "Python", "PostgreSQL", "Redis", "Kafka"],
    minCGPA: 3.3,
    industry: "Gaming"
  }
];

/**
 * Extract all unique skills from internships array
 */
export const getAllSkills = () => {
  const allSkills = internships.flatMap(internship => internship.skills);
  return [...new Set(allSkills)].sort();
};

/**
 * Extract all unique locations from internships array
 */
export const getAllLocations = () => {
  const locations = internships.map(internship => internship.location);
  return [...new Set(locations)].sort();
};
