
import React from 'react';
import { useAuth } from './hooks/useAuth'; // Corrected path

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          Welcome, {user?.email}!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          This is your personal dashboard. Exclusive content and community resources will be available here soon.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300 border border-gray-700 hover:border-yellow-600">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h2 className="text-2xl font-semibold text-yellow-500">Educational Videos</h2>
            </div>
            <p className="text-gray-400">
              Coming Soon: Dive deep into crypto fundamentals with our expert-led video modules.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300 border border-gray-700 hover:border-yellow-600">
            <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              <h2 className="text-2xl font-semibold text-yellow-500">Market Insights</h2>
            </div>
            <p className="text-gray-400">
              Coming Soon: Get the latest analysis, trends, and research in the crypto market.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300 border border-gray-700 hover:border-yellow-600">
             <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 className="text-2xl font-semibold text-yellow-500">Community Resources</h2>
            </div>
            <p className="text-gray-400">
              Coming Soon: Access exclusive forums, Q&A sessions, and connect with fellow learners.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300 border border-gray-700 hover:border-yellow-600">
             <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h2 className="text-2xl font-semibold text-yellow-500">User Profile</h2>
            </div>
            <p className="text-gray-400">
              Coming Soon: Manage your account settings, track your progress, and customize your learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
