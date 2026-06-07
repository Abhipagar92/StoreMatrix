import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

    return (

        <div>

            <Sidebar />

            <div className="main-content">

                <Header />

                <main
                    style={{
                        flex: 1,
                        padding: "90px 20px 80px"
                    }}
                >

                    {children}

                </main>

                <Footer />

            </div>

        </div>

    );

}

export default Layout;