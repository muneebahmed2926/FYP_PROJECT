import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button (hidden on larger screens) */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button p-2 rounded-md hover:bg-gray-700 focus:outline-none">
                <i className="fas fa-bars" />
              </button>
            </div>
            {/* Centered navigation links */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-1">
                <Link
                  to="/home"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-home mr-1" /> Home
                </Link>
                <Link
                  to="/students/all-students"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-list mr-1" /> All Students
                </Link>
                <Link
                  to="/students/assign-students"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-user-plus mr-1" /> Assign Students
                </Link>
                <Link
                  to="/projects/all-projects"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-list mr-1" /> All Projects
                </Link>
                <Link
                  to="/projects/approve-projects"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-check-circle mr-1" /> Approve Projects
                </Link>
                <Link
                  to="/projects/progress-tracking"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-chart-line mr-1" /> Progress Tracking
                </Link>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-calendar-alt mr-1" /> Meetings
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
                >
                  <i className="fas fa-file-alt mr-1" /> Reports
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu (unchanged) */}
        <div className="mobile-menu hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <Link
              to="/home"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-home mr-2" /> Dashboard
            </Link>
            <Link
              to="/students/all-students"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-list mr-2" /> All Students
            </Link>
            <Link
              to="/students/assign-students"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-user-plus mr-2" /> Assign Students
            </Link>
            <Link
              to="/projects/all-projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-list mr-2" /> All Projects
            </Link>
            <Link
              to="/projects/approve-projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-check-circle mr-2" /> Approve Projects
            </Link>
            <Link
              to="/projects/progress-tracking"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-chart-line mr-2" /> Progress Tracking
            </Link>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-calendar-alt mr-2" /> Meetings
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
            >
              <i className="fas fa-file-alt mr-2" /> Reports
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
