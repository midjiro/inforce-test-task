import { forwardRef, Ref, useContext, useState } from 'react';
import { Input } from '../ui/input';
import { Loader2, X } from 'lucide-react';
import { PostsContext, PostsState } from '@/App';
import { SearchExcerpt } from '../common/SuggestionExcerpt';
import { useDebounce } from '@/hooks/useDebounce';
import { Stack } from './Stack';

export const SearchDialog = forwardRef((_, ref: Ref<HTMLDialogElement>) => {
    const ctx = useContext<PostsState>(PostsContext);
    const closeDialog = (ref: any) => ref?.current.close();

    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 300);

    const sortedPosts = ctx?.posts?.filter((post) =>
        post.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    return (
        <dialog
            className="min-w-[288px] max-h-[300px] w-[43.75%] p-4 md:p-6 rounded-lg"
            ref={ref}
        >
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-md md:text-lg font-bold">
                    Explore the Unknown
                </h1>
                <button onClick={closeDialog}>
                    <X className="w-6 h-6" />
                </button>
            </div>
            <Input
                type="text"
                name="title"
                className="rounded-full mb-6"
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                autoComplete="title"
            />

            {ctx?.loading ? (
                <Loader2 className="mx-auto animate-spin" />
            ) : (
                <Stack maxHeight={300}>
                    {sortedPosts?.map((post, index) => (
                        <SearchExcerpt {...post} key={index} />
                    ))}
                </Stack>
            )}
        </dialog>
    );
});
