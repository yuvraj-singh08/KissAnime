import Header from "./Header";
import Footer from "./Footer";
import Foot from './Foot';

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Foot />
        </>
    )
}

export default Layout;