import { ReactNode } from 'react';

interface StackProps {
    children: ReactNode;
    maxHeight: number;
}

export const Stack = (props: StackProps) => {
    const { children, maxHeight } = props;

    return (
        <section
            className={`flex flex-col gap-6 max-h-[${maxHeight}px] overflow-auto`}
        >
            {children}
        </section>
    );
};
