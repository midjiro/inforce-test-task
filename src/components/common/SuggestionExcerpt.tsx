import { Post } from '@/App';
import { getShortenedText } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { delayedFade } from '@/animations/appearance';

export const SearchExcerpt = (props: Post) => {
    const { id, title, body } = props;

    return (
        <motion.article
            initial="hidden"
            animate="visible"
            custom={{ id }}
            variants={delayedFade}
            className="px-6 py-6 border w-full border-zinc-200 rounded-lg"
        >
            <div className="grid gap-2">
                <h2 className="text-md font-semibold capitalize">
                    <Link to={`/posts/${id}`}>{title}</Link>
                </h2>
                <p className="text-sm text-zinc-400">
                    {getShortenedText(body, 50)}
                </p>
            </div>
        </motion.article>
    );
};
