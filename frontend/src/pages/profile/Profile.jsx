import { getUser } from "../../utils/storage";
import Layout from "../../components/common/Layout";

function Profile() {

    const user = getUser();

    if (!user) {

        return (

            <Layout>

                <div className="alert alert-warning">

                    User information not found.

                </div>

            </Layout>

        );

    }

    return (

        <Layout>

            <div className="container-fluid">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        My Profile
                    </h2>

                    <p className="text-muted">
                        View your account information and profile details
                    </p>

                </div>

                <div className="row justify-content-center">

                    <div className="col-xl-10">

                        <div className="card shadow border-0">

                            <div className="card-body p-5">

                                <div className="text-center mb-4">

                                    <i
                                        className="bi bi-person-circle text-primary"
                                        style={{
                                            fontSize: "100px"
                                        }}
                                    ></i>

                                    <h2 className="fw-bold mt-3">

                                        {user.name}

                                    </h2>

                                    <span
                                        className={
                                            user.role === "ADMIN"
                                                ? "badge bg-danger fs-6"
                                                : user.role === "STORE_OWNER"
                                                    ? "badge bg-warning text-dark fs-6"
                                                    : "badge bg-primary fs-6"
                                        }
                                    >

                                        {
                                            user.role.replace(
                                                "_",
                                                " "
                                            )
                                        }

                                    </span>

                                </div>

                                <hr />

                                <div className="row mt-4">

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0 shadow-sm">

                                            <div className="card-body">

                                                <h6 className="text-muted">

                                                    <i className="bi bi-person-fill me-2"></i>

                                                    Full Name

                                                </h6>

                                                <h5>

                                                    {user.name}

                                                </h5>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0 shadow-sm">

                                            <div className="card-body">

                                                <h6 className="text-muted">

                                                    <i className="bi bi-envelope-fill me-2"></i>

                                                    Email Address

                                                </h6>

                                                <h5>

                                                    {user.email}

                                                </h5>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0 shadow-sm">

                                            <div className="card-body">

                                                <h6 className="text-muted">

                                                    <i className="bi bi-shield-fill-check me-2"></i>

                                                    User Role

                                                </h6>

                                                <h5>

                                                    {
                                                        user.role.replace(
                                                            "_",
                                                            " "
                                                        )
                                                    }

                                                </h5>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0 shadow-sm">

                                            <div className="card-body">

                                                <h6 className="text-muted">

                                                    <i className="bi bi-person-badge-fill me-2"></i>

                                                    Account Status

                                                </h6>

                                                <h5 className="text-success">

                                                    Active

                                                </h5>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="row mt-2">

                                    <div className="col-md-6 mb-3">

                                        <div className="card border-0 shadow-sm">

                                            <div className="card-body text-center">

                                                <h6 className="text-muted">

                                                    Profile Completion

                                                </h6>

                                                <h3 className="text-success">

                                                    100%

                                                </h3>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <div className="card border-0 shadow-sm">

                                            <div className="card-body text-center">

                                                <h6 className="text-muted">

                                                    Account Status

                                                </h6>

                                                <h3 className="text-success">

                                                    Active

                                                </h3>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="mt-4 text-center">

                                    <p className="text-muted">

                                        Manage your profile and account settings using the sidebar navigation.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default Profile;