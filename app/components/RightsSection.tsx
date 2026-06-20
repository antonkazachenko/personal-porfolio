import React from 'react';
import { TabIcon } from '@/public/icons';

const RightsSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="rights-section">
      <TabIcon className="rights-ak-logo" />
      <p className="copyright-text">
        &copy; {currentYear} Anton Kazachenko. All Rights Reserved.
      </p>
    </div>
  );
};

export default RightsSection;
