'use client';

import { Shield, Check, X, Eye } from 'lucide-react';
import { useState } from 'react';

export function DataConsent() {
  const [consents, setConsents] = useState([
    {
      id: 1,
      entity: 'Fertility Clinic',
      basename: 'fertilityclinic.base.eth',
      dataTypes: ['Lab Results', 'Cycle Data', 'Medical History'],
      granted: true,
      date: 'Oct 15, 2024',
    },
    {
      id: 2,
      entity: 'Genetics Lab',
      basename: 'geneticslab.base.eth',
      dataTypes: ['PGT-A Results'],
      granted: true,
      date: 'Oct 18, 2024',
    },
    {
      id: 3,
      entity: 'Research Study',
      basename: 'research.base.eth',
      dataTypes: ['Anonymized Data'],
      granted: false,
      date: 'Pending',
    },
  ]);

  const toggleConsent = (id: number) => {
    setConsents(consents.map(c => 
      c.id === id ? { ...c, granted: !c.granted } : c
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-fg mb-2">Data Consent Management</h2>
        <p className="text-text-soft">Control who can access your health data</p>
      </div>

      <div className="glass-card p-6 bg-primary/10 border-primary/20">
        <div className="flex items-start gap-4">
          <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-fg mb-2">Your Data, Your Control</h3>
            <p className="text-sm text-text-soft">
              All your health data is encrypted and stored on-chain. You have complete control over who can access it.
              Grant or revoke access at any time with on-chain consent transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {consents.map((consent) => (
          <div key={consent.id} className="glass-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-fg">{consent.entity}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    consent.granted
                      ? 'bg-green-400/20 text-green-400'
                      : 'bg-gray-400/20 text-gray-400'
                  }`}>
                    {consent.granted ? 'Active' : 'Revoked'}
                  </span>
                </div>
                <p className="text-sm text-text-soft mb-3">{consent.basename}</p>
                <div className="flex flex-wrap gap-2">
                  {consent.dataTypes.map((type, i) => (
                    <span key={i} className="px-3 py-1 bg-surface rounded-full text-xs text-text-soft">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => toggleConsent(consent.id)}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  consent.granted
                    ? 'bg-green-400/20 text-green-400 hover:bg-green-400/30'
                    : 'bg-gray-400/20 text-gray-400 hover:bg-gray-400/30'
                }`}
              >
                {consent.granted ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <span className="text-sm text-text-muted">
                {consent.granted ? `Granted on ${consent.date}` : consent.date}
              </span>
              <button className="flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition-colors duration-200">
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-fg mb-4">Access Log</h3>
        <div className="space-y-3">
          {[
            { entity: 'Fertility Clinic', action: 'Viewed Lab Results', time: '2 hours ago' },
            { entity: 'Genetics Lab', action: 'Updated PGT-A Results', time: '1 day ago' },
            { entity: 'Fertility Clinic', action: 'Viewed Cycle Data', time: '2 days ago' },
          ].map((log, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-surface rounded-lg">
              <div>
                <p className="text-sm font-medium text-fg">{log.entity}</p>
                <p className="text-xs text-text-muted">{log.action}</p>
              </div>
              <span className="text-xs text-text-soft">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
