'use client';

import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Users, 
  Shield,
  Heart
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'cycle', label: 'Cycle Tracker', icon: Calendar },
    { id: 'labs', label: 'Lab Results', icon: FileText },
    { id: 'support', label: 'Support Groups', icon: Users },
    { id: 'consent', label: 'Data Consent', icon: Shield },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-fg">FertilityFlow</h1>
            <p className="text-xs text-text-muted">Secure Journey</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`sidebar-item w-full ${
                currentView === item.id ? 'active' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="glass-card p-4">
          <p className="text-sm text-text-soft mb-2">Treatment Stage</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium">Stimulation</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
