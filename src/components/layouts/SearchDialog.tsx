import { ChangeEvent, forwardRef, useContext, useState } from 'react';
import { Input } from '../ui/input';
import { X } from 'lucide-react';
import { PostsContext, PostsState } from '@/App';
import { SearchExcerpt } from '../common/SuggestionExcerpt';
import { useDebounce } from '@/hooks/useDebounce';
import { Stack } from './Stack';
import { FetchingErrorMessage } from '../common/Message';
import { motion } from 'framer-motion';

interface SearchDialogHeaderProps {
    suggestions: string[];
    query: string;
    onQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
}

const SearchDialogHeader = ({
    suggestions,
    query,
    onQueryChange,
    onClose,
}: SearchDialogHeaderProps) => {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-md md:text-lg font-bold">
                    Explore the Unknown
                </h1>
                <button onClick={onClose}>
                    <X className="w-6 h-6" />
                </button>
            </div>
            <Input
                list="suggestions"
                type="text"
                name="title"
                className="rounded-full mb-6"
                value={query}
                onChange={onQueryChange}
                autoComplete="title"
            />
            <datalist id="suggestions">
                {suggestions?.map((suggestion: string) => (
                    <option key={suggestion}>{suggestion}</option>
                ))}
            </datalist>
        </>
    );
};

export const SearchDialog = forwardRef<HTMLDialogElement>((_, ref) => {
    const { posts } = useContext<PostsState>(PostsContext);

    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 300);

    const sortedPosts = posts?.filter(({ title }) => {
        const preparedTitle = title.toLowerCase();
        const preparedQuery = debouncedQuery.toLowerCase();
        return preparedTitle.includes(preparedQuery);
    });
    const suggestion = posts ? posts.map((post) => post.title) : [];

    const closeDialog = () => {
        if (ref && 'current' in ref && ref.current) {
            ref.current.close();
        }
    };

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setQuery(target.value);

    if (posts?.length === 0)
        return (
            <motion.dialog
                className="min-w-[288px] max-h-[300px] w-[43.75%] p-4 md:p-6 rounded-lg"
                ref={ref}
                layout
            >
                <SearchDialogHeader
                    suggestions={suggestion}
                    query={query}
                    onClose={closeDialog}
                    onQueryChange={handleChange}
                />
                <FetchingErrorMessage />
            </motion.dialog>
        );

    return (
        <motion.dialog
            className="min-w-[288px] max-h-[300px] w-[43.75%] p-4 md:p-6 rounded-lg"
            ref={ref}
            layout
        >
            <SearchDialogHeader
                suggestions={suggestion}
                query={query}
                onClose={closeDialog}
                onQueryChange={handleChange}
            />

            <Stack maxHeight={300}>
                {sortedPosts?.map((post, index) => (
                    <SearchExcerpt {...post} key={index} />
                ))}
            </Stack>
        </motion.dialog>
    );
});
