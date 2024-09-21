import { useContext } from 'react';
import { Post, PostsContext, PostsState, User } from '@/App';
import { Link } from 'react-router-dom';
import { AvatarBlock } from './AvatarBlock';
import { getShortenedText } from '@/lib/utils';
import { motion } from 'framer-motion';
import { delayedFade } from '@/animations/appearance';

export const PostExcerpt = (props: Post) => {
    const { id, userId, title, body } = props;

    const { users } = useContext<PostsState>(PostsContext);

    const user: User | undefined = users?.find((user) => user.id === userId);

    return (
        <motion.article
            initial="hidden"
            animate="visible"
            custom={{ id }}
            variants={delayedFade}
            className="px-6 py-6 flex-grow basis-[288px] border border-zinc-200 rounded-lg"
        >
            <div className="grid gap-2 mb-6">
                <h2 className="text-md font-semibold capitalize">
                    <Link to={`/posts/${id}`}>{title}</Link>
                </h2>
                <p className="text-sm text-zinc-400">
                    {getShortenedText(body, 50)}
                </p>
            </div>
            {user && <AvatarBlock {...user} />}
        </motion.article>
    );
};
