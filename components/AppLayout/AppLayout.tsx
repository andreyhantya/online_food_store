import { Header } from '../Header';

export const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
