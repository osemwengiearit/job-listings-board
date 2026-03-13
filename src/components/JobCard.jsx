function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <img src={job.logo} alt={job.company} className="w-12 h-12" />

        <div>
          <h2 className="font-bold text-lg">{job.company}</h2>
          <p className="text-gray-700">{job.position}</p>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        {job.postedAt} • {job.contract} • {job.location}
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded">
          {job.role}
        </span>

        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded">
          {job.level}
        </span>
      </div>
    </div>
  );
}

export default JobCard;
