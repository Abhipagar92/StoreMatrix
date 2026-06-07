import { useEffect, useState } from "react";

import Header from "../../components/common/Header";
import Loader from "../../components/common/Loader";

import {
    getDashboard
} from "../../services/storeOwner";

function StoreOwnerDashboard() {

    const [store, setStore] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard =
        async () => {

            try {

                const result =
                    await getDashboard();

                setStore(
                    result.data
                );

            } catch (error) {

                console.log(error);

                alert(
                    "Failed to Load Dashboard"
                );

            } finally {

                setLoading(false);

            }

        };

    if (loading) {

        return (

            <>
                <Header />
                <Loader />
            </>

        );

    }

    if (!store) {

        return (

            <>
                <Header />

                <div className="container mt-5">

                    <div className="alert alert-info">

                        No Store Assigned Yet

                    </div>

                </div>

            </>

        );

    }

    return (

        <>
            <Header />

            <div className="container mt-5">

                <h2 className="mb-4">
                    Store Owner Dashboard
                </h2>

                <div className="row mb-4">

                    <div className="col-md-6">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h5>
                                    Average Rating
                                </h5>

                                <h2 className="text-warning">
                                    ⭐ {store.averageRating}
                                </h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h5>
                                    Total Ratings
                                </h5>

                                <h2 className="text-primary">
                                    {store.totalRatings}
                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="card shadow">

                    <div className="card-body">

                        <h4 className="mb-3">
                            Store Information
                        </h4>

                        <hr />

                        <p>
                            <strong>
                                Store Name:
                            </strong>
                            {" "}
                            {store.name}
                        </p>

                        {
                            store.email && (
                                <p>
                                    <strong>
                                        Email:
                                    </strong>
                                    {" "}
                                    {store.email}
                                </p>
                            )
                        }

                        {
                            store.address && (
                                <p>
                                    <strong>
                                        Address:
                                    </strong>
                                    {" "}
                                    {store.address}
                                </p>
                            )
                        }

                    </div>

                </div>

            </div>

        </>

    );
}

export default StoreOwnerDashboard;