'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TabIcon } from '@/public/icons';

const RightsSection = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // On the main page the logo scrolls to top; on other pages it navigates home.
  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="rights-section">
      <Link
        href="/"
        className="rights-ak-logo-btn"
        onClick={handleClick}
        aria-label="Go to home"
      >
        <TabIcon className="rights-ak-logo" />
      </Link>
      <p className="copyright-text">
        &copy; {currentYear} Anton Kazachenko. All Rights Reserved.
      </p>
    </div>
  );
};

export default RightsSection;
