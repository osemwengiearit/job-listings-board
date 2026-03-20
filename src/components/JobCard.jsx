import React from "react";
import { useInView } from "../hooks/useInView";

const JobCard = ({ job, handleTagClick }) => {
    // const language_and_tools = [...job.language, ...job.tools];
    const [ref, isInView] = useInView({ threshold: 0.2 });
    return (
        <div
            ref={ref}
            className={`job_card rounded-card px-[18px] hover:cursor-pointer pt-[24px] pb-[16px] border border-[rgba(60, 35, 20, 0.08)] lg:flex lg:gap-6 lg:py-[24px] pr-[28px] pl-[32px] hover:shadow-card transition duration-200 relative ${
                job.featured ? "featured_border" : ""
            }  ${
                isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
        >
            <div
                className={`job_img w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] rounded-[16px] bg-sage mb-[12px] flex items-center justify-center text-[20px] lg:text-[30px]`}
                style={{ backgroundColor: job.logoColor }}
            >
                {/* <span className="w-[100%] ">{job.logo}</span> */} {job.logo}
            </div>
            <div className="lg:flex-1 lg:flex lg:gap-[22px]">
                <div className="lg:flex-1">
                    <div className="flex gap-2 font-body items-center mb-[8px] font-[700]">
                        <span className="text-[11px]  text-brown-light uppercase">
                            {job?.company || "PHOTOSNAP"}
                        </span>{" "}
                        {job.isNew && (
                            <span className="text-[9px] border border-[#a5e2b9] text-[#2D7A47] bg-[#EEF9F1] py-[3px] px-[8px] rounded-[4px]">
                                NEW
                            </span>
                        )}
                        {job.featured && (
                            <span className="text-[9px] py-[3px] px-[8px] border border-[#d7bd8f] text-[#9A6B18] inline-block bg-amber-pale rounded-[4px]">
                                FEATURED
                            </span>
                        )}
                    </div>
                    <p className="mb-[8px] font-display text-espresso font-[16px]">
                        {job.position || "Senior Front End Engineer"}
                    </p>
                    <div className="flex gap-2 text-[11px] text-brown-light items-center pb-[14px] lg:pb-0 mb-[14px] border-b border-[#F1EFEE] lg:mb-0 lg:border-b-0">
                        <span className="rounded-[5px] py-[3px] px-[8px] bg-parchment border border-[#d7bd8f]">
                            {job.contract || "Part Time"}
                        </span>{" "}
                        <span className="rounded-[5px] py-[3px] px-[8px] bg-parchment border border-[#d7bd8f]">
                            {job.location || "USA Only"}
                        </span>{" "}
                        <span
                            onClick={() => handleTagClick(job.level)}
                            className="rounded-[5px] py-[3px] px-[8px] bg-parchment border border-[#d7bd8f]"
                        >
                            {job.level || "Senior"}
                        </span>
                    </div>
                </div>
                <div className="flex gap-3 text-[11px] lg:text-[12px] font-[700] items-center mb-[14px] lg:mb-0 lg:pr-[24px] lg:border-r border-[#F1EFEE] flex-wrap content-center">
                    {job.languages.map((language, index) => (
                        <span
                            onClick={() => handleTagClick(language)}
                            key={index}
                            className="text-terra py-[4px] px-[10px] bg-terra-pale border border-[#d7bd8f] rounded-[4px] lg:hover:text-cream lg:hover:bg-terra lg:hover:shadow-[0_4px_12px_rgba(196,98,45,0.3)] lg:cursor-pointer lg:hover:scale-[1.06] lg:hover:border-terra transition duration-200"
                        >
                            {language}
                        </span>
                    ))}
                    {job.tools.map((tool, index) => (
                        <span
                            onClick={() => handleTagClick(tool)}
                            key={index}
                            className="text-[#9A6B18] py-[4px] px-[10px] bg-amber-pale border border-[#F5E0BE] rounded-[4px] hover:text-cream hover:bg-[#9A6B18] lg:hover:shadow-[0_4px_12px_rgba(196,98,45,0.3)] lg:cursor-pointer hover:scale-[1.06] hover:border-[#9A6B18] transition duration-200"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
            <div className="apply_btn flex justify-end lg:flex-col lg:justify-center lg:gap-2">
                <span className="time_stamp hidden lg:block text-sand text-[12px] text-right">
                    {job.postedAt || "1d ago"}
                </span>
                <button className="py-[7px] px-[14px] rounded-[8px] bg-espresso text-cream font-[600] text-[11px] flex items-center gap-1 cursor-pointer hover:bg-terra hover:translate-x-[2px] hover:shadow-[0_4px_16px_rgba(196,98,45,0.35)] transition duration-200 w-fit lg:text-[12px]">
                    Apply <span className="hidden lg:block">now</span>
                    <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        className="w-[11px] h-[11px] hover:translate-x-[2px] "
                    >
                        <path
                            d="M2 6h8M6 2l4 4-4 4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default JobCard;
