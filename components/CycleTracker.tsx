'use client';

import { Calendar, Plus, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function CycleTracker() {
  const [selectedDay, setSelectedDay] = useState(12);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-fg mb-2">Cycle Tracker</h2>
          <p className="text-text-soft">Monitor your fertility cycle</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Log Data
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-fg">Current Cycle</h3>
            <div className="flex items-center gap-2 text-sm text-text-soft">
              <Calendar className="w-4 h-4" />
              <span>Day {selectedDay} of 28</span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                  day === selectedDay
                    ? 'bg-primary text-white'
                    : day <= selectedDay
                    ? 'bg-surface text-fg hover:bg-opacity-80'
                    : 'bg-bg text-text-muted hover:bg-surface'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-surface rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-soft">Hormone Levels</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="h-2 bg-bg rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-lg">
                <p className="text-xs text-text-muted mb-1">Estradiol</p>
                <p className="text-lg font-semibold text-fg">152.80</p>
                <p className="text-xs text-green-400">+12% from yesterday</p>
              </div>
              <div className="p-4 bg-surface rounded-lg">
                <p className="text-xs text-text-muted mb-1">Progesterone</p>
                <p className="text-lg font-semibold text-fg">0.8</p>
                <p className="text-xs text-text-soft">Normal range</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Today's Tasks</h3>
            <div className="space-y-3">
              {[
                { task: 'Morning medication', time: '8:00 AM', done: true },
                { task: 'Evening medication', time: '8:00 PM', done: false },
                { task: 'Log symptoms', time: 'Before bed', done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                  <input
                    type="checkbox"
                    checked={item.done}
                    className="w-5 h-5 rounded border-gray-600"
                    readOnly
                  />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${item.done ? 'text-text-muted line-through' : 'text-fg'}`}>
                      {item.task}
                    </p>
                    <p className="text-xs text-text-muted">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-soft">Cycle Length</span>
                <span className="text-sm font-medium text-fg">28 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-soft">Medications</span>
                <span className="text-sm font-medium text-fg">3 active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-soft">Next Appointment</span>
                <span className="text-sm font-medium text-accent">Oct 26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
