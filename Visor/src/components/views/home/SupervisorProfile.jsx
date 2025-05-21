import React from 'react';

const SupervisorProfile = ({ supervisor }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-2">{supervisor.name}</h2>
      <p><strong>Email:</strong> {supervisor.email}</p>
      <p><strong>Expertise:</strong> {supervisor.expertise.join(', ')}</p>
      <p><strong>Students Supervised:</strong> {supervisor.studentsSupervised}</p>
    </div>
  );
};

export default SupervisorProfile;
