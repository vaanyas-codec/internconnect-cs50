import { useState } from 'react';

/**
 * Login/Registration Page
 * 
 * Separate page for authentication with tabs
 */

const LoginPage = ({ onLogin, navigateTo }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    cgpa: '',
    year: '',
    department: '',
    preferredLocation: '',
    workMode: 'Hybrid'
  });
  const [errors, setErrors] = useState({});

  const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
  const departments = [
    'Computer Science',
    'Information Technology',
    'Electronics',
    'Mechanical',
    'Civil',
    'Software Engineering',
    'Data Science',
    'Artificial Intelligence',
    'Cybersecurity'
  ];
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai',
    'Kolkata', 'Gurugram', 'Noida', 'Ahmedabad', 'Jaipur', 'Chandigarh'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

    if (!isLogin) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      }
      if (!formData.password || formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
      if (!formData.year) {
        newErrors.year = 'Year of study is required';
      }
      if (!formData.department) {
        newErrors.department = 'Department is required';
      }
      if (!formData.preferredLocation) {
        newErrors.preferredLocation = 'Preferred location is required';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    }

    if (!isLogin && !formData.cgpa) {
      newErrors.cgpa = 'CGPA is required';
    } else if (!isLogin && formData.cgpa) {
      const cgpa = parseFloat(formData.cgpa);
      if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        newErrors.cgpa = 'CGPA must be between 0 and 10';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isLogin) {
        // For login, just check email exists
        onLogin({ ...formData, fullName: formData.email.split('@')[0] });
      } else {
        // For registration, use full form data
        onLogin(formData);
      }
      // Navigation is handled by onLogin in App.jsx
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">InternConnect</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              isLogin
                ? 'text-black border-b-2 border-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              !isLogin
                ? 'text-black border-b-2 border-black'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
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
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-gray-600">{errors.fullName}</p>
              )}
            </div>
          )}

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
            />
            {errors.email && (
              <p className="mt-1 text-sm text-gray-600">{errors.email}</p>
            )}
          </div>

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

          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                    errors.password ? 'border-gray-500' : 'border-gray-300'
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-gray-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CGPA (0-10) *
                </label>
                <input
                  type="number"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  max="10"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 ${
                    errors.cgpa ? 'border-gray-500' : 'border-gray-300'
                  }`}
                  placeholder="8.5"
                />
                {errors.cgpa && (
                  <p className="mt-1 text-sm text-gray-600">{errors.cgpa}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year of Study *
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department *
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
            </>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {isLogin && (
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-black font-medium hover:underline"
              >
                Register
              </button>
            </p>
          </div>
        )}

        {!isLogin && (
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-black font-medium hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

