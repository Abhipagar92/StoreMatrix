import {
    NavLink,
    useNavigate
} from "react-router-dom";

import {
    getUser,
    clearStorage
} from "../../utils/storage";

import { useState } from "react";

function Sidebar() {

    const user = getUser();

    const navigate = useNavigate();

    const [isOpen, setIsOpen] =
        useState(false);

    const handleLogout = () => {

        const confirmLogout =
            window.confirm(
                "Are you sure you want to logout?"
            );

        if (!confirmLogout) {
            return;
        }

        clearStorage();

        navigate("/");

    };

    const closeSidebar = () => {

        setIsOpen(false);

    };

    const activeStyle = ({ isActive }) =>
        `nav-link mb-2 rounded px-3 py-2 ${
            isActive
                ? "bg-primary text-white"
                : "text-white"
        }`;

    return (

        <>

            {/* Hamburger Button */}

            {
                !isOpen && (

                    <button
                        className="btn btn-dark d-md-none sidebar-toggle"
                        onClick={() =>
                            setIsOpen(true)
                        }
                    >

                        <i className="bi bi-list"></i>

                    </button>

                )
            }

            {/* Overlay */}

            {
                isOpen && (

                    <div
                        className="sidebar-overlay"
                        onClick={closeSidebar}
                    ></div>

                )
            }

            {/* Sidebar */}

            <div
                className={`sidebar bg-dark text-white d-flex flex-column ${
                    isOpen
                        ? "show-sidebar"
                        : ""
                }`}
            >

                {/* Close Button */}

                <div className="d-md-none text-end p-2">

                    <button
                        className="btn btn-outline-light btn-sm"
                        onClick={closeSidebar}
                    >

                        ✕

                    </button>

                </div>

                <div className="p-3">

                    <div className="text-center mb-4">

                        <i
                            className="bi bi-shop"
                            style={{
                                fontSize: "45px"
                            }}
                        ></i>

                        <h3 className="fw-bold mt-2">

                            StoreMatrix

                        </h3>

                        <small className="text-light">

                            {user?.name}

                        </small>

                        <br />

                        <small className="text-warning">

                            {
                                user?.role?.replace(
                                    "_",
                                    " "
                                )
                            }

                        </small>

                    </div>

                    <hr />

                    {
                        user?.role === "ADMIN" && (

                            <>

                                <NavLink
                                    to="/admin/dashboard"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-speedometer2 me-2"></i>
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    to="/admin/users"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-people-fill me-2"></i>
                                    Users
                                </NavLink>

                                <NavLink
                                    to="/admin/stores"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-shop me-2"></i>
                                    Stores
                                </NavLink>

                                <NavLink
                                    to="/admin/store-owner"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-person-plus-fill me-2"></i>
                                    Create Owner
                                </NavLink>

                                <NavLink
                                    to="/admin/store"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-building-add me-2"></i>
                                    Create Store
                                </NavLink>

                            </>

                        )
                    }

                    {
                        user?.role === "NORMAL_USER" && (

                            <>

                                <NavLink
                                    to="/stores"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-shop me-2"></i>
                                    Stores
                                </NavLink>

                                <NavLink
                                    to="/profile"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-person-circle me-2"></i>
                                    Profile
                                </NavLink>

                                <NavLink
                                    to="/change-password"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-key-fill me-2"></i>
                                    Change Password
                                </NavLink>

                            </>

                        )
                    }

                    {
                        user?.role === "STORE_OWNER" && (

                            <>

                                <NavLink
                                    to="/owner/dashboard"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-speedometer2 me-2"></i>
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    to="/owner/ratings"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-star-fill me-2"></i>
                                    Ratings
                                </NavLink>

                                <NavLink
                                    to="/profile"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-person-circle me-2"></i>
                                    Profile
                                </NavLink>

                                <NavLink
                                    to="/change-password"
                                    className={activeStyle}
                                    onClick={closeSidebar}
                                >
                                    <i className="bi bi-key-fill me-2"></i>
                                    Change Password
                                </NavLink>

                            </>

                        )
                    }

                </div>

                <div className="mt-auto p-3">

                    <button
                        className="btn btn-danger w-100"
                        onClick={handleLogout}
                    >

                        <i className="bi bi-box-arrow-right me-2"></i>

                        Logout

                    </button>

                </div>

            </div>

        </>

    );

}

export default Sidebar;