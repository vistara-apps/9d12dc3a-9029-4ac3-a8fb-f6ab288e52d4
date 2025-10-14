'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar, Identity } from '@coinbase/onchainkit/identity';
import { Bell, Settings2 } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-surface border-b border-gray-700 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-medium text-fg">Welcome back</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-bg rounded-lg transition-colors duration-200 relative">
          <Bell className="w-5 h-5 text-text-soft" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
        </button>

        <button className="p-2 hover:bg-bg rounded-lg transition-colors duration-200">
          <Settings2 className="w-5 h-5 text-text-soft" />
        </button>

        <Wallet>
          <ConnectWallet>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg hover:bg-blue-600 transition-colors duration-200">
              <Avatar className="w-6 h-6" />
              <Name className="text-sm font-medium text-white" />
            </div>
          </ConnectWallet>
        </Wallet>
      </div>
    </header>
  );
}
