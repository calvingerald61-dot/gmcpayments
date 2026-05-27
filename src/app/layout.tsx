import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GMC Global Payments - Financial Advice Subscription',
  description: 'Premium financial advice subscription with secure payments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
