function JobCard({ job, addFilter }) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border border-sand-light hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-center gap-4">
        <img
          src={`/images/${job.logo.replace("./", "")}`}
          alt={job.company}
          className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-lg"
        />

        <div>
          <h2 className="text-sm font-semibold text-brown-light">
            {job.company}
          </h2>

          <p className="font-display text-lg text-espresso hover:text-terra cursor-pointer transition">
            {job.position}
          </p>
        </div>
      </div>

      <p className="text-sm text-sand mt-2">
        {job.postedAt} • {job.contract} • {job.location}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => addFilter(tag)}
            className="bg-terra-pale text-terra text-sm font-semibold px-3 py-1 rounded-md hover:bg-terra hover:text-white hover:scale-105 transition-all"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
