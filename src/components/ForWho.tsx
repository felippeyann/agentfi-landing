import { SectionHeader } from './HowItWorks';

const audiences = [
  {
    title: 'For agents',
    color: 'border-brand-cyan',
    accent: 'text-brand-cyan',
    desc:  "A clean interface to the economic world. Call a tool. AgentFi handles ABI encoding, gas estimation, nonce management, and broadcast. Your operational limits are explicit and inspectable — you can ask what you're allowed to do before you try.",
    items: [
      'Execute DeFi transactions via MCP tools',
      'Earn yield on idle assets',
      'Pay for services from your own balance',
      'Sign and verify A2A handshakes',
      'Inspect your policy constraints before acting',
    ],
    cta:  'Agent quickstart →',
    href: 'https://github.com/felippeyann/agentfi/blob/main/docs/agents/quickstart.md',
  },
  {
    title: 'For operators',
    color: 'border-brand-purple',
    accent: 'text-brand-purple',
    desc:  "Control without micromanagement. Set the policy once — max transaction value, allowed protocols, cooldown periods, kill switch. Watch the agent operate autonomously. Intervene only when human judgment is required.",
    items: [
      'Provision agent wallets in seconds',
      'Define on-chain policies per agent',
      'Monitor via admin dashboard',
      'Receive Discord/Telegram HITL alerts',
      'View agent P&L and gas costs',
    ],
    cta:  'Operator setup →',
    href: 'https://github.com/felippeyann/agentfi/blob/main/docs/operations/setup-checklist.md',
  },
  {
    title: 'For builders',
    color: 'border-emerald-400',
    accent: 'text-emerald-400',
    desc:  'AgentFi is Apache 2.0. Fork it. Add new protocol adapters, new chains, new tools. Build adapter packages so agents on your framework can use DeFi natively. The infrastructure is a commons — what you build on it is yours.',
    items: [
      'OpenAPI 3.0 spec for SDK generation',
      'Typed adapter packages (npm)',
      'A2A example — two agents in one file',
      'Foundry contracts for custom policies',
      'Pluggable wallet and chain providers',
    ],
    cta:  'Architecture overview →',
    href: 'https://github.com/felippeyann/agentfi/blob/main/docs/architecture/overview.md',
  },
];

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Who it's for"
          title="Built for every participant in the agent economy."
          sub="Different interfaces, same infrastructure."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className={`card-glass rounded-xl p-7 border-t-2 ${a.color} flex flex-col`}
            >
              <h3 className={`font-bold text-lg mb-3 ${a.accent}`}>{a.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{a.desc}</p>
              <ul className="flex-1 space-y-2 mb-8">
                {a.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className={`mt-0.5 shrink-0 ${a.accent}`}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${a.accent} hover:opacity-80 transition-opacity font-medium`}
              >
                {a.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
