import { useState } from "react";
import useJobs from "./hooks/useJobs";
import JobCard from "./components/JobCard";

function App() {
  const { jobs, loading, error } = useJobs();
  const [filters, setFilters] = useState([]);

  function addFilter(tag) {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  }

  // FILTERING LOGIC
  const filteredJobs = jobs.filter((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return filters.every((filter) => tags.includes(filter));
  });

  if (loading) {
    return <p className="p-10 text-center">Loading jobs...</p>;
  }

  if (error) {
    return <p className="p-10 text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Job Listings Board
      </h1>

      <div className="grid gap-6 max-w-5xl mx-auto">
        {(filters.length > 0 ? filteredJobs : jobs).map((job) => (
          <JobCard key={job.id} job={job} addFilter={addFilter} />
        ))}
      </div>
    </div>
  );
}

export default App;
