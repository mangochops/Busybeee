import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

interface Package {
  name: string;
  description: string;
  price: number;
  features: string[];
}

const Billing: React.FC = () => {
  // Define packages data
  const packages: Package[] = [
    {
      name: 'Basic',
      description: 'Essential social media management features.',
      price: 10890,
      features: [
        'Scheduled Posts',
        'Basic Analytics',
        'Content Calendar',
        'Support via Email',
      ],
    },
    {
      name: 'Standard',
      description: 'Enhanced features for growing businesses.',
      price: 21890,
      features: [
        'Everything in Basic',
        'Advanced Analytics',
        'Custom Reporting',
        'Support via Email and Phone',
      ],
    },
    {
      name: 'Premium',
      description: 'Comprehensive suite for large enterprises.',
      price: 32890,
      features: [
        'Everything in Standard',
        'Dedicated Account Manager',
        '24/7 Support',
        'Custom Strategy Sessions',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Breadcrumb pageName="Billing" />

      <div className="container mx-auto py-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-boxdark rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 align-center text-white">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <ul className="mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="h-4 w-4 mr-1 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto text-center">
                <p className="text-lg font-semibold">ksh{pkg.price}/month</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billing;
