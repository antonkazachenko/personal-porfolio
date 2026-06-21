'use client';

import React, { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';

const DEFAULT_CREDENTIALS: { key: string; value: string }[] = [
  { key: 'Email:', value: 'anton@gmail.com' },
  { key: 'Password:', value: 'test12345' },
];

interface DemoCredentialsProps {
  credentials?: { key: string; value: string }[];
}

const DemoCredentials: React.FC<DemoCredentialsProps> = ({ credentials = DEFAULT_CREDENTIALS }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied((current) => (current === value ? null : current)), 1500);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <div className={`demo-creds${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="demo-creds-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="demo-creds-dot" />
        Demo Credentials
        <ChevronDown className="demo-creds-chevron" size={10} strokeWidth={2} aria-hidden="true" />
      </button>

      <div className="demo-creds-reveal">
        <div className="demo-creds-reveal-inner">
          <div className="demo-creds-panel">
            <span className="demo-creds-label">Demo Access</span>
            <span className="demo-creds-divider" />
            {credentials.map(({ key, value }) => (
              <div key={key} className="demo-creds-cred">
                <span className="demo-creds-cred-key">{key}</span>
                <span className="demo-creds-cred-val">{value}</span>
                <button
                  type="button"
                  className="demo-creds-copy"
                  onClick={() => handleCopy(value)}
                  aria-label={`Copy ${key.replace(':', '').toLowerCase()}`}
                >
                  {copied === value ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCredentials;
