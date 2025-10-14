'use client';

import { Activity, Calendar, FileText, TrendingUp } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Current Cycle Day', value: '12', icon: Calendar, color: 'text-blue-400' },
    { label: 'Upcoming Appointments', value: '3', icon: Activity, color: 'text-green-400' },
    { label: 'Lab Results', value: '5', icon: FileText, color: 'text-purple-400' },
    { label: 'Treatment Progress', value: '75%', icon: TrendingUp, color: 'text-accent' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-fg mb-2">Dashboard</h2>
        <p className="text-text-soft">Your fertility journey overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="metric-card">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-surface rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-3xl font-bold text-fg mb-1">{stat.value}</p>
              <p className="text-sm text-text-soft">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-fg mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { title: 'Lab Results Ready', time: '2 hours ago', type: 'success' },
              { title: 'Cycle Day 12 Update', time: '5 hours ago', type: 'info' },
              { title: 'Appointment Reminder', time: '1 day ago', type: 'warning' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-surface rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'info' ? 'bg-blue-400' : 'bg-yellow-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-fg">{activity.title}</p>
                  <p className="text-xs text-text-muted">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-fg mb-4">Treatment Timeline</h3>
          <div className="space-y-4">
            <div className="relative pl-8 pb-8 border-l-2 border-primary">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]"></div>
              <p className="text-sm font-medium text-fg">Stimulation Phase</p>
              <p className="text-xs text-text-muted">Day 8-14</p>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-gray-600">
              <div className="absolute left-0 top-0 w-4 h-4 bg-gray-600 rounded-full -translate-x-[9px]"></div>
              <p className="text-sm font-medium text-text-soft">Egg Retrieval</p>
              <p className="text-xs text-text-muted">Day 14-16</p>
            </div>
            <div className="relative pl-8 border-l-2 border-gray-600">
              <div className="absolute left-0 top-0 w-4 h-4 bg-gray-600 rounded-full -translate-x-[9px]"></div>
              <p className="text-sm font-medium text-text-soft">Embryo Transfer</p>
              <p className="text-xs text-text-muted">Day 19-21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
