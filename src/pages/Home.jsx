import { useMemo, useState } from 'react'
import { Button } from '../components/common/Button'
import { SlideOverModal } from '../components/common/Modal'
import { KnowledgeCard } from '../components/knowledge/KnowledgeCard'

const LOREM_BODY =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const INITIAL_KNOWLEDGE_BASES = Array.from({ length: 6 }, (_, i) => ({
  id: `kb-${i + 1}`,
  title: 'Test',
  description: LOREM_BODY,
  createdOn: '14/07/2025',
}))

function PaginationNavButton({ label, disabled, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors duration-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  )
}

function IconChevronsLeft({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 17 6 12 11 7M18 17 13 12 18 7" />
    </svg>
  )
}

function IconChevronLeft({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18 9 12 15 6" />
    </svg>
  )
}

function IconChevronRight({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18 15 12 9 6" />
    </svg>
  )
}

function IconChevronsRight({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 7 12 12 7 17M14 7 19 12 14 17" />
    </svg>
  )
}

export function Home() {
  const [createOpen, setCreateOpen] = useState(false)
  const [vectorStore, setVectorStore] = useState('Qdrant')
  const [embeddingModel, setEmbeddingModel] = useState('text-embedding-ada-002')
  const [knowledgeBases] = useState(INITIAL_KNOWLEDGE_BASES)

  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const totalRows = knowledgeBases.length
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage))

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    return knowledgeBases.slice(start, start + rowsPerPage)
  }, [knowledgeBases, page, rowsPerPage])

  const rowsLabel = `${totalRows} rows`

  const pageLabel = `page ${page} of ${totalPages}`

  const handleCreate = () => {
    setCreateOpen(false)
  }

  const canPrev = page > 1
  const canNext = page < totalPages

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#F9FAFB]">
      <div className="flex flex-1 flex-col px-6 py-6">
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-[1.75rem] lg:leading-tight">
                Knowledge Base
              </h1>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label className="relative w-full sm:w-[min(100%,240px)] lg:w-64">
                  <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </span>
                  <input
                    type="search"
                    placeholder="Search..."
                    className="h-8 w-full rounded-lg border border-gray-200 bg-white py-0 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-shadow duration-200 focus:border-indigo-300 focus:ring-2 focus:ring-[#4F46E5]/20"
                  />
                </label>
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  className="h-8 rounded-lg bg-[#4F46E5] px-3.5 text-sm font-medium shadow-sm hover:bg-indigo-600"
                  onClick={() => setCreateOpen(true)}
                >
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Create New
                </Button>
              </div>
            </div>

            <div className="mt-6 flex min-h-0 flex-1 flex-col">
            {knowledgeBases.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 py-20 text-center">
                <div className="rounded-2xl bg-gray-50 p-5 text-gray-300 ring-1 ring-gray-100">
                  <svg
                    className="mx-auto h-14 w-14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
                    <path d="M14 2v6h6" />
                    <path d="M10 12h4M10 16h8" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-500">No Knowledge Bases Found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedItems.map((kb) => (
                  <KnowledgeCard
                    key={kb.id}
                    title={kb.title}
                    description={kb.description}
                    createdOn={kb.createdOn}
                    onMenuClick={() => {}}
                  />
                ))}
              </div>
            )}
            </div>
          </div>

          <footer className="flex flex-col gap-3 border-t border-gray-200 px-6 py-3.5 text-xs text-gray-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <span className="font-medium text-gray-600">{rowsLabel}</span>
            <div className="flex flex-wrap items-center gap-4 sm:justify-end">
              <label className="flex items-center gap-2 text-gray-600">
                <span className="whitespace-nowrap">Rows per page</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(Number(e.target.value))
                    setPage(1)
                  }}
                  className="h-8 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-700 outline-none transition-colors hover:border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-[#4F46E5]/15"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </label>
              <span className="text-gray-600">{pageLabel}</span>
              <div className="flex items-center gap-1">
                <PaginationNavButton
                  label="First page"
                  disabled={!canPrev}
                  onClick={() => setPage(1)}
                >
                  <IconChevronsLeft />
                </PaginationNavButton>
                <PaginationNavButton
                  label="Previous page"
                  disabled={!canPrev}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  <IconChevronLeft />
                </PaginationNavButton>
                <PaginationNavButton
                  label="Next page"
                  disabled={!canNext}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  <IconChevronRight />
                </PaginationNavButton>
                <PaginationNavButton
                  label="Last page"
                  disabled={!canNext}
                  onClick={() => setPage(totalPages)}
                >
                  <IconChevronsRight />
                </PaginationNavButton>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <SlideOverModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Create New Knowledge Base"
        subtitle="Best for quick answers from documents, websites and text files."
        primaryActionLabel="Create"
        onPrimaryAction={handleCreate}
      >
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-600">
              Name{' '}
              <span className="text-red-500" aria-hidden>
                *
              </span>{' '}
              <span className="font-normal text-gray-400">(Cannot be edited later)</span>
            </label>
            <input
              type="text"
              name="name"
              disabled
              placeholder="Name"
              className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-500 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="kb-description"
              className="mb-1.5 block text-xs font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="kb-description"
              name="description"
              rows={5}
              placeholder="Description"
              className="w-full resize-y rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-shadow focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label htmlFor="vector-store" className="mb-1.5 block text-xs font-medium text-gray-600">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="vector-store"
                value={vectorStore}
                onChange={(e) => setVectorStore(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-2.5 pr-10 text-sm text-gray-900 outline-none transition-shadow focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="Qdrant">Qdrant</option>
                <option value="Pinecone">Pinecone</option>
                <option value="Weaviate">Weaviate</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="embedding-model"
              className="mb-1.5 block text-xs font-medium text-gray-600"
            >
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="embedding-model"
                value={embeddingModel}
                onChange={(e) => setEmbeddingModel(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-2.5 pr-10 text-sm text-gray-900 outline-none transition-shadow focus:border-indigo-300 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="text-embedding-ada-002">text-embedding-ada-002</option>
                <option value="text-embedding-3-small">text-embedding-3-small</option>
                <option value="text-embedding-3-large">text-embedding-3-large</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </form>
      </SlideOverModal>
    </div>
  )
}
