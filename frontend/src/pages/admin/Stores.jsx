import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";
import Loader from "../../components/common/Loader";

import {
    getStores,
    deleteStore
} from "../../services/admin";

function Stores() {

    const [stores, setStores] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    useEffect(() => {

        loadStores();

    }, []);

    const loadStores = async () => {

        try {

            const result =
                await getStores();

            setStores(
                result.data
            );

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to Load Stores"
            );

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async (
        storeId
    ) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this store?"
            );

        if (!confirmDelete) {
            return;
        }

        try {

            const result =
                await deleteStore(
                    storeId
                );

            toast.success(
                result.message
            );

            loadStores();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Delete Failed"
            );

        }

    };

    const filteredStores =
        stores.filter(
            (store) =>

                store.name
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                store.email
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                store.address
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );

    if (loading) {

        return (

            <>
                <Header />
                <Loader />
            </>

        );

    }

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>
                        Stores Management
                    </h2>

                    <span className="badge bg-primary fs-6">

                        Total Stores:
                        {" "}
                        {filteredStores.length}

                    </span>

                </div>

                <div className="card shadow mb-4">

                    <div className="card-body">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Store Name, Email or Address"
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                </div>

                {
                    filteredStores.length === 0 ? (

                        <div className="alert alert-warning">

                            No Stores Found

                        </div>

                    ) : (

                        <div className="card shadow">

                            <div className="card-body">

                                <div className="table-responsive">

                                    <table className="table table-hover table-bordered align-middle">

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
                                                filteredStores.map(
                                                    (store) => (

                                                        <tr
                                                            key={
                                                                store.store_id
                                                            }
                                                        >

                                                            <td>
                                                                {
                                                                    store.store_id
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    store.name
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    store.email
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    store.owner_name
                                                                }
                                                            </td>

                                                            <td>

                                                                <span
                                                                    className={
                                                                        store.status === "ACTIVE"
                                                                            ? "badge bg-success"
                                                                            : "badge bg-secondary"
                                                                    }
                                                                >

                                                                    {
                                                                        store.status
                                                                    }

                                                                </span>

                                                            </td>

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

                                                    )
                                                )
                                            }

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    )
                }

            </div>

        </>

    );

}

export default Stores;