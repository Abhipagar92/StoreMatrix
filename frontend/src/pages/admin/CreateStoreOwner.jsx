import { useState } from "react";

import { toast } from "react-toastify";

import Layout from "../../components/common/Layout";

import {
    createStoreOwner
} from "../../services/admin";

function CreateStoreOwner() {

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            password: "",
            address: ""
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
                !formData.name.trim() ||
                !formData.email.trim() ||
                !formData.password.trim() ||
                !formData.address.trim()
            ) {

                toast.warning(
                    "Please fill all fields"
                );

                return;

            }

            if (
                formData.name.trim().length < 3
            ) {

                toast.error(
                    "Name must be at least 3 characters"
                );

                return;

            }

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailRegex.test(
                    formData.email
                )
            ) {

                toast.error(
                    "Please enter a valid email"
                );

                return;

            }

            if (
                formData.password.length < 8
            ) {

                toast.error(
                    "Password must be at least 8 characters"
                );

                return;

            }

            if (
                formData.address.trim().length < 5
            ) {

                toast.error(
                    "Address must be at least 5 characters"
                );

                return;

            }

            setLoading(true);

            const result =
                await createStoreOwner(
                    formData
                );

            toast.success(
                result.message
            );

            setFormData({
                name: "",
                email: "",
                password: "",
                address: ""
            });

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to Create Store Owner"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <Layout>

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="card shadow border-0">

                            <div className="card-body p-4">

                                <div className="text-center mb-4">

                                    <h2 className="fw-bold">
                                        Create Store Owner
                                    </h2>

                                    <p className="text-muted mb-0">
                                        Add a new Store Owner to the system
                                    </p>

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Address
                                    </label>

                                    <textarea
                                        name="address"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ? "Creating..."
                                            : "Create Store Owner"
                                    }
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default CreateStoreOwner;