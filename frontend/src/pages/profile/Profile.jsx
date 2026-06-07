import Header from "../../components/common/Header";

import { getUser }
from "../../utils/storage";

function Profile() {

    const user = getUser();

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="card shadow p-4">

                    <h2>
                        My Profile
                    </h2>

                    <hr />

                    <p>
                        <strong>Name:</strong>
                        {" "}
                        {user?.name}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        {" "}
                        {user?.email}
                    </p>

                    <p>
                        <strong>Role:</strong>
                        {" "}
                        {user?.role}
                    </p>

                </div>

            </div>
        </>

    );
}

export default Profile;