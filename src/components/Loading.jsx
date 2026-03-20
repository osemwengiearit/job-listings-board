import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col gap-6">
            {[1, 2, 3].map((n) => (
                <div
                    key={n}
                    className="bg-white p-8 rounded-lg shadow animate-pulse"
                >
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            ))}
        </div>
    );
};

export default Loading;
