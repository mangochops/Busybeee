import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface SocialMedia {
  name: string;
  username: string;
  icon: IconDefinition;
}

const socialMediaData: SocialMedia[] = [
  { name: 'Twitter', username: '@twitterhandle', icon: faTwitter },
  { name: 'Facebook', username: 'facebookpage', icon: faFacebook },
  { name: 'Instagram', username: '@instauser', icon: faInstagram },
  { name: 'LinkedIn', username: 'linkedinprofile', icon: faLinkedin },
];

interface FormData {
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

const LinkedAccounts: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false]); // State array for modal visibility
  const [formData, setFormData] = useState<FormData>({
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // State for light/dark theme

  const openModal = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = true;
    setIsOpen(newIsOpen);
  };

  const closeModal = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = false;
    setIsOpen(newIsOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, index: number) => {
    e.preventDefault();
    console.log(`Saving ${socialMediaData[index].name} login info:`, formData); // You can handle form submission logic here
    closeModal(index);
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}>
      <Breadcrumb pageName="LinkedAccounts" />

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {socialMediaData.map((social, index) => (
            <div key={social.name} className="bg-boxdark rounded-lg shadow-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4">
                    <FontAwesomeIcon icon={social.icon} size="2x" className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{social.name}</h3>
                    <p className="text-gray-600">{social.username}</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal(index)}
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  Link
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {socialMediaData.map((social, index) => (
        isOpen[index] && (
          <div key={social.name} className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-boxdark p-8 rounded-lg shadow-lg max-w-md w-full z-50">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-white font-bold">Link {social.name}</h2>
                <button
                  onClick={() => closeModal(index)}
                  className="text-white hover:text-gray-800 focus:outline-none"
                >
                  <FontAwesomeIcon icon={['far', 'times-circle']} size="2x" />
                </button>
              </div>
              <form onSubmit={(e) => handleSubmit(e, index)}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">{social.name} Username</label>
                  <input
                    type="text"
                    name={social.name.toLowerCase()} // Using lowercase name for simplicity
                    
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder={`Enter ${social.name} username`}
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      ))}

      {/* Theme toggle button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </div>
    </div>
  );
};

export default LinkedAccounts;


