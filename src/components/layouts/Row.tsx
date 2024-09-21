import { ReactNode } from 'react';

interface RowProps {
    children: ReactNode;
}

export const Row = (props: RowProps) => {
    const { children } = props;

    return (
        <section className={`flex flex-wrap items-start gap-6 `}>
            {children}
        </section>
    );
};
