import { useEffect, useState } from "react";

import {
    getUsers,
    createStore
} from "../../services/admin";

function CreateStore() {

    const [owners, setOwners] =
        useState([]);

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

            setOwners(storeOwners);

        } catch (error) {

            console.log(error);

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

                const result =
                    await createStore(
                        formData
                    );

                alert(
                    result.message
                );

                setFormData({
                    ownerId: "",
                    name: "",
                    email: "",
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
                Create Store
            </h2>

            <select
                className="form-control mb-3"
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

            <input
                className="form-control mb-3"
                placeholder="Store Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                placeholder="Store Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <textarea
                className="form-control mb-3"
                placeholder="Store Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
            />

            <button
                className="btn btn-success"
                onClick={handleSubmit}
            >
                Create Store
            </button>

        </div>

    );
}

export default CreateStore;