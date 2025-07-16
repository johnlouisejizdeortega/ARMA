import React from 'react';

const LoadingSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(count)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
                    <div className="h-64 bg-gray-200 animate-pulse"></div>
                    <div className="p-6">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LoadingSkeleton;