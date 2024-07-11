import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Profile: React.FC = () => {
  const [username, setUsername] = useState<string>('JohnDoe');
  const [email, setEmail] = useState<string>('johndoe@example.com');
  const [bio, setBio] = useState<string>('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to save updated profile information
    console.log('Updated profile:', { username, email, bio });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Breadcrumb pageName="Profile" />

      <div className="container mx-auto py-8">
        
        <div className="max-w-md mx-auto bg-boxdark p-8 rounded-lg shadow-lg">
          {/* Profile Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            {/* Bio */}
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-white">Bio</label>
              <textarea
                id="bio"
                rows={4}
                value={bio}
                onChange={handleBioChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Tell us about yourself"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
