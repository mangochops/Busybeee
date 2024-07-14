import React, { useState, ChangeEvent, FormEvent } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

interface FormData {
  photo: File | null;
  caption: string;
}



const Advertisements: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    photo: null,
    caption: '',
  });


  // Function to handle file upload
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        photo: file,
      }));
    }
  };

  // Function to handle caption input change
  const handleCaptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      caption: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { photo, caption } = formData;
    console.log('Creating ad with photo:', photo, 'and caption:', caption);
    // Reset form fields after submission
    setFormData({
      photo: null,
      caption: '',
    });
  };

  // Dummy data for illustration



  return (
    <div className='bg-gray-800 text-white' >
      <Breadcrumb pageName="Advertisements" />

      <div className="container mx-auto py-8">
        <div className="max-w-lg mx-auto bg-boxdark p-8 rounded-lg shadow-lg">
          
          
          {/* Form for uploading photo and adding caption */}
          <form onSubmit={handleSubmit}>
            {/* Photo Upload */}
            <div className="mb-4">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handleFileUpload}
                className="mt-1 block w-full px-3 py-2 border border-dark rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            {/* Caption Input */}
            <div className="mb-4">
              <label htmlFor="caption" className="block text-sm font-medium text-white">Caption</label>
              <textarea
                id="caption"
                rows={4}
                value={formData.caption}
                onChange={handleCaptionChange}
                className="mt-1 bg-boxdark block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter caption for your advertisement"
                required
              />
            </div>

            {/* Create Ad Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Create Ad
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
