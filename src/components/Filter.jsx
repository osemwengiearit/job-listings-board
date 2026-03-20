import React from "react";

const Filter = ({ handleClearFilters, filters, handleRemoveFilter }) => {
    return (
        <div className="mx-auto w-[95%] max-w-[1200px] py-[14px] px-[16px] lg:py-[18px] lg:px-[24px] rounded-[16px] font-body border border-[#E6E4E2] space-y-2 shadow-filter -mt-[28px] bg-white relative lg:flex lg:gap-4 lg:items-center lg:space-y-0">
            <div className="lg:hidden active_filters flex justify-between">
                <p className="text-[11px] text-brown-light font-semibold uppercase">
                    active filters
                </p>
                <span
                    onClick={handleClearFilters}
                    className="text-[12px] text-terra font-semibold underline cursor-pointer underline-offset-2"
                >
                    Clear all
                </span>
            </div>
            <div className="lg:hidden filter_options text-[12px] text-terra font-semibold flex gap-2">
                {filters.map((filterItem, index) => (
                    <div
                        key={index}
                        className="bg-terra-pale border border-[#F0DAD0] flex items-center leading-none rounded-[3px] overflow-hidden"
                    >
                        <span className=" box-border py-[6px] px-[12px] inline-flex leading-[0.9] -mt-2 -mb-2">
                            {filterItem}
                        </span>
                        <span
                            onClick={() => handleRemoveFilter(filterItem)}
                            className="text-[12px] inline-flex items-center h-[100%] bg-terra text-cream font-thin py-[6px] px-[10px] hover:bg-brown cursor-pointer transition-colors duration-300"
                        >
                            X
                        </span>
                    </div>
                ))}
            </div>

            {/* ====== large screen  filter ======== */}
            <div className="hidden lg:flex w-[36px] h-[36px] bg-terra-pale items-center justify-center rounded-[10px]">
                <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#C4622D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="w-[16px] h-[16px]"
                >
                    <line x1="2" y1="4" x2="14" y2="4"></line>{" "}
                    <line x1="4" y1="8" x2="12" y2="8"></line>{" "}
                    <line x1="6" y1="12" x2="10" y2="12"></line>{" "}
                </svg>
            </div>
            <div className="vertical_vider hidden  lg:block border-l border-l-[#E6E4E2] h-[24px]"></div>
            <div className="hidden filter_options text-[12px] lg:text-[13px] text-terra font-semibold lg:flex gap-2 flex-1">
                {filters.map((filterItem, index) => (
                    <div
                        key={index}
                        className="bg-terra-pale border border-[#F0DAD0] flex items-center leading-none rounded-[3px] overflow-hidden"
                    >
                        <span className="box-border py-[6px] px-[12px] inline-flex leading-[0.9] -mt-2 -mb-2">
                            {filterItem}
                        </span>
                        <span
                            onClick={() => handleRemoveFilter(filterItem)}
                            className="text-[12px] lg:text-[13px] inline-flex items-center h-[100%] bg-terra text-cream font-thin py-[6px] px-[10px] hover:bg-brown cursor-pointer transition-colors duration-300"
                        >
                            X
                        </span>
                    </div>
                ))}
            </div>
            <span
                onClick={handleClearFilters}
                className="hidden lg:block text-[12px] text-brown-light font-semibold underline cursor-pointer underline-offset-2"
            >
                Clear all
            </span>
        </div>
    );
};

export default Filter;
