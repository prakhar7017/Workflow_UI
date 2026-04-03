function NavIcon({ children, className = 'h-[18px] w-[18px]' }) {
  return (
    <span className={`shrink-0 text-current ${className}`} aria-hidden>
      {children}
    </span>
  )
}

const iconProps = {
  className: 'h-[18px] w-[18px]',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const icons = {
  agents: (
    <svg {...iconProps}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  ai: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-box-icon lucide-file-box"><path d="M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M11.7 14.2 7 17l-4.7-2.8"/><path d="M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z"/><path d="M7 17v5"/></svg>  
  ),
  library: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M8 7v10M12 7v10M16 7v10" />
    </svg>
  ),
  published: (
    <svg {...iconProps}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  machine: (
    <svg {...iconProps}>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  ),
  queue: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rows3-icon lucide-rows-3"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/></svg>
  ),
  trigger: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
  ),
  job: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-play-icon lucide-monitor-play"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
  ),
  execution: (
    <svg {...iconProps}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-play-icon lucide-monitor-play"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
  ),
  vault: (
    <svg {...iconProps}>
      <path d="M12 3 5 6v5c0 4.2 2.7 7.9 7 10 4.3-2.1 7-5.8 7-10V6l-7-3Z" />
    </svg>
  ),
  knowledge: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check-icon lucide-book-open-check"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg>
  ),
  key: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-icon lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
  ),
  tenant: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-id-card-icon lucide-id-card"><path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
  ),
  integrations: (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
  ),
}

function NavItem({ icon, label, active, onNavigate }) {
  return (
    <button
      type="button"
      onClick={onNavigate}
      className={`group relative flex w-full items-center gap-3 rounded-lg py-2.5 pl-[13px] pr-3 text-left text-sm font-medium transition-colors duration-200 ${
        active
          ? 'bg-[#EEF2FF] text-[#3730A3] before:absolute before:left-0 before:top-1/2 before:h-6 before:w-[3px] before:-translate-y-1/2 before:rounded-full before:bg-[#4F46E5]'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <NavIcon className={active ? 'text-[#4F46E5]' : 'text-gray-400 group-hover:text-gray-600'}>
        {icons[icon]}
      </NavIcon>
      <span className="truncate">{label}</span>
    </button>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="px-3 pb-2 pt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400 first:pt-0">
      {children}
    </p>
  )
}

export function Sidebar({ mobileOpen, onClose }) {
  const handleNav = () => {
    onClose?.()
  }

  return (
    <>
      <aside
        className={`fixed bottom-0 left-0 top-16 z-40 flex w-[260px] shrink-0 flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-out lg:static lg:top-auto lg:h-full lg:min-h-0 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav className="flex-1 overflow-y-auto px-2 pb-8 pt-4">
          <SectionLabel>My Projects</SectionLabel>
          <div className="flex flex-col gap-0.5">
            <NavItem icon="agents" label="Agents" onNavigate={handleNav} />
            <NavItem icon="ai" label="AI Models" onNavigate={handleNav} />
            <NavItem icon="library" label="Library" onNavigate={handleNav} />
          </div>

          <SectionLabel>Orchestrator</SectionLabel>
          <div className="flex flex-col gap-0.5">
            <NavItem icon="published" label="Published" onNavigate={handleNav} />
            <NavItem icon="machine" label="Machines" onNavigate={handleNav} />
            <NavItem icon="queue" label="Queues" onNavigate={handleNav} />
            <NavItem icon="trigger" label="Triggers" onNavigate={handleNav} />
            <NavItem icon="job" label="Jobs" onNavigate={handleNav} />
            <NavItem icon="execution" label="Executions" onNavigate={handleNav} />
            <NavItem icon="vault" label="Vault" onNavigate={handleNav} />
            <NavItem
              icon="knowledge"
              label="Knowledge Base"
              active
              onNavigate={handleNav}
            />
            <NavItem icon="key" label="Key Store" onNavigate={handleNav} />
          </div>

          <SectionLabel>Admin</SectionLabel>
          <div className="flex flex-col gap-0.5">
            <NavItem icon="tenant" label="Tenant" onNavigate={handleNav} />
            <NavItem icon="integrations" label="Integrations" onNavigate={handleNav} />
          </div>
        </nav>
      </aside>
    </>
  )
}
