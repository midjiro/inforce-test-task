import { Post, PostsContext, PostsState, User } from '@/App';
import { AvatarBlock } from '@/components/common/AvatarBlock';
import {
    FetchingErrorMessage,
    LoadingMessage,
} from '@/components/common/Message';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getShortenedText } from '@/lib/utils';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

export const PostDetails = () => {
    const { id } = useParams<Record<string, string | undefined>>();
    const { posts, users, loading } = useContext<PostsState>(PostsContext);

    const post: Post | undefined = posts?.find(
        (post: Post) => post.id.toString() == id
    );
    const user: User | undefined = users?.find(
        (user) => user.id == post?.userId
    );

    if (loading) return <LoadingMessage />;

    if (!post || !user) return <FetchingErrorMessage />;

    return (
        <article className="min-w-[288px] w-[59.14%] mx-auto">
            <Breadcrumb className="mb-6">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link to={`/posts/${id}`} className="capitalize">
                            {getShortenedText(post.title, 20)}
                        </Link>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {user && <AvatarBlock {...user} />}
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold uppercase my-6">
                {post?.title}
            </h1>
            <p className="text-md text-zinc-400">{post?.body}</p>
        </article>
    );
};
