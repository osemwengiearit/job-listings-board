import React from "react";
import JobCard from "./JobCard";

const OpenRoles = ({ jobs, handleTagClick }) => {
    return (
        <div className="mt-6 mb-6">
            <div className="open_roles mx-auto w-[95%] max-w-[1200px] px-2">
                <div className="job_heading flex justify-between items-center mb-[18px] lg:gap-3">
                    <h3 className="text-[18px] font-display">
                        Open <span className="lg:hidden">roles</span>
                        <span className="hidden lg:inline-block">
                            positions
                        </span>
                    </h3>
                    <div className="hidden lg:block h-[1px] flex-1 bg-[#EDE8E3]"></div>
                    <span className="text-[12px] font-display text-brown-light">
                        <span className="text-terra">{jobs.length}</span> found
                    </span>
                </div>
                {/* =========== Job container ========= */}
                <div className="job_container grid gap-5">
                    {jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            job={job}
                            handleTagClick={handleTagClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpenRoles;
