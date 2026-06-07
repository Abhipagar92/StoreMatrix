import { useState } from "react";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";

import {
    changePassword
} from "../../services/auth";

function ChangePassword() {

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async () => {

        try {

            if (
                !formData.oldPassword.trim() ||
                !formData.newPassword.trim() ||
                !formData.confirmPassword.trim()
            ) {

                toast.warning(
                    "Please fill all fields"
                );

                return;

            }

            if (
                formData.newPassword !==
                formData.confirmPassword
            ) {

                toast.error(
                    "New Password and Confirm Password do not match"
                );

                return;

            }

            if (
                formData.newPassword.length < 6
            ) {

                toast.warning(
                    "Password must be at least 6 characters"
                );

                return;

            }

            setLoading(true);

            const result =
                await changePassword({
                    oldPassword:
                        formData.oldPassword,
                    newPassword:
                        formData.newPassword
                });

            toast.success(
                result.message
            );

            setFormData({
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            });

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to Change Password"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-body p-4">

                                <h2 className="text-center mb-4">
                                    Change Password
                                </h2>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Current Password
                                    </label>

                                    <input
                                        type="password"
                                        name="oldPassword"
                                        className="form-control"
                                        placeholder="Enter Current Password"
                                        value={
                                            formData.oldPassword
                                        }
                                        onChange={
                                            handleChange
                                        }
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        New Password
                                    </label>

                                    <input
                                        type="password"
                                        name="newPassword"
                                        className="form-control"
                                        placeholder="Enter New Password"
                                        value={
                                            formData.newPassword
                                        }
                                        onChange={
                                            handleChange
                                        }
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Confirm Password
                                    </label>

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm New Password"
                                        value={
                                            formData.confirmPassword
                                        }
                                        onChange={
                                            handleChange
                                        }
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ? "Updating..."
                                            : "Update Password"
                                    }
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default ChangePassword;