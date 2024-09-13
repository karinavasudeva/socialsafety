import React from 'react';
import { Alert, AlertTitle } from './ui/alert';
import { Button } from './ui/button';

const SocialServicesPortal = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">NationalBenefits.gov</h1>
          <nav>
            <Button variant="outline" className="text-white border-white">English</Button>
            <Button variant="ghost" className="text-white ml-2">Chat</Button>
          </nav>
        </div>
      </header>

      <Alert className="bg-yellow-100 border-yellow-400">
        <AlertTitle className="text-yellow-800">
          SCAM ALERT: Protect your information. We will never contact you by text about your benefits.
        </AlertTitle>
      </Alert>

      <main className="container mx-auto mt-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Apply for benefits easily online.</h2>
              <p className="text-xl mb-4">Submit your application for national benefits in 15 minutes or less.</p>
              <Button className="bg-blue-600 text-white px-6 py-3 text-lg">Apply now</Button>
            </div>
            <div className="w-1/3">
              <img src="/api/placeholder/300/300" alt="Application process illustration" className="rounded-full" />
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Already applied?</h3>
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/50/50" alt="Upload icon" className="mr-4" />
              <div>
                <h4 className="font-semibold">Upload Documents</h4>
                <p>Send documents securely to complete your application.</p>
              </div>
            </div>
            <Button className="w-full">Upload documents</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Application Status</h3>
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/50/50" alt="Status icon" className="mr-4" />
              <div>
                <h4 className="font-semibold">Check Your Status</h4>
                <p>Get an update on your pending application.</p>
              </div>
            </div>
            <Button className="w-full">Check status</Button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h4 className="text-xl font-semibold mb-2">Food Assistance (SNAP)</h4>
                <p>Get help affording nutritious food for you and your family.</p>
                <Button className="text-blue-600 hover:underline">Learn more about SNAP</Button>
            </div>
            <div>
                <h4 className="text-xl font-semibold mb-2">Housing Assistance</h4>
                <p>Find support for rent, utilities, and preventing eviction.</p>
                <Button className="text-blue-600 hover:underline">Explore housing programs</Button>
            </div>
            <div>
                <h4 className="text-xl font-semibold mb-2">Healthcare Coverage</h4>
                <p>Access affordable health insurance options and medical care.</p>
                <Button className="text-blue-600 hover:underline">Discover healthcare benefits</Button>
            </div>
            <div>
                <h4 className="text-xl font-semibold mb-2">Employment Services</h4>
                <p>Get help finding work, training, and career development.</p>
                <Button className="text-blue-600 hover:underline">Find job assistance</Button>
            </div>
            </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 NationalBenefits.gov | Privacy Policy | Accessibility</p>
        </div>
      </footer>
    </div>
  );
};

export default SocialServicesPortal;