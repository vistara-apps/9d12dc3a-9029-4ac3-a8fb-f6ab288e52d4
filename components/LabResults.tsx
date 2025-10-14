'use client';

import { FileText, Download, Eye, Clock } from 'lucide-react';

export function LabResults() {
  const results = [
    {
      id: 1,
      name: 'Hormone Panel',
      date: 'Oct 20, 2024',
      status: 'completed',
      clinic: 'Fertility Clinic',
    },
    {
      id: 2,
      name: 'PGT-A Results',
      date: 'Oct 18, 2024',
      status: 'completed',
      clinic: 'Genetics Lab',
    },
    {
      id: 3,
      name: 'Blood Work',
      date: 'Oct 15, 2024',
      status: 'pending',
      clinic: 'Fertility Clinic',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-fg mb-2">Lab Results</h2>
          <p className="text-text-soft">View and manage your test results</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {results.map((result) => (
            <div key={result.id} className="glass-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fg mb-1">{result.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-text-soft">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {result.date}
                      </span>
                      <span>{result.clinic}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  result.status === 'completed'
                    ? 'bg-green-400/20 text-green-400'
                    : 'bg-yellow-400/20 text-yellow-400'
                }`}>
                  {result.status}
                </span>
              </div>

              {result.status === 'completed' && (
                <div className="flex gap-3">
                  <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Report
                  </button>
                  <button className="btn-secondary flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Recent Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-soft">Estradiol</span>
                  <span className="text-sm font-medium text-fg">152.80 pg/mL</span>
                </div>
                <div className="h-2 bg-bg rounded-full overflow-hidden">
                  <div className="h-full bg-green-400" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-soft">FSH</span>
                  <span className="text-sm font-medium text-fg">6.2 mIU/mL</span>
                </div>
                <div className="h-2 bg-bg rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-soft">AMH</span>
                  <span className="text-sm font-medium text-fg">2.8 ng/mL</span>
                </div>
                <div className="h-2 bg-bg rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Upcoming Tests</h3>
            <div className="space-y-3">
              <div className="p-3 bg-surface rounded-lg">
                <p className="text-sm font-medium text-fg mb-1">Blood Work</p>
                <p className="text-xs text-text-muted">Oct 26, 2024 - 8:00 AM</p>
              </div>
              <div className="p-3 bg-surface rounded-lg">
                <p className="text-sm font-medium text-fg mb-1">Ultrasound</p>
                <p className="text-xs text-text-muted">Oct 28, 2024 - 10:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
