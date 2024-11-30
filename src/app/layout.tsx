import './globals.css';
import AuthProvider from '@/components/providers/SessionProvider';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Telegram Bot Admin',
  description: 'Admin panel for managing Telegram bot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <AuthProvider>
          <Navigation />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
