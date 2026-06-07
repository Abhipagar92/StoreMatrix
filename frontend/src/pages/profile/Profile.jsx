import Header from "../../components/common/Header";

import { getUser }
    from "../../utils/storage";

function Profile() {

    const user = getUser();

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-body">

                                <h2 className="text-center mb-4">
                                    My Profile
                                </h2>

                                <hr />

                                <div className="mb-3">

                                    <strong>Name:</strong>

                                    <p className="mb-0">
                                        {user?.name}
                                    </p>

                                </div>

                                <div className="mb-3">

                                    <strong>Email:</strong>

                                    <p className="mb-0">
                                        {user?.email}
                                    </p>

                                </div>

                                <div className="mb-3">

                                    <strong>Role:</strong>

                                    <p className="mb-0">
                                        {user?.role}
                                    </p>

                                </div>

                                <div className="mb-3">

                                    <strong>Address:</strong>

                                    <p className="mb-0">
                                        {user?.address || "N/A"}
                                    </p>

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