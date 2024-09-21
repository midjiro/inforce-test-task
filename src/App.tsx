import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@/components/layouts/Container';
import { Home } from '@/pages/Home';
import './styles/bundle.css';
import useFetch from './hooks/useFetch';
import { createContext } from 'react';
import { PostDetails } from './pages/PostDetails';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: string;
}

export interface PostsState {
    posts: Post[] | null;
    users: User[] | null;
    loading: boolean;
    error: string | null;
}

export const PostsContext = createContext<PostsState>({
    posts: [],
    users: [],
    error: null,
    loading: false,
});

function App() {
    const { data, error, loading } = useFetch<PostsState>([
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/users',
    ]);

    return (
        <PostsContext.Provider
            value={
                {
                    posts: data ? data[0] : null,
                    users: data ? data[1] : null,
                    error,
                    loading,
                } as PostsState
            }
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container />}>
                        <Route index element={<Home />} />
                        <Route path="posts/:id" element={<PostDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </PostsContext.Provider>
    );
}

export default App;
