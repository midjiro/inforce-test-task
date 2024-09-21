import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface AvatarBlockProps {
    username: string;
    email: string;
}

export const AvatarBlock = ({ username, email }: AvatarBlockProps) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar>
                <AvatarImage src="" className="bg-zinc-400" />
                <AvatarFallback> Profile picture</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-md text-zinc-600 font-semibold">
                    {username}
                </p>
                <a href={`mailto:${email}`} className="text-sm text-zinc-400">
                    {email}
                </a>
            </div>
        </div>
    );
};
