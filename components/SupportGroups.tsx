'use client';

import { Users, MessageCircle, Lock, Plus } from 'lucide-react';

export function SupportGroups() {
  const groups = [
    {
      id: 1,
      name: 'IVF Journey - October 2024',
      members: 24,
      messages: 156,
      lastActivity: '2 hours ago',
      private: true,
    },
    {
      id: 2,
      name: 'Stimulation Support',
      members: 18,
      messages: 89,
      lastActivity: '5 hours ago',
      private: true,
    },
    {
      id: 3,
      name: 'Post-Transfer Care',
      members: 32,
      messages: 203,
      lastActivity: '1 day ago',
      private: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-fg mb-2">Support Groups</h2>
          <p className="text-text-soft">Connect with others on similar journeys</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Join Group
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div key={group.id} className="glass-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-fg">{group.name}</h3>
                    {group.private && <Lock className="w-4 h-4 text-text-muted" />}
                  </div>
                  <p className="text-sm text-text-soft">Last activity: {group.lastActivity}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-4 text-sm text-text-soft">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{group.members} members</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>{group.messages} messages</span>
              </div>
            </div>

            <button className="btn-primary w-full">
              View Discussion
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-fg mb-4">Community Guidelines</h3>
        <div className="space-y-3 text-sm text-text-soft">
          <p>• Be respectful and supportive of all members</p>
          <p>• Protect your privacy - use your Basename for pseudonymous interaction</p>
          <p>• Share experiences, not medical advice</p>
          <p>• Report any concerning behavior to moderators</p>
        </div>
      </div>
    </div>
  );
}
