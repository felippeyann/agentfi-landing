const layers = [
  {
    number: 'L4',
    title:  'MCP Server / Agent Interface',
    color:  'border-brand-cyan text-brand-cyan',
    desc:   '26 structured tools published to npm. stdio transport for local agents, SSE for hosted deployments. Your agent calls a tool — AgentFi handles the rest.',
    tags:   ['@agent_fi/mcp-server', 'stdio', 'SSE', 'OpenAPI 3.0'],
  },
  {
    number: 'L3',
    title:  'Backend API',
    color:  'border-brand-purple text-brand-purple',
    desc:   'Fastify v4 orchestration layer. Transaction pipeline: build → simulate → sign → broadcast → monitor. BullMQ workers, Prisma/PostgreSQL, A2A job queue, reputation scoring, ENS identity.',
    tags:   ['Fastify', 'BullMQ', 'Redis', 'Prisma', 'Tenderly'],
  },
  {
    number: 'L2',
    title:  'Smart Contracts',
    color:  'border-emerald-400 text-emerald-400',
    desc:   'AgentPolicyModule validates every transaction before Safe executes it. AgentExecutor batches operations and collects the protocol fee atomically on-chain — no invoices, no subscriptions.',
    tags:   ['Solidity 0.8.24', 'Foundry', 'Safe Modules', 'EIP-1271'],
  },
  {
    number: 'L1',
    title:  'Wallet Infrastructure',
    color:  'border-yellow-400 text-yellow-400',
    desc:   'Turnkey MPC splits keys across shards that never reunite on a single machine. Safe smart wallets add an on-chain policy layer — max tx value, protocol whitelist, kill switch.',
    tags:   ['Turnkey MPC', 'Safe Smart Wallets', 'ERC-4337', 'P-256'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Architecture"
          title="Four layers. Zero compromises."
          sub="Each layer has a single responsibility. The stack composes cleanly — swap out any layer without touching the others."
        />

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="hidden md:block absolute left-[2.6rem] top-8 bottom-8 w-px bg-gradient-to-b from-brand-cyan via-brand-purple to-yellow-400 opacity-30" />

          <div className="flex flex-col gap-6">
            {layers.map((l) => (
              <div key={l.number} className="flex gap-6 items-start">
                <div className={`shrink-0 w-12 h-12 rounded-lg border-2 ${l.color} flex items-center justify-center font-bold text-sm`}>
                  {l.number}
                </div>
                <div className="card-glass rounded-xl p-6 flex-1">
                  <h3 className="font-semibold text-white mb-2">{l.title}</h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{l.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {l.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-block text-xs text-brand-cyan border border-brand-cyan/20 px-3 py-1 rounded-full mb-4">
        {tag}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-zinc-400 leading-relaxed">{sub}</p>
    </div>
  );
}
