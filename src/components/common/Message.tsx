import { Loader2, TriangleAlert } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fade } from '@/animations/appearance';

interface MessageProps {
    icon?: ReactNode | null;
    title: string;
    subtitle: string;
}

export const Message = (props: MessageProps) => {
    const { icon, title, subtitle } = props;

    if (icon)
        return (
            <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="w-max mx-auto p-4 md:p-6 text-center border border-zinc-200 rounded-lg"
            >
                {icon}
                <h2 className="text-md md:text-lg font-semibold my-2">
                    {title}.
                </h2>
                <p className="text-sm text-zinc-400">{subtitle}</p>
            </motion.article>
        );

    return (
        <motion.article className="w-max mx-auto p-4 md:p-6 text-center border border-zinc-200 rounded-lg">
            <h2 className="text-md md:text-lg font-semibold my-2">{title}</h2>
            <p className="text-sm text-zinc-400">{subtitle}</p>
        </motion.article>
    );
};

export const LoadingMessage = () => (
    <Message
        icon={<Loader2 className="mx-auto w-6 h-6 animate-spin" />}
        title="We are loading content.."
        subtitle="Wait a minute or refresh the page."
    />
);

export const NoPostsMessage = () => (
    <Message
        icon={<TriangleAlert className="mx-auto w-6 h-6 text-orange-400" />}
        title="No Posts Published Yet"
        subtitle="Check back later for new content or start creating your own!"
    />
);

export const FetchingErrorMessage = () => {
    return (
        <Message
            icon={<TriangleAlert className="mx-auto w-6 h-6 text-orange-400" />}
            title="Unable to fetch data"
            subtitle="We are unable to fetch data you are looking for. Check your connection or contact with us."
        />
    );
};
