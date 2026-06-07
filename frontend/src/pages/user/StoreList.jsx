import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Layout from "../../components/common/Layout";
import Loader from "../../components/common/Loader";
import StoreCard from "../../components/store/StoreCard";

import {
    getStores
} from "../../services/store";

function StoreList() {

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

    const filteredStores =
        stores.filter(
            (store) =>

                store.name
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

            <Layout>

                <Loader />

            </Layout>

        );

    }

    return (

        <Layout>

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            Available Stores
                        </h2>

                        <p className="text-muted mb-0">
                            Browse and rate stores
                        </p>

                    </div>

                    <span className="badge bg-primary fs-6">

                        Total Stores:
                        {" "}
                        {filteredStores.length}

                    </span>

                </div>

                <div className="card shadow border-0 mb-4">

                    <div className="card-body">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Store Name or Address..."
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

                        <div className="row">

                            {
                                filteredStores.map(
                                    (store) => (

                                        <div
                                            className="col-xl-4 col-lg-6 col-md-6 mb-4"
                                            key={
                                                store.store_id
                                            }
                                        >

                                            <StoreCard
                                                store={store}
                                            />

                                        </div>

                                    )
                                )
                            }

                        </div>

                    )
                }

            </div>

        </Layout>

    );

}

export default StoreList;