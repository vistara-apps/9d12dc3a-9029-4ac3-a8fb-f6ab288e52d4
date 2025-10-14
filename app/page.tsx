'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Dashboard } from '@/components/Dashboard';
import { CycleTracker } from '@/components/CycleTracker';
import { LabResults } from '@/components/LabResults';
import { SupportGroups } from '@/components/SupportGroups';
import { DataConsent } from '@/components/DataConsent';

type View = 'dashboard' | 'cycle' | 'labs' | 'support' | 'consent';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'cycle':
        return <CycleTracker />;
      case 'labs':
        return <LabResults />;
      case 'support':
        return <SupportGroups />;
      case 'consent':
        return <DataConsent />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-bg">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
