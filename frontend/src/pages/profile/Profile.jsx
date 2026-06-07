import { getUser } from "../../utils/storage";
import Layout from "../../components/common/Layout";

function Profile() {

    const user = getUser();

    if (!user) {

        return (

            <Layout>

                <div className="container mt-5">

                    <div className="alert alert-warning">

                        User information not found.

                    </div>

                </div>

            </Layout>

        );

    }

    return (

        <Layout>

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="card shadow border-0">

                            <div className="card-body p-5">

                                <div className="text-center mb-4">

                                    <i
                                        className="bi bi-person-circle text-primary"
                                        style={{
                                            fontSize: "90px"
                                        }}
                                    ></i>

                                    <h2 className="mt-3">
                                        {user.name}
                                    </h2>

                                    <span className="badge bg-primary fs-6">

                                        {user.role}

                                    </span>

                                </div>

                                <hr />

                                <div className="row mt-4">

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0">

                                            <div className="card-body">

                                                <h6 className="text-muted">
                                                    <i className="bi bi-person-fill me-2"></i>
                                                    Full Name
                                                </h6>

                                                <h5>{user.name}</h5>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0">

                                            <div className="card-body">

                                                <h6 className="text-muted">
                                                    <i className="bi bi-envelope-fill me-2"></i>
                                                    Email Address
                                                </h6>

                                                <h5>{user.email}</h5>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0">

                                            <div className="card-body">

                                                <h6 className="text-muted">
                                                    <i className="bi bi-shield-fill-check me-2"></i>
                                                    User Role
                                                </h6>

                                                <h5>{user.role}</h5>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0">

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

                                <div className="mt-4 text-center">

                                    <p className="text-muted">

                                        Manage your profile and account settings from the navigation menu.

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