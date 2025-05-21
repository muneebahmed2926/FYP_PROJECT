import React from 'react';

const CardLayout = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default CardLayout;
