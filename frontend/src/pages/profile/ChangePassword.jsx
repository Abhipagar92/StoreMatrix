import { useState } from "react";

import Header from "../../components/common/Header";

import {
    changePassword
} from "../../services/auth";

function ChangePassword() {

    const [formData, setFormData] =
        useState({
            oldPassword: "",
            newPassword: ""
        });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });

    };

    const handleSubmit =
        async () => {

            try {

                const result =
                    await changePassword(
                        formData
                    );

                alert(
                    result.message
                );

                setFormData({
                    oldPassword: "",
                    newPassword: ""
                });

            } catch (error) {

                alert(
                    error?.response?.data?.message ||
                    "Failed"
                );

            }

        };

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow p-4">

                            <h2>
                                Change Password
                            </h2>

                            <input
                                type="password"
                                name="oldPassword"
                                placeholder="Old Password"
                                className="form-control mb-3"
                                value={
                                    formData.oldPassword
                                }
                                onChange={
                                    handleChange
                                }
                            />

                            <input
                                type="password"
                                name="newPassword"
                                placeholder="New Password"
                                className="form-control mb-3"
                                value={
                                    formData.newPassword
                                }
                                onChange={
                                    handleChange
                                }
                            />

                            <button
                                className="btn btn-primary w-100"
                                onClick={
                                    handleSubmit
                                }
                            >
                                Update Password
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default ChangePassword;