import React from "react";

const ErrorComponent = ({ error }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#effafa]">
            <div className="text-center p-8 bg-white rounded-lg shadow-xl border-t-4 border-red-500">
                <p className="text-xl font-bold text-gray-800">
                    Connection Error
                </p>
                <p className="text-gray-600 mt-2">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-[#5ba4a4] text-white rounded hover:bg-[#2b3939] transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorComponent;
