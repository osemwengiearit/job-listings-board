import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import OpenRoles from "./components/OpenRoles";
import Loading from "./components/Loading";
import ErrorComponent from "./components/ErrorComponent";

const API_URL = "https://jobs-api-bgrn.onrender.com/api/jobs";

function App() {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(API_URL);
                console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();
                console.log(data);
                setJobs(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const visibleJobs = jobs.filter((job) => {
        if (filters.length === 0) return true;

        // Check if job matches ALL active filters
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
        return filters.every((filter) => jobTags.includes(filter));
    });

    if (error) {
        return <ErrorComponent error={error} />;
    }

    function handleTagClick(tag) {
        if (!filters.includes(tag)) {
            setFilters([...filters, tag]);
        }
    }

    function handleRemoveFilter(tag) {
        setFilters(filters.filter((f) => f !== tag));
    }

    function handleClearFilters() {
        setFilters([]);
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="wrapper">
                    <Header jobs={jobs} />
                    {filters.length > 0 && (
                        <Filter
                            filters={filters}
                            handleClearFilters={handleClearFilters}
                            handleRemoveFilter={handleRemoveFilter}
                        />
                    )}
                    <OpenRoles
                        handleTagClick={handleTagClick}
                        jobs={visibleJobs}
                    />
                </div>
            )}
        </>
    );
}

export default App;
