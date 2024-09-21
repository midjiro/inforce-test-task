import { TriangleAlert } from 'lucide-react';

export const WarningMessage = () => {
    return (
        <article className="w-max mx-auto p-4 md:p-6 text-center border border-zinc-200 rounded-lg">
            <TriangleAlert className="text-red-600 w-5 h-5 mx-auto" />
            <h2 className="text-md md:text-lg font-semibold my-2">
                No Posts Published Yet
            </h2>
            <p className="text-sm text-zinc-400">
                Check back later for new content or start creating your own!
            </p>
        </article>
    );
};
