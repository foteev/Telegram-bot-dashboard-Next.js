'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Telegram Bot Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/bot-config" className="bg-white p-4 rounded shadow hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold">Bot Configuration</h2>
            <p className="text-gray-600">Manage bot settings and parameters</p>
          </Link>
          
          <Link href="/user-logs" className="bg-white p-4 rounded shadow hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold">User Logs</h2>
            <p className="text-gray-600">View user interaction history</p>
          </Link>
          
          <Link href="/command-stats" className="bg-white p-4 rounded shadow hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold">Command Statistics</h2>
            <p className="text-gray-600">Analyze bot command usage</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
