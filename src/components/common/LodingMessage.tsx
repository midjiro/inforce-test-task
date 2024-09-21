import { Loader2 } from 'lucide-react';

export const LoadingMessage = () => {
    return (
        <article className="w-max mx-auto p-4 md:p-6 text-center border border-zinc-200 rounded-lg">
            <Loader2 className="animate-spin w-5 h-5 mx-auto" />
            <h2 className="text-md md:text-lg font-semibold my-2">
                We are loading content...
            </h2>
            <p className="text-sm text-zinc-400">
                Wait a minute or refresh the page.
            </p>
        </article>
    );
};
