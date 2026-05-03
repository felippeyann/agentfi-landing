import { SectionHeader } from './HowItWorks';

// TODO(ops): hosted api.agentfi.cc is offline (Railway trial expired).
// Update AGENTFI_API_URL in the Agent tab once backend is redeployed.
// Track: https://github.com/felippeyann/agentfi/issues — reactivate Railway Hobby plan.

const tabs = [
  {
    id: 'agent',
    label: 'Agent (MCP)',
    code: `// claude_desktop_config.json
{
  "mcpServers": {
    "agentfi": {
      "command": "npx",
      "args": ["-y", "@agent_fi/mcp-server"],
      "env": {
        "AGENTFI_API_URL": "https://your-backend.railway.app",
        "AGENTFI_API_KEY":  "your-agent-api-key"
      }
    }
  }
}

// That's it. Your agent now has access to 26 tools:
// swap_tokens, get_quote, supply_aave, withdraw_aave,
// create_a2a_job, accept_job, complete_job, sign_handshake...`,
  },
  {
    id: 'operator',
    label: 'Operator (self-host)',
    code: `# 1. Clone & configure
git clone https://github.com/felippeyann/agentfi
cp .env.example .env   # fill in Turnkey, Alchemy, DB, Redis

# 2. Start local stack (Postgres + Redis + Anvil)
docker compose up -d

# 3. Run migrations and start
npm install
npm run db:migrate
npm run dev            # API :3000  Admin :3001

# 4. Register your first agent
curl -X POST http://localhost:3000/v1/agents \\
  -H "x-api-secret: $API_SECRET" \\
  -H "Content-Type: application/json" \\
  -d '{ "name": "my-agent", "slug": "my-agent" }'`,
  },
  {
    id: 'docker',
    label: 'Docker Compose',
    code: `# Production-ready in one command (Railway reference deploy)
# Set environment variables in Railway dashboard or .env

# railway.json is pre-configured — just connect your repo:
# 1. railway login
# 2. railway link
# 3. railway up

# Or use docker compose for self-hosted:
docker compose -f docker-compose.yml up -d

# Includes: Postgres 16 + Redis 7 + Anvil (fork) + Backend
# Admin dashboard deploys separately to Vercel`,
  },
];

export default function Quickstart() {
  return (
    <section id="quickstart" className="py-24 px-6 bg-brand-gray/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Quickstart"
          title="Up and running in minutes."
          sub="Three paths: connect your agent via MCP, self-host the backend, or deploy to Railway."
        />

        {/* Banner: hosted backend offline */}
        <div className="mt-10 flex items-start gap-3 px-5 py-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 text-sm">
          <span className="mt-0.5 shrink-0">⚠️</span>
          <span>
            <strong>No hosted instance yet.</strong>{' '}
            There is no public <code className="text-yellow-300">api.agentfi.cc</code> endpoint at this time —
            self-hosting is the only option. Follow the operator guide below or the{' '}
            <a href="https://github.com/felippeyann/agentfi/blob/main/docs/dev-quickstart.md"
              target="_blank" rel="noopener noreferrer"
              className="underline hover:text-yellow-300">dev quickstart</a> to spin up a local stack in 3 minutes.
          </span>
        </div>

        <div className="mt-6 space-y-6">
          {tabs.map((tab, i) => (
            <div key={tab.id} className="card-glass rounded-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 font-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-medium text-white">{tab.label}</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
              </div>
              {/* Code */}
              <pre className="px-5 py-5 text-xs text-zinc-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                <code>{tab.code}</code>
              </pre>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/felippeyann/agentfi/blob/main/docs/dev-quickstart.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-cyan hover:opacity-80 transition-opacity border border-brand-cyan/30 px-5 py-2.5 rounded hover:bg-brand-cyan/5"
          >
            Dev quickstart (3 min, zero credentials) →
          </a>
          <a
            href="https://github.com/felippeyann/agentfi/blob/main/examples/a2a-collab/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors border border-brand-border px-5 py-2.5 rounded hover:border-zinc-500"
          >
            A2A two-agent example →
          </a>
          <a
            href="https://github.com/felippeyann/agentfi/blob/main/docs/api-reference.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors border border-brand-border px-5 py-2.5 rounded hover:border-zinc-500"
          >
            Full API reference →
          </a>
        </div>
      </div>
    </section>
  );
}
