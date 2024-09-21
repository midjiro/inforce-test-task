import { Post, PostsContext, PostsState } from '@/App';
import { PostExcerpt } from '@/components/common/PostExcerpt';
import { Row } from '@/components/layouts/Row';
import { Input } from '@/components/ui/input';
import { useContext, useRef } from 'react';
import { usePagination } from '@/hooks/usePagination';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { SearchDialog } from '@/components/layouts/SearchDialog';
import { LoadingMessage } from '@/components/common/LodingMessage';
import { WarningMessage } from '@/components/common/WarningMessage';

export const Home = () => {
    const itemsPerPage = 10;
    const ctx = useContext<PostsState>(PostsContext);

    const { currentPage, totalPages, goToNextPage, goToPreviousPage } =
        usePagination(itemsPerPage, ctx.posts ? ctx.posts.length : 0);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = ctx.posts?.slice(startIndex, endIndex);

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = (ref: any) => ref.current.showModal();

    if (ctx?.loading)
        return (
            <>
                <section className="min-w-[288px] max-w-[43.75%] mx-auto text-center mb-8">
                    <h1 className="text-md md:text-lg lg:text-xl font-bold">
                        Embark on a Journey Through Written Worlds
                    </h1>
                    <p className="text-zinc-400 mb-8">
                        Search, explore, and engage with diverse stories and
                        perspectives.
                    </p>
                    <Input
                        type="text"
                        className="rounded-full transition-all"
                        readOnly
                        onClick={() => openDialog(dialogRef)}
                    />
                </section>
                <LoadingMessage />
            </>
        );

    if (!ctx.posts || ctx.posts?.length === 0) {
        return (
            <>
                <section className="min-w-[288px] max-w-[43.75%] mx-auto text-center mb-8">
                    <h1 className="text-md md:text-lg lg:text-xl font-bold">
                        Embark on a Journey Through Written Worlds
                    </h1>
                    <p className="text-zinc-400 mb-8">
                        Search, explore, and engage with diverse stories and
                        perspectives.
                    </p>
                    <Input
                        type="text"
                        className="rounded-full transition-all"
                        readOnly
                        onClick={() => openDialog(dialogRef)}
                    />
                </section>
                <WarningMessage />
            </>
        );
    }

    return (
        <>
            <section className="min-w-[288px] max-w-[43.75%] mx-auto text-center mb-8">
                <h1 className="text-md md:text-lg lg:text-xl font-bold">
                    Embark on a Journey Through Written Worlds
                </h1>
                <p className="text-zinc-400 mb-8">
                    Search, explore, and engage with diverse stories and
                    perspectives.
                </p>
                <Input
                    type="text"
                    className="rounded-full transition-all"
                    readOnly
                    onClick={() => openDialog(dialogRef)}
                />
            </section>

            <Row>
                {currentItems?.map((post: Post, index: number) => (
                    <PostExcerpt {...post} key={index} />
                ))}
            </Row>
            <Pagination className="mt-8">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => goToPreviousPage()}
                        />
                    </PaginationItem>
                    <p>
                        Page {currentPage} of {totalPages}
                    </p>
                    <PaginationItem>
                        <PaginationNext onClick={() => goToNextPage()} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <SearchDialog ref={dialogRef} />
        </>
    );
};
