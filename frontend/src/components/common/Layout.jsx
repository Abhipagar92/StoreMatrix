import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

    return (

        <>
            <Header />

            <div
                style={{
                    marginTop: "80px",
                    marginBottom: "70px",
                    minHeight: "calc(100vh - 150px)"
                }}
            >
                {children}
            </div>

            <Footer />

        </>

    );

}

export default Layout;