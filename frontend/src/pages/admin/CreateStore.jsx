import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";

import {
    getUsers,
    createStore
} from "../../services/admin";

function CreateStore() {

    const [owners, setOwners] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            ownerId: "",
            name: "",
            email: "",
            address: ""
        });

    useEffect(() => {

        loadOwners();

    }, []);

    const loadOwners = async () => {

        try {

            const result =
                await getUsers();

            const storeOwners =
                result.data.filter(
                    (user) =>
                        user.role ===
                        "STORE_OWNER"
                );

            setOwners(
                storeOwners
            );

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to Load Store Owners"
            );

        }

    };

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

                if (
                    !formData.ownerId ||
                    !formData.name.trim() ||
                    !formData.email.trim() ||
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
                        "Store name must be at least 3 characters"
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
                    formData.address.trim().length < 5
                ) {

                    toast.error(
                        "Address must be at least 5 characters"
                    );

                    return;

                }

                setLoading(true);

                const result =
                    await createStore(
                        formData
                    );

                toast.success(
                    result.message
                );

                setFormData({
                    ownerId: "",
                    name: "",
                    email: "",
                    address: ""
                });

            } catch (error) {

                toast.error(
                    error?.response?.data?.message ||
                    "Failed to Create Store"
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

                    <div className="col-md-7">

                        <div className="card shadow">

                            <div className="card-body p-4">

                                <h2 className="text-center mb-4">
                                    Create Store
                                </h2>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Store Owner
                                    </label>

                                    <select
                                        className="form-control"
                                        name="ownerId"
                                        value={formData.ownerId}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select Store Owner
                                        </option>

                                        {
                                            owners.map(
                                                (owner) => (

                                                    <option
                                                        key={
                                                            owner.user_id
                                                        }
                                                        value={
                                                            owner.user_id
                                                        }
                                                    >
                                                        {owner.name}
                                                    </option>

                                                )
                                            )
                                        }

                                    </select>

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Store Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Store Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Store Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Store Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Store Address
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Enter Store Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />

                                </div>

                                <button
                                    className="btn btn-success w-100"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ? "Creating..."
                                            : "Create Store"
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

export default CreateStore;