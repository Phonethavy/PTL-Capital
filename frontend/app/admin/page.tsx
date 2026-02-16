'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Users, Mail, FileText } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    investments: 0,
    teamMembers: 0,
    contacts: 0,
    newContacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/dashboard/stats`, {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Total Investments</h3>
            <TrendingUp className="text-blue-600" size={24} />
          </div>
          <p className="text-3xl font-bold">{stats.investments}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Team Members</h3>
            <Users className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-bold">{stats.teamMembers}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">Total Contacts</h3>
            <Mail className="text-purple-600" size={24} />
          </div>
          <p className="text-3xl font-bold">{stats.contacts}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600">New Messages</h3>
            <FileText className="text-orange-600" size={24} />
          </div>
          <p className="text-3xl font-bold">{stats.newContacts}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-semibold">New contact message received</p>
              <p className="text-sm text-gray-600">From: John Doe</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-semibold">Investment added</p>
              <p className="text-sm text-gray-600">PTL Capital - Tech Division</p>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold">Team member updated</p>
              <p className="text-sm text-gray-600">Chanthone Sitthixay profile</p>
            </div>
            <span className="text-sm text-gray-500">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
