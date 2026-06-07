import { getUser } from "../../utils/storage";

function Header() {

    const user = getUser();

    return (

        <nav className="navbar navbar-dark bg-dark px-4 top-navbar">

            <div className="container-fluid d-flex justify-content-between align-items-center">

                {/* Logo / Title */}

                <h4
                    className="text-white mb-0 fw-bold"
                    style={{
                        fontSize: "22px"
                    }}
                >
                    
                </h4>

                {/* User Section */}

                {
                    user && (

                        <div className="d-flex align-items-center">

                            {/* Notification Icon */}

                            <i
                                className="bi bi-bell-fill text-white me-3"
                                style={{
                                    fontSize: "20px",
                                    cursor: "pointer"
                                }}
                            ></i>

                            {/* User Info - Hidden on Mobile */}

                            <div
                                className="text-end d-none d-md-block"
                            >

                                <div
                                    className="text-white fw-bold"
                                >
                                    {user.name}
                                </div>

                                <small
                                    className="text-light"
                                >
                                    {
                                        user.role.replace(
                                            "_",
                                            " "
                                        )
                                    }
                                </small>

                            </div>

                        </div>

                    )
                }

            </div>

        </nav>

    );

}

export default Header;