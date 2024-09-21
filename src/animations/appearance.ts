interface FadeProps {
    id?: number;
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export const delayedFade = {
    hidden: {
        opacity: 0,
    },
    visible: ({ id = 1 }: FadeProps) => ({
        opacity: 1,
        transition: {
            delay: id * 0.05,
        },
    }),
};
