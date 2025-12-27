import { useState } from 'react';

/**
 * Authentication Form Component
 * 
 * This component handles user login and registration.
 */

const AuthForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    cgpa: '',
    cgpaScale: '4',
    year: '',
    department: '',
    preferredLocation: '',
    workMode: 'Hybrid'
  });
  const [errors, setErrors] = useState({});

  // Academic years
  const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

  // Common CS-related departments/majors
  const departments = [
    'Computer Science',
    'Software Engineering',
    'Computer Engineering',
    'Information Systems',
    'Data Science',
    'Artificial Intelligence',
    'Cybersecurity',
    'Information Technology'
  ];

  // Indian cities
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai',
    'Kolkata', 'Ahmedabad', 'Gurugram', 'Noida', 'Jaipur', 'Lucknow',
    'Chandigarh', 'Indore', 'Bhopal', 'Visakhapatnam', 'Coimbatore', 'Nagpur'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    }

    if (!formData.cgpa) {
      newErrors.cgpa = 'CGPA/GPA is required';
    } else {
      const cgpa = parseFloat(formData.cgpa);
      const maxCGPA = formData.cgpaScale === '4' ? 4 : 10;
      if (isNaN(cgpa) || cgpa < 0 || cgpa > maxCGPA) {
        newErrors.cgpa = `CGPA must be between 0 and ${maxCGPA}`;
      }
    }

    if (!formData.year) {
      newErrors.year = 'Year of study is required';
    }

    if (!formData.department) {
      newErrors.department = 'Department/Major is required';
    }

    if (!formData.preferredLocation) {
      newErrors.preferredLocation = 'Preferred location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(formData);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm w-full max-w-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">
            InternConnect
          </h1>
          <p className="text-gray-600">
            {isLogin ? 'Welcome back! Please login.' : 'Create your account to get started'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                errors.fullName ? 'border-gray-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-gray-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                errors.email ? 'border-gray-500' : 'border-gray-300'
              }`}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-gray-600">{errors.email}</p>
            )}
          </div>

          {/* Mobile Number with Fixed +91 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number *
            </label>
            <div className="flex gap-2">
              <div className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
                +91
              </div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`flex-1 px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                  errors.mobile ? 'border-gray-500' : 'border-gray-300'
                }`}
                placeholder="1234567890"
              />
            </div>
            {errors.mobile && (
              <p className="mt-1 text-sm text-gray-600">{errors.mobile}</p>
            )}
          </div>

          {/* CGPA/GPA */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CGPA/GPA Score *
              </label>
              <input
                type="number"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                step="0.01"
                min="0"
                max={formData.cgpaScale === '4' ? '4' : '10'}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                  errors.cgpa ? 'border-gray-500' : 'border-gray-300'
                }`}
                placeholder="3.5"
              />
              {errors.cgpa && (
                <p className="mt-1 text-sm text-gray-600">{errors.cgpa}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scale
              </label>
              <select
                name="cgpaScale"
                value={formData.cgpaScale}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              >
                <option value="4">0-4</option>
                <option value="10">0-10</option>
              </select>
            </div>
          </div>

          {/* Year of Study */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Year of Study *
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                errors.year ? 'border-gray-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors.year && (
              <p className="mt-1 text-sm text-gray-600">{errors.year}</p>
            )}
          </div>

          {/* Department/Major */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department/Major *
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                errors.department ? 'border-gray-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            {errors.department && (
              <p className="mt-1 text-sm text-gray-600">{errors.department}</p>
            )}
          </div>

          {/* Preferred Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Location *
            </label>
            <select
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                errors.preferredLocation ? 'border-gray-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select City</option>
              {indianCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {errors.preferredLocation && (
              <p className="mt-1 text-sm text-gray-600">{errors.preferredLocation}</p>
            )}
          </div>

          {/* Preferred Work Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Work Mode *
            </label>
            <div className="flex gap-4">
              {['Remote', 'On-site', 'Hybrid'].map(mode => (
                <label key={mode} className="flex items-center">
                  <input
                    type="radio"
                    name="workMode"
                    value={mode}
                    checked={formData.workMode === mode}
                    onChange={handleChange}
                    className="w-4 h-4 text-black focus:ring-gray-400"
                  />
                  <span className="ml-2 text-gray-700">{mode}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-600 hover:text-black text-sm font-medium"
          >
            {isLogin
              ? "Don't have an account? Register"
              : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
