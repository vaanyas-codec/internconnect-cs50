import { useState } from 'react';
import { User, Edit2, X } from 'lucide-react';
import { internships } from '../data/internships';

/**
 * My Profile Page
 * 
 * User profile with editable sections
 */

const ProfilePage = ({ user, onUpdateProfile, navigateTo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    mobile: user?.mobile || '',
    cgpa: user?.cgpa || '',
    year: user?.year || '',
    department: user?.department || '',
    preferredLocation: user?.preferredLocation || '',
    workMode: user?.workMode || 'Hybrid',
    skills: user?.skills || []
  });

  const [customSkillInput, setCustomSkillInput] = useState('');

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

  // Get saved internships (placeholder)
  const savedInternships = internships.slice(0, 3);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSkill = () => {
    const skill = customSkillInput.trim();
    if (skill && !editedProfile.skills.includes(skill)) {
      setEditedProfile(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
      setCustomSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setEditedProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSave = () => {
    onUpdateProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="bg-white border border-gray-300 rounded-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
                {user?.fullName?.charAt(0) || <User size={40} />}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={editedProfile.fullName}
                      onChange={handleChange}
                      className="px-3 py-1 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    user?.fullName
                  )}
                </h1>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Edit2 size={18} />
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditedProfile({
                      fullName: user?.fullName || '',
                      email: user?.email || '',
                      mobile: user?.mobile || '',
                      cgpa: user?.cgpa || '',
                      year: user?.year || '',
                      department: user?.department || '',
                      preferredLocation: user?.preferredLocation || '',
                      workMode: user?.workMode || 'Hybrid',
                      skills: user?.skills || []
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                ) : (
                  <p className="text-gray-900">{user?.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="mobile"
                    value={editedProfile.mobile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                ) : (
                  <p className="text-gray-900">+91 {user?.mobile}</p>
                )}
              </div>
            </div>
          </div>

          {/* Academic Details */}
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Academic Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CGPA</label>
                {isEditing ? (
                  <input
                    type="number"
                    name="cgpa"
                    value={editedProfile.cgpa}
                    onChange={handleChange}
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                ) : (
                  <p className="text-gray-900">{user?.cgpa}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year of Study</label>
                {isEditing ? (
                  <select
                    name="year"
                    value={editedProfile.year}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                ) : (
                  <p className="text-gray-900">{user?.year}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                {isEditing ? (
                  <select
                    name="department"
                    value={editedProfile.department}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                ) : (
                  <p className="text-gray-900">{user?.department}</p>
                )}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Skills</h2>
            {isEditing && (
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={customSkillInput}
                  onChange={(e) => setCustomSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  placeholder="Add skill"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  onClick={addSkill}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Add
                </button>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {editedProfile.skills.map(skill => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm border border-gray-300"
                >
                  {skill}
                  {isEditing && (
                    <button
                      onClick={() => removeSkill(skill)}
                      className="hover:text-gray-600"
                    >
                      <X size={14} />
                    </button>
                  )}
                </span>
              ))}
              {editedProfile.skills.length === 0 && (
                <p className="text-gray-500 text-sm">No skills added yet</p>
              )}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location</label>
                {isEditing ? (
                  <select
                    name="preferredLocation"
                    value={editedProfile.preferredLocation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    {indianCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                ) : (
                  <p className="text-gray-900">{user?.preferredLocation}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Mode</label>
                {isEditing ? (
                  <div className="flex gap-4">
                    {['Remote', 'On-site', 'Hybrid'].map(mode => (
                      <label key={mode} className="flex items-center">
                        <input
                          type="radio"
                          name="workMode"
                          value={mode}
                          checked={editedProfile.workMode === mode}
                          onChange={handleChange}
                          className="w-4 h-4 text-black"
                        />
                        <span className="ml-2 text-gray-700">{mode}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-900">{user?.workMode}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Saved Internships */}
        <div className="mt-8 bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Saved Internships</h2>
          {savedInternships.length > 0 ? (
            <div className="space-y-4">
              {savedInternships.map(internship => (
                <button
                  key={internship.id}
                  onClick={() => navigateTo('internship', internship.id)}
                  className="w-full text-left border border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-black">{internship.title}</h3>
                      <p className="text-sm text-gray-600">{internship.company} • {internship.location}</p>
                    </div>
                    <p className="text-lg font-semibold text-black">
                      ₹{internship.salary.toLocaleString('en-IN')}/mo
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No saved internships yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

