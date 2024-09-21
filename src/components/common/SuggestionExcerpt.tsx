import { useContext } from 'react';
import { Post, PostsContext, PostsState, User } from '@/App';
import { Link } from 'react-router-dom';

export const SearchExcerpt = (props: Post) => {
    const { id, userId, title, body } = props;

    const ctx = useContext<PostsState>(PostsContext);

    const user: User | undefined = ctx.users?.find(
        (user) => user.id === userId
    );

    if (!user) return null;

    return (
        <article className="px-6 py-6 flex-grow basis-[288px] border border-zinc-200 rounded-lg">
            <div className="grid gap-2 mb-6">
                <h2 className="text-md font-semibold capitalize">
                    <Link to={`/posts/${id}`}>{title}</Link>
                </h2>
                <p className="text-sm text-zinc-400">
                    {body?.length > 50 ? body?.substring(0, 50) + '...' : body}
                </p>
            </div>
        </article>
    );
};
