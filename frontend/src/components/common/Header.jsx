import { Link, useNavigate } from "react-router-dom";

import {
    getUser,
    clearStorage
} from "../../utils/storage";

function Header() {

    const navigate =
        useNavigate();

    const user =
        getUser();

    const handleLogout = () => {

        clearStorage();

        navigate("/");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    StoreMatrix
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav me-auto">

                        {
                            user?.role === "ADMIN" && (
                                <>
                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/admin/dashboard"
                                        >
                                            📊 Dashboard
                                        </Link>

                                    </li>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/admin/users"
                                        >
                                            <i className="bi bi-people-fill me-1"></i>
                                            Users
                                        </Link>

                                    </li>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/admin/stores"
                                        >
                                            <i className="bi bi-shop me-1"></i>
                                            Stores
                                        </Link>

                                    </li>

                                </>
                            )
                        }

                        {
                            user?.role === "NORMAL_USER" && (
                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/stores"
                                    >
                                        <i className="bi bi-shop me-1"></i>
                                        Stores
                                    </Link>

                                </li>
                            )
                        }

                        {
                            user?.role === "STORE_OWNER" && (
                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/owner/dashboard"
                                    >
                                        📊 Dashboard
                                    </Link>

                                </li>
                            )
                        }

                        {
                            user && (
                                <>
                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/profile"
                                        >
                                            <i className="bi bi-person-circle me-1"></i>
                                            Profile
                                        </Link>

                                    </li>

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/change-password"
                                        >
                                            <i className="bi bi-key-fill me-1"></i>
                                            Change Password
                                        </Link>

                                    </li>
                                </>
                            )
                        }

                    </ul>

                    {
                        user && (

                            <div className="d-flex align-items-center">

                                <span className="text-white me-3">

                                    Welcome,
                                    {" "}
                                    <strong>
                                        {user.name}
                                    </strong>

                                </span>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>

                            </div>

                        )
                    }

                </div>

            </div>

        </nav>

    );

}

export default Header;