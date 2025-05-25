
import React from 'react';
import { Button } from '../components/Button';
import { TELEGRAM_COMMUNITY_URL } from '../constants';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-4 py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Join the Revolution
            </span>
            <br />
            <span className="text-gray-300">of Crypto Education</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Unlock the world of cryptocurrency with Satoshi Academy. Your journey to financial literacy starts here.
          </p>
          <Button
            as="a"
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="text-lg py-4 px-10"
          >
            Join Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8">
            Why Satoshi Academy?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              Empowering a new generation to understand crypto from the ground up. Built for beginners, guided by experience. We believe in making complex concepts simple and accessible for everyone.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              Our mission is to provide high-quality, unbiased education to help you navigate the exciting and evolving world of digital assets with confidence.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-600/30 hover:border-yellow-500 transition-colors">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-3">Beginner Friendly</h3>
                <p className="text-gray-400">Start with the basics. No prior knowledge needed. We break down complex topics into easy-to-understand modules.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-600/30 hover:border-yellow-500 transition-colors">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-3">Expert Guidance</h3>
                <p className="text-gray-400">Learn from experienced professionals in the crypto space. Get insights you can trust.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-600/30 hover:border-yellow-500 transition-colors">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-3">Community Support</h3>
                <p className="text-gray-400">Join a vibrant community of learners and enthusiasts. Share, discuss, and grow together.</p>
            </div>
        </div>
      </section>
    </div>
  );
};
