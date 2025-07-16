import React from 'react';
import { Link } from '@inertiajs/react';

interface EmptyStateProps {
    title: string;
    description: string;
    action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description, action }) => {
    return (
        <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
};

export default EmptyState;