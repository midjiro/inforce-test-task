import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RowProps {
    children: ReactNode;
}

export const Row = (props: RowProps) => {
    const { children } = props;

    return (
        <motion.section className={`flex flex-wrap items-start gap-6 `} layout>
            {children}
        </motion.section>
    );
};
