import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getShortenedText = (text: string, maxSymbols = 100): string => {
    return text.length > maxSymbols
        ? text.substring(0, maxSymbols) + '...'
        : text;
};
