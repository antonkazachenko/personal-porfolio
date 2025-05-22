import React from 'react';

const RightsSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mb-7">
      <hr className="mb-7 h-px w-full border-0 bg-gray-400" />
      <p className="copyright-text">
        Copyright &copy; {currentYear} Anton Kazachenko. All Rights Reserved.
      </p>
    </div>
  );
};

export default RightsSection;
