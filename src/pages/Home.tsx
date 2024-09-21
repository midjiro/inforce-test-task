import { Post, PostsContext, PostsState } from '@/App';
import { PostExcerpt } from '@/components/common/PostExcerpt';
import { Row } from '@/components/layouts/Row';
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
import { HeaderSection } from '@/components/layouts/Header';
import { LoadingMessage, NoPostsMessage } from '@/components/common/Message';

export const Home = () => {
    const itemsPerPage = 10;
    const { posts, loading } = useContext<PostsState>(PostsContext);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const { currentPage, totalPages, goToNextPage, goToPreviousPage } =
        usePagination(itemsPerPage, posts?.length || 0);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = posts?.slice(startIndex, startIndex + itemsPerPage);

    const openDialog = () => dialogRef.current?.showModal();

    if (loading)
        return (
            <>
                <HeaderSection onClick={openDialog} />
                <LoadingMessage />
            </>
        );

    if (posts?.length === 0)
        return (
            <>
                <HeaderSection onClick={openDialog} />
                <NoPostsMessage />
            </>
        );

    return (
        <>
            <HeaderSection onClick={openDialog} />
            <Row>
                {currentItems?.map((post: Post, index: number) => (
                    <PostExcerpt {...post} key={index} />
                ))}
            </Row>
            <Pagination className="mt-8">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={goToPreviousPage} />
                    </PaginationItem>
                    <p>
                        Page {currentPage} of {totalPages}
                    </p>
                    <PaginationItem>
                        <PaginationNext onClick={goToNextPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <SearchDialog ref={dialogRef} />
        </>
    );
};
