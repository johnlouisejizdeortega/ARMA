import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Force light mode
document.documentElement.classList.remove('dark');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name: string) => {
        return resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'));
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
