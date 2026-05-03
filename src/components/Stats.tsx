const stats = [
  { value: '26',        label: 'MCP tools',               sub: '15 DeFi + 11 A2A' },
  { value: '4',         label: 'chains supported',         sub: 'ETH · Base · Arbitrum · Polygon' },
  { value: 'MPC',       label: 'wallet infrastructure',    sub: 'Keys never reconstructed' },
  { value: 'on-chain',  label: 'policy enforcement',       sub: 'AgentPolicyModule + Safe' },
];

export default function Stats() {
  return (
    <section className="border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-brand-cyan mb-1">{s.value}</div>
            <div className="text-sm text-white mb-0.5">{s.label}</div>
            <div className="text-xs text-zinc-500">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
