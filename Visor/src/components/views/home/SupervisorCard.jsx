import React from 'react';

const SupervisorCard = ({
  name, department, researchAreas, studentsCount, rating, reviewsCount
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{department}</p>
      <p className="text-gray-500">Research Areas: {researchAreas.join(', ')}</p>
      <p className="mt-2">Students Supervised: {studentsCount}</p>
      <p>Rating: {rating} ⭐ ({reviewsCount} reviews)</p>
    </div>
  );
};

export default SupervisorCard;
