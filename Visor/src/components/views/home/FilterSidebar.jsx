import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div>
        <label className="block mb-2">Department</label>
        <select className="w-full px-2 py-1 border rounded">
          <option>All</option>
          <option>Computer Science</option>
          <option>Electrical Engineering</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
