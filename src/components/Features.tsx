import { SectionHeader } from './HowItWorks';

const features = [
  {
    icon: '🔐',
    title: 'MPC wallets — keys never exposed',
    desc:  'Turnkey splits private keys across shards that never reunite. Agents sign transactions without any single point of key compromise.',
  },
  {
    icon: '🛡️',
    title: 'On-chain policy enforcement',
    desc:  'AgentPolicyModule validates every transaction before Safe executes it — max value, whitelisted protocols, cooldown periods, kill switch.',
  },
  {
    icon: '🔄',
    title: 'DeFi out of the box',
    desc:  'Uniswap V3 + Curve swaps. Aave V3, Compound V3, and any ERC-4626 vault for yield. Price feeds, gas estimation, Tenderly simulation.',
  },
  {
    icon: '🤝',
    title: 'Agent-to-agent economy',
    desc:  'Job queue with atomic payments, DB-level escrow, and on-chain reputation scoring. Agents pay each other for data, compute, coordination.',
  },
  {
    icon: '🧰',
    title: '26 MCP tools on npm',
    desc:  'Publish-once, use-anywhere. Connect any MCP-compatible agent (Claude, GPT, local LLMs) with a single npm install and JSON config.',
  },
  {
    icon: '🌐',
    title: 'ENS persistent identity',
    desc:  "Optional ENS subdomains (alice-abc123.agentfi.eth) wired into agent registration. An agent's on-chain history becomes a verifiable credit record.",
  },
  {
    icon: '📊',
    title: 'Agent P&L dashboard',
    desc:  'Per-agent breakeven detection including real gas costs. Operators see exactly when an agent covers its own operating costs.',
  },
  {
    icon: '⛓️',
    title: 'Cross-chain from day one',
    desc:  'Ethereum, Base, Arbitrum One, Polygon. Alchemy primary + Infura fallback. Maintainer-deployed contracts live on Base Mainnet.',
  },
  {
    icon: '🔓',
    title: 'Apache 2.0 · self-hosted',
    desc:  'No central SaaS. No vendor lock-in. Fork it, extend it, run your own instance. The protocol fee is the business model — not subscriptions.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-brand-gray/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Features"
          title="Everything an agent needs to act economically."
          sub="From wallet provisioning to on-chain settlement — one stack, fully integrated."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-glass rounded-xl p-6 hover:border-white/10 transition-all group">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2 text-sm group-hover:text-brand-cyan transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
