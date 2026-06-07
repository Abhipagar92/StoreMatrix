import { useState } from "react";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";

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

        <>
            <Header />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-body p-4">

                                <h2 className="text-center mb-4">
                                    Create Store Owner
                                </h2>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
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

                                    <label className="form-label">
                                        Address
                                    </label>

                                    <textarea
                                        name="address"
                                        className="form-control"
                                        rows="3"
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

        </>

    );
}

export default CreateStoreOwner;