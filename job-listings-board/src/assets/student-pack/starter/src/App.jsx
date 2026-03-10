import { useState, useEffect } from 'react'

// TODO: Replace this with your hosted API URL when ready
const API_URL = 'http://localhost:3001/api/jobs'

function App() {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch jobs data from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Failed to fetch jobs')
        }
        const data = await response.json()
        setJobs(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [])

  // TODO: Write your filter logic here
  // Hint: Only show a job if ALL active filters appear in its tags
  // A job's tags = [...job.languages, ...job.tools, job.role, job.level]
  const visibleJobs = jobs.filter(job => {
    // If no filters are active, show all jobs
    if (filters.length === 0) return true

    // Check if job matches ALL active filters
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools]
    return filters.every(filter => jobTags.includes(filter))
  })

  // TODO: Write handlers for adding and removing filter tags
  function handleTagClick(tag) {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag])
    }
  }

  function handleRemoveFilter(tag) {
    setFilters(filters.filter(f => f !== tag))
  }

  function handleClearFilters() {
    setFilters([])
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#effafa]">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl border-t-4 border-red-500">
          <p className="text-xl font-bold text-gray-800">Connection Error</p>
          <p className="text-gray-600 mt-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[#5ba4a4] text-white rounded hover:bg-[#2b3939] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#effafa]">

      {/* Header — teal background strip */}
      <header className="bg-[#5ba4a4] h-36 bg-[url('/images/bg-header-desktop.svg')] bg-cover"></header>

      <main className="max-w-[1110px] mx-auto px-6 py-10">

        {/* Filter Bar — only show when filters.length > 0 */}
        {filters.length > 0 && (
          <div className="bg-white p-6 rounded shadow-lg -mt-20 mb-10 flex items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {filters.map(filter => (
                <div key={filter} className="flex overflow-hidden rounded bg-[#effafa]">
                  <span className="px-2 py-1 text-[#5ba4a4] font-bold">{filter}</span>
                  <button
                    onClick={() => handleRemoveFilter(filter)}
                    className="bg-[#5ba4a4] hover:bg-[#2b3939] px-2 text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={handleClearFilters}
              className="text-[#5ba4a4] font-bold hover:underline"
            >
              Clear
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map(n => (
              <div key={n} className="bg-white p-8 rounded-lg shadow animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-10 lg:gap-6">
            {visibleJobs.map(job => (
              <div key={job.id} className={`bg-white p-8 lg:p-6 rounded-lg shadow-xl border-l-[5px] ${job.featured ? 'border-[#5ba4a4]' : 'border-transparent'} flex flex-col lg:flex-row lg:items-center justify-between relative mt-8 lg:mt-0`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Mobile Logo positioned absolutely */}
                  <div className="absolute -top-6 left-8 lg:static w-12 h-12 lg:w-20 lg:h-20 bg-[#5ba4a4] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {job.logo}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#5ba4a4] font-bold mr-2">{job.company}</span>
                      {job.isNew && <span className="bg-[#5ba4a4] text-white px-2 py-1 rounded-full text-xs font-bold uppercase pt-1.5">New!</span>}
                      {job.featured && <span className="bg-[#2b3939] text-white px-2 py-1 rounded-full text-xs font-bold uppercase pt-1.5">Featured</span>}
                    </div>
                    <h2 className="font-bold text-[#2b3939] text-lg hover:text-[#5ba4a4] cursor-pointer mb-2 transition-colors">{job.position}</h2>
                    <div className="flex gap-4 text-gray-500 text-sm">
                      <span>{job.postedAt}</span>
                      <span>•</span>
                      <span>{job.contract}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <hr className="lg:hidden my-4 border-gray-300" />

                <div className="flex flex-wrap gap-4">
                  {[job.role, job.level, ...job.languages, ...job.tools].map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="bg-[#effafa] text-[#5ba4a4] font-bold px-2 py-1 rounded hover:bg-[#5ba4a4] hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App

