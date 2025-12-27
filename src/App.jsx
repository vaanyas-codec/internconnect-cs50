import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import BrowsePage from './pages/BrowsePage';
import CompaniesPage from './pages/CompaniesPage';
import ResourcesPage from './pages/ResourcesPage';
import InternshipDetailPage from './pages/InternshipDetailPage';
import ProfilePage from './pages/ProfilePage';
import ResumeGuideArticle from './pages/articles/ResumeGuideArticle';
import InternshipConversionArticle from './pages/articles/InternshipConversionArticle';

/**
 * Main App Component
 * 
 * Manages user authentication state and view switching
 */

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [selectedInternshipId, setSelectedInternshipId] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
    setSelectedInternshipId(null);
  };

  const handleUpdateProfile = (updatedProfile) => {
    setUser(prev => ({ ...prev, ...updatedProfile }));
  };

  // Navigation functions
  const navigateTo = (view, internshipId = null) => {
    setCurrentView(view);
    if (internshipId) {
      setSelectedInternshipId(internshipId);
    }
  };

  // Render current view based on state
  const renderCurrentView = () => {
    if (!user && currentView !== 'login') {
      return <LoginPage onLogin={handleLogin} navigateTo={navigateTo} />;
    }

    switch (currentView) {
      case 'login':
        return <LoginPage onLogin={handleLogin} navigateTo={navigateTo} />;
      case 'dashboard':
        return <DashboardPage user={user} navigateTo={navigateTo} />;
      case 'browse':
        return <BrowsePage user={user} navigateTo={navigateTo} />;
      case 'companies':
        return <CompaniesPage navigateTo={navigateTo} />;
      case 'resources':
        return <ResourcesPage navigateTo={navigateTo} />;
      case 'internship':
        return (
          <InternshipDetailPage
            user={user}
            internshipId={selectedInternshipId}
            navigateTo={navigateTo}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            user={user}
            onUpdateProfile={handleUpdateProfile}
            navigateTo={navigateTo}
          />
        );
      case 'resource-resume-guide':
        return <ResumeGuideArticle navigateTo={navigateTo} />;
      case 'resource-internship-conversion':
        return <InternshipConversionArticle navigateTo={navigateTo} />;
      default:
        return <DashboardPage user={user} navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {user && <Header user={user} onLogout={handleLogout} navigateTo={navigateTo} />}
      
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {user && <Footer />}
    </div>
  );
}

export default App;
