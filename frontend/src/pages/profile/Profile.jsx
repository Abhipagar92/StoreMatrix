import Header from "../../components/common/Header";

import {
    getUser
} from "../../utils/storage";

function Profile() {

    const user = getUser();

    if (!user) {

        return (

            <>
                <Header />

                <div className="container mt-5">

                    <div className="alert alert-warning">

                        User information not found

                    </div>

                </div>

            </>

        );

    }

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <div className="card shadow">

                            <div className="card-body p-5">

                                <div className="text-center mb-4">

                                    <div
                                        className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                            fontSize: "36px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {
                                            user.name
                                                ?.charAt(0)
                                                .toUpperCase()
                                        }
                                    </div>

                                    <h2 className="mt-3">
                                        {user.name}
                                    </h2>

                                    <p className="text-muted">
                                        {user.role}
                                    </p>

                                </div>

                                <hr />

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label fw-bold">
                                            Full Name
                                        </label>

                                        <div className="form-control bg-light">
                                            {user.name}
                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label fw-bold">
                                            Email Address
                                        </label>

                                        <div className="form-control bg-light">
                                            {user.email}
                                        </div>

                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label fw-bold">
                                            Role
                                        </label>

                                        <div className="form-control bg-light">
                                            {user.role}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default Profile;