function JobCard({ job, addFilter }) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <img
          src={`/images/${job.logo.replace("./", "")}`}
          alt={job.company}
          className="w-14 h-14 object-contain"
        />

        <div>
          <h2 className="font-bold text-lg">{job.company}</h2>
          <p className="text-gray-700">{job.position}</p>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        {job.postedAt} • {job.contract} • {job.location}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => addFilter(tag)}
            className="bg-teal-100 text-teal-700 px-3 py-1 rounded hover:bg-teal-500 hover:text-white transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
