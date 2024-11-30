'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
            >
              Dashboard
            </Link>
            <Link 
              href="/user-logs" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/user-logs')}`}
            >
              User Logs
            </Link>
          </div>
          <button
            onClick={() => signOut()}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
