function FilterBar({ filters, removeFilter, clearFilters }) {
  return (
    <div className="max-w-5xl mx-auto mb-6 bg-white p-4 rounded-xl shadow-md flex flex-wrap items-center justify-between gap-4">
      {/* Active Filters */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <div
            key={filter}
            className="flex items-center bg-terra-pale rounded-md overflow-hidden"
          >
            <span className="px-3 py-1 text-terra font-semibold text-sm">
              {filter}
            </span>

            <button
              onClick={() => removeFilter(filter)}
              className="bg-terra text-white px-2 hover:bg-brown transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Clear Button */}
      <button
        onClick={clearFilters}
        className="text-terra font-semibold hover:underline"
      >
        Clear
      </button>
    </div>
  );
}

export default FilterBar;
