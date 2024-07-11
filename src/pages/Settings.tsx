import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Settings: React.FC = () => {
  const [notificationEnabled, setNotificationEnabled] = useState<boolean>(true);
  const [autoPostEnabled, setAutoPostEnabled] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('en');

  const handleNotificationToggle = () => {
    setNotificationEnabled(prevState => !prevState);
  };

  const handleAutoPostToggle = () => {
    setAutoPostEnabled(prevState => !prevState);
  };

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    // Logic to apply theme changes in the app
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    // Logic to apply language changes in the app
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Breadcrumb pageName="Settings" />

      <div className="container mx-auto py-8">
        
        <div className="max-w-lg mx-auto bg-boxdark p-8 rounded-lg shadow-lg">
          {/* Notification Settings */}
          <div className="mb-6">
            <h3 className="text-lg text-white font-bold mb-4">Notification Settings</h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Receive notifications</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={notificationEnabled}
                  onChange={handleNotificationToggle}
                  className="toggle-checkbox"
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          {/* Auto Post Settings */}
          <div className="mb-6">
            <h3 className="text-lg text-white font-bold mb-4">Auto Post Settings</h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Enable auto posting</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={autoPostEnabled}
                  onChange={handleAutoPostToggle}
                  className="toggle-checkbox"
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="mb-6">
            <h3 className="text-lg text-white font-bold mb-4">Theme Settings</h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Select theme</p>
              <select
                value={theme}
                onChange={(e) => handleThemeChange(e.target.value)}
                className="block w-80 p-4 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>

          {/* Language Settings */}
          <div>
            <h3 className="text-lg text-white font-bold mb-4">Language Settings</h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Select language</p>
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="block w-80 p-4 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                {/* Add more language options as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
