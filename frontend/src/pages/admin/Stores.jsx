import { useEffect, useState } from "react";

import { getStores, deleteStore } from "../../services/admin";

function Stores() {

    const [stores, setStores] = useState([]);

    useEffect(() => {
        loadStores();
    }, []);

    const loadStores = async () => {

        try {

            const result = await getStores();

            setStores(result.data);

        } catch (error) {

            console.log(error);

            alert("Failed to Load Stores");

        }

    };

    const handleDelete = async (storeId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this store?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const result = await deleteStore(storeId);

            alert(result.message);

            loadStores();

        } catch (error) {

            alert(
                error?.response?.data?.message ||
                "Delete Failed"
            );

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Stores Management
            </h2>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Owner</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        stores.length > 0 ? (

                            stores.map((store) => (

                                <tr key={store.store_id}>

                                    <td>{store.store_id}</td>

                                    <td>{store.name}</td>

                                    <td>{store.email}</td>

                                    <td>{store.owner_name}</td>

                                    <td>{store.status}</td>

                                    <td>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                handleDelete(
                                                    store.store_id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center"
                                >
                                    No Stores Found
                                </td>

                            </tr>

                        )
                    }

                </tbody>

            </table>

        </div>

    );
}

export default Stores;

