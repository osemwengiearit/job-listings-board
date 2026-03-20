import React from "react";

const Header = ({ jobs }) => {
    const companyLength = jobs.filter((item) => item?.company).length;
    const remoteJobs = Math.ceil(
        (jobs.filter((item) => item.location === "Remote").length /
            jobs.length) *
            100
    );

    return (
        <div className="header min-h-[420px] py-[3.75rem] px-6 xl:px-[3rem] xl:pt-[5rem] xl:pb-[4.5rem] bg-espresso relative overflow-hidden">
            <div className="mx-auto max-w-[1200px] space-y-6">
                <div className="uppercase lg:tracking-widest lg:font-[700] lg:text-[.7rem] text-[1.375rem] text-amber-light font-body text-sm border-l-2 pl-2  border-l-terra leading-none">
                    247 new roles this week
                </div>
                <div className="flex flex-col gap-7 lg:flex-row">
                    <div className="header_left flex flex-col gap-4 lg:w-[70%] lg:gap-8">
                        <h1 className="text-[40px] lg:text-[72px] leading-none text-cream font-display font-[900]">
                            Find your next <br />
                            <span className="text-terra-light italic">
                                great role.
                            </span>
                        </h1>
                        <p className="text-[14px] lg:text-[16px] text-[#8D8780]">
                            Curated listings for developers. Filter by stack,
                            seniority and location
                            <span className="hidden lg:block">
                                — then send that application
                            </span>
                        </p>
                    </div>
                    <div className="header_right lg:w-[25%] flex gap-4 font-display justify-between horizontal_rule border-t-[1px] border-[#3F352E] pt-4 lg:border-l-[1px] lg:border-t-[#3F352E] lg:border-t-0 lg:pt-0 lg:pl-[32px] lg:flex-col">
                        <div className="flex flex-col text-[22px] text-cream flex-1 lg:text-[32px] lg:flex-col-reverse">
                            {jobs.length}
                            <span className="text-[#FAF7F259] text-[10px] font-body lg:text-[12px]  lg:uppercase lg:font-semibold lg:tracking-wider">
                                Open roles
                            </span>
                        </div>
                        <div className="flex flex-col text-[22px] text-amber-light flex-1 lg:text-[32px] lg:flex-col-reverse">
                            {companyLength}
                            <span className="text-[#FAF7F259] text-[10px] font-body lg:text-[12px]  lg:uppercase lg:font-semibold lg:tracking-wider">
                                Companies{" "}
                                <span className="hidden lg:inline-block">
                                    hiring
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col text-[22px] text-terra-light flex-1 lg:text-[32px] lg:flex-col-reverse">
                            {remoteJobs}%
                            <span className="text-[#FAF7F259] text-[10px] font-body lg:text-[12px]  lg:uppercase lg:font-semibold lg:tracking-wider">
                                Remote
                                <span className="hidden lg:inline-block">
                                    -friendly
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <svg
                className="absolute bottom-0 left-0 overflow-hidden"
                viewBox="0 0 1440 60"
                preserveAspectRatio="none"
                fill="#FAF7F2"
            >
                <path d="M0 60 Q720 0 1440 60 L1440 60 L0 60 Z" />
            </svg>
            <div className="gradient_1 w-[280px] h-[260px] bg-[radial-gradient(circle,rgba(196,98,45,0.4)_0%,transparent_70%)] blur-3xl absolute top-[-80px] left-[-60px]lg:top-[30%] lg:left-[20%]"></div>
            <div className="gradient_2 w-[220px] h-[200px] bg-[radial-gradient(circle,rgba(212, 146, 42, 0.2)_0%,transparent_70%)] blur-3xl absolute top-[-40px] right-[-30px]"></div>
            <div className="gradient_3 w-[200px] h-[300px] bg-[radial-gradient(circle,rgba(92, 122, 98, 0.15)_0%,transparent_70%)] blur-3xl absolute bottom-[-120px] left-[30px]"></div>
        </div>
    );
};

export default Header;
