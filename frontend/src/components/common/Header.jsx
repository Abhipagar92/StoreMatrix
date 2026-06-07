import { Link, useNavigate } from "react-router-dom";

import {
    getUser,
    clearStorage
} from "../../utils/storage";

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

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    StoreMatrix
                </Link>

                <div className="navbar-nav me-auto">

                    {user?.role === "ADMIN" && (
                        <>
                            <Link
                                className="nav-link"
                                to="/admin/dashboard"
                            >
                                Dashboard
                            </Link>

                            <Link
                                className="nav-link"
                                to="/admin/users"
                            >
                                Users
                            </Link>

                            <Link
                                className="nav-link"
                                to="/admin/stores"
                            >
                                Stores
                            </Link>

                            <Link
                                className="nav-link"
                                to="/admin/store-owner"
                            >
                                Create Owner
                            </Link>

                            <Link
                                className="nav-link"
                                to="/admin/store"
                            >
                                Create Store
                            </Link>
                        </>
                    )}

                    {user?.role === "NORMAL_USER" && (
                        <>
                            <Link
                                className="nav-link"
                                to="/stores"
                            >
                                Stores
                            </Link>
                        </>
                    )}

                    {user?.role === "STORE_OWNER" && (
                        <>
                            <Link
                                className="nav-link"
                                to="/owner/dashboard"
                            >
                                Dashboard
                            </Link>
                        </>
                    )}

                    <Link className="nav-link" to="/profile" > Profile</Link>

                    <Link className="nav-link" to="/change-password" >Change Password</Link>

                </div>

                <div className="d-flex align-items-center">

                    <span className="text-white me-3">
                        Welcome, {user?.name}
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