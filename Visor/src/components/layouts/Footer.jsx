import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <i className="fas fa-link mr-2" /> Quick Links
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-blue-300 transition flex items-center">
              <i className="fas fa-chevron-right mr-2 text-xs" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition flex items-center">
              <i className="fas fa-chevron-right mr-2 text-xs" /> Student Portal
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition flex items-center">
              <i className="fas fa-chevron-right mr-2 text-xs" /> Project Submissions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300 transition flex items-center">
              <i className="fas fa-chevron-right mr-2 text-xs" /> Supervisor Resources
            </a>
          </li>
        </ul>
      </div>
      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <i className="fas fa-envelope mr-2" /> Contact Us
        </h3>
        <address className="not-italic">
          <p className="mb-2 flex items-center">
            <i className="fas fa-map-marker-alt mr-2" /> Computer Science Department
          </p>
          <p className="mb-2 flex items-center">
            <i className="fas fa-phone-alt mr-2" /> +123 456 7890
          </p>
          <p className="mb-2 flex items-center">
            <i className="fas fa-envelope mr-2" /> fyp-support@university.edu
          </p>
          <p className="mb-2 flex items-center">
            <i className="fas fa-clock mr-2" /> Mon-Fri: 9:00 AM - 5:00 PM
          </p>
        </address>
      </div>
      {/* Social Media & Resources */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <i className="fas fa-share-alt mr-2" /> Connect With Us
        </h3>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-400 transition">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition">
            <i className="fab fa-youtube" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <h4 className="text-md font-semibold mt-6 mb-2 flex items-center">
          <i className="fas fa-download mr-2" /> Resources
        </h4>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="px-3 py-1 bg-gray-700 rounded-md text-sm hover:bg-gray-600 transition">
            FYP Guidelines
          </a>
          <a href="#" className="px-3 py-1 bg-gray-700 rounded-md text-sm hover:bg-gray-600 transition">
            Templates
          </a>
          <a href="#" className="px-3 py-1 bg-gray-700 rounded-md text-sm hover:bg-gray-600 transition">
            Forms
          </a>
        </div>
      </div>
    </div>
    {/* Copyright & Credits */}
    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
      <p>
        © 2023 FYP Supervisor System. All rights reserved.
        <span className="mx-2">|</span>
        Developed by Computer Science Department
      </p>
      <p className="mt-2">
        <a href="#" className="hover:text-blue-300 transition">Privacy Policy</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-blue-300 transition">Terms of Service</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-blue-300 transition">Help Center</a>
      </p>
    </div>
  </div>
</footer>

    
    </>
  )
}

export default Footer