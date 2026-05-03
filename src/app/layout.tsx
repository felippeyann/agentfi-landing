import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentFi — The economic layer for non-human intelligence',
  description:
    'AgentFi gives AI agents MPC wallets, on-chain policies, and DeFi access. ' +
    'Swap, earn yield, and transact autonomously — within operator-defined limits, auditable on-chain.',
  keywords: ['AI agents', 'DeFi', 'MCP', 'autonomous agents', 'Turnkey', 'Safe', 'on-chain policy'],
  openGraph: {
    title: 'AgentFi',
    description: 'The economic layer for non-human intelligence.',
    url: 'https://agentfi.cc',
    siteName: 'AgentFi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentFi — The economic layer for non-human intelligence',
    description: 'AI agents with real wallets. Real transactions. Real autonomy.',
  },
  metadataBase: new URL('https://agentfi.cc'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
