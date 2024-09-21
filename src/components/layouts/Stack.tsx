import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StackProps {
    children: ReactNode;
    maxHeight: number;
}

export const Stack = (props: StackProps) => {
    const { children, maxHeight } = props;

    return (
        <motion.section
            className={`flex flex-col justify-start gap-6 max-h-[${maxHeight}px] overflow-auto`}
            layout
        >
            {children}
        </motion.section>
    );
};
