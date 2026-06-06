import { useState } from "react";

import {
    createStoreOwner
} from "../../services/admin";

function CreateStoreOwner() {

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

    const handleSubmit =
        async () => {

            try {

                const result =
                    await createStoreOwner(
                        formData
                    );

                alert(
                    result.message
                );

                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    address: ""
                });

            } catch (error) {

                alert(
                    error?.response?.data?.message ||
                    "Failed"
                );

            }

        };

    return (

        <div className="container mt-5">

            <h2>
                Create Store Owner
            </h2>

            <input
                className="form-control mb-3"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="password"
                className="form-control mb-3"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <textarea
                className="form-control mb-3"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
            />

            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Create Owner
            </button>

        </div>

    );
}

export default CreateStoreOwner;