import { Link, useNavigate } from "react-router-dom";

import {  getUser,  clearStorage } from "../../utils/storage";

function Header() {

    const navigate = useNavigate();

    const user = getUser();

    const handleLogout = () => {

        clearStorage();

        navigate("/");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    StoreMatrix
                </Link>

                <div className="d-flex align-items-center">

                    <span className="text-white me-3">
                        {user?.name}
                    </span>

                    <button
                        className="btn btn-danger btn-sm"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );
}

export default Header;