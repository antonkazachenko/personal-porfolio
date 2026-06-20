import React from 'react';
import { TabIcon } from '@/public/icons';

const RightsSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="rights-section">
      <button
        className="rights-ak-logo-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <TabIcon className="rights-ak-logo" />
      </button>
      <p className="copyright-text">
        &copy; {currentYear} Anton Kazachenko. All Rights Reserved.
      </p>
    </div>
  );
};

export default RightsSection;
