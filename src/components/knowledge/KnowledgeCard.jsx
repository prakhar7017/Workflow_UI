export function KnowledgeCard({ title, description, createdOn, onMenuClick }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3 pr-1">
        <h3 className="pr-8 text-base font-semibold leading-snug tracking-tight text-gray-900">
          {title}
        </h3>
        <button
          type="button"
          onClick={onMenuClick}
          className="absolute right-5 top-6 rounded-md p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Open actions"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <circle cx="12" cy="6" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="18" r="1.5" />
          </svg>
        </button>
      </div>
      <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-[#6B7280]">
        {description}
      </p>
      <div className="mt-5 border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-400">Created On: {createdOn}</p>
      </div>
    </article>
  )
}
