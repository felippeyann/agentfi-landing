const docLinks = [
  { label: 'Vision',              href: 'https://github.com/felippeyann/agentfi/blob/main/VISION.md' },
  { label: 'Architecture',        href: 'https://github.com/felippeyann/agentfi/blob/main/docs/architecture/overview.md' },
  { label: 'API Reference',       href: 'https://github.com/felippeyann/agentfi/blob/main/docs/api-reference.md' },
  { label: 'Dev Quickstart',      href: 'https://github.com/felippeyann/agentfi/blob/main/docs/dev-quickstart.md' },
  { label: 'Operator Setup',      href: 'https://github.com/felippeyann/agentfi/blob/main/docs/operations/setup-checklist.md' },
  { label: 'Agent Quickstart',    href: 'https://github.com/felippeyann/agentfi/blob/main/docs/agents/quickstart.md' },
  { label: 'Contract Deployment', href: 'https://github.com/felippeyann/agentfi/blob/main/docs/operations/contract-deployment.md' },
  { label: 'A2A Example',         href: 'https://github.com/felippeyann/agentfi/blob/main/examples/a2a-collab/README.md' },
];

const projectLinks = [
  { label: 'GitHub',        href: 'https://github.com/felippeyann/agentfi' },
  { label: 'npm package',   href: 'https://www.npmjs.com/package/@agent_fi/mcp-server' },
  { label: 'CHANGELOG',     href: 'https://github.com/felippeyann/agentfi/blob/main/CHANGELOG.md' },
  { label: 'Security',      href: 'https://github.com/felippeyann/agentfi/blob/main/SECURITY.md' },
  { label: 'Contributing',  href: 'https://github.com/felippeyann/agentfi/blob/main/CONTRIBUTING.md' },
  { label: 'License (Apache 2.0)', href: 'https://github.com/felippeyann/agentfi/blob/main/LICENSE' },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border">
      {/* CTA band */}
      <div className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to give your agent<br />
            <span className="text-gradient-cyan">real economic capacity?</span>
          </h2>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
            Self-hosted. Apache 2.0. No vendor lock-in.<br />
            Your agents. Your infrastructure. Your rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/felippeyann/agentfi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded bg-brand-cyan text-brand-black font-semibold hover:bg-brand-cyan/90 transition-colors text-sm"
            >
              View on GitHub →
            </a>
            <a
              href="https://github.com/felippeyann/agentfi/blob/main/docs/dev-quickstart.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border border-brand-border text-zinc-300 hover:border-zinc-500 transition-colors text-sm"
            >
              Local dev in 3 minutes
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <div className="text-brand-cyan font-bold text-base mb-1">
              Agent<span className="text-white">Fi</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mt-2">
              The economic layer for non-human intelligence.<br />
              Apache 2.0 · Self-hosted · Open source.
            </p>
          </div>

          <div>
            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Documentation</h4>
            <ul className="space-y-2.5">
              {docLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Project</h4>
            <ul className="space-y-2.5">
              {projectLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} AgentFi. Apache 2.0 License.
          </p>
          <p className="text-xs text-zinc-600 font-mono">
            agentfi.cc
          </p>
        </div>
      </div>
    </footer>
  );
}
