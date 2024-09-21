import { Outlet } from 'react-router-dom';

export const Container = () => {
    return (
        <main className="px-[5%] py-[2.5%]">
            <Outlet />
        </main>
    );
};
