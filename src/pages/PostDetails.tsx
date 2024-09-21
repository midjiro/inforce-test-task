import { Post, PostsContext, PostsState, User } from '@/App';
import { AvatarBlock } from '@/components/common/AvatarBlock';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

interface Params {
    id: number;
}

export const PostDetails = () => {
    const params: Params = useParams();
    const ctx = useContext<PostsState | undefined>(PostsContext);

    const post: Post | undefined = ctx?.posts?.find(
        (post) => post.id == params.id
    );
    const user: User | undefined = ctx?.users?.find(
        (user) => user.id == post?.userId
    );

    return (
        <article className="min-w-[288px] w-[59.14%] mx-auto">
            {user && <AvatarBlock {...user} />}
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold uppercase my-6">
                {post?.title}
            </h1>
            <p className="text-md text-zinc-400">{post?.body}</p>
        </article>
    );
};
