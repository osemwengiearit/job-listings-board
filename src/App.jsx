import useJobs from "./hooks/useJobs";
import JobCard from "./components/JobCard";

function App() {
  const { jobs, loading, error } = useJobs();

  // Loading state
  if (loading) {
    return (
      <p className="p-10 text-center text-lg font-semibold">Loading jobs...</p>
    );
  }

  // Error state
  if (error) {
    return <p className="text-red-500 p-10 text-center">Error: {error}</p>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Job Listings Board
      </h1>

      <div className="grid gap-6 max-w-5xl mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
