import { Input } from '@/components/ui/input';

export const HeaderSection = ({ onClick }: { onClick: () => void }) => (
    <section className="min-w-[288px] max-w-[43.75%] mx-auto text-center mb-8">
        <h1 className="text-md md:text-lg lg:text-xl font-bold">
            Embark on a Journey Through Written Worlds
        </h1>
        <p className="text-zinc-400 mb-8">
            Search, explore, and engage with diverse stories and perspectives.
        </p>
        <Input
            type="text"
            className="rounded-full transition-all"
            readOnly
            onClick={onClick}
        />
    </section>
);
