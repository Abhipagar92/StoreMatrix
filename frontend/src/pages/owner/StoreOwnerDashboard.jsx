import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Layout from "../../components/common/Layout";
import Loader from "../../components/common/Loader";

import {
    getDashboard
} from "../../services/storeOwner";

function StoreOwnerDashboard() {

    const [dashboard, setDashboard] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const result =
                await getDashboard();

            setDashboard(
                result.data
            );

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to Load Dashboard"
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <Layout>

                <Loader />

            </Layout>

        );

    }

    if (
        !dashboard ||
        !dashboard.store
    ) {

        return (

            <Layout>

                <div className="alert alert-info">

                    No Store Assigned Yet

                </div>

            </Layout>

        );

    }

    const store =
        dashboard.store;

    return (

        <Layout>

            <div className="container-fluid">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        Store Owner Dashboard
                    </h2>

                    <p className="text-muted">
                        Monitor your store performance and ratings
                    </p>

                </div>

                <div className="row mb-4">

                    <div className="col-md-6 mb-3">

                        <div className="card bg-warning text-dark shadow border-0">

                            <div className="card-body text-center">

                                <h5>
                                    Average Rating
                                </h5>

                                <h1 className="fw-bold">

                                    ⭐ {
                                        Number(
                                            store.averageRating || 0
                                        ).toFixed(1)
                                    }

                                </h1>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 mb-3">

                        <div className="card bg-primary text-white shadow border-0">

                            <div className="card-body text-center">

                                <h5>
                                    Total Ratings
                                </h5>

                                <h1 className="fw-bold">

                                    {
                                        store.totalRatings || 0
                                    }

                                </h1>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="card shadow border-0 mb-4">

                    <div className="card-body">

                        <h4 className="mb-3">
                            Store Information
                        </h4>

                        <hr />

                        <div className="row">

                            <div className="col-md-6">

                                <p>
                                    <strong>
                                        Store Name:
                                    </strong>
                                    {" "}
                                    {store.name}
                                </p>

                                <p>
                                    <strong>
                                        Email:
                                    </strong>
                                    {" "}
                                    {store.email}
                                </p>

                            </div>

                            <div className="col-md-6">

                                <p>
                                    <strong>
                                        Address:
                                    </strong>
                                    {" "}
                                    {store.address}
                                </p>

                                <p>
                                    <strong>
                                        Rating:
                                    </strong>
                                    {" "}
                                    ⭐ {
                                        Number(
                                            store.averageRating || 0
                                        ).toFixed(1)
                                    }
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="card shadow border-0">

                    <div className="card-body">

                        <div className="d-flex justify-content-between align-items-center mb-3">

                            <h4>
                                Users Who Rated
                            </h4>

                            <span className="badge bg-success">

                                {
                                    dashboard.ratings?.length || 0
                                }
                                {" "}
                                Ratings

                            </span>

                        </div>

                        <div className="table-responsive">

                            <table className="table table-hover table-bordered align-middle">

                                <thead className="table-dark">

                                    <tr>

                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        dashboard.ratings &&
                                        dashboard.ratings.length > 0 ? (

                                            dashboard.ratings.map(
                                                (
                                                    user,
                                                    index
                                                ) => (

                                                    <tr
                                                        key={index}
                                                    >

                                                        <td>
                                                            {
                                                                user.name
                                                            }
                                                        </td>

                                                        <td>
                                                            {
                                                                user.email
                                                            }
                                                        </td>

                                                        <td>

                                                            <span className="badge bg-warning text-dark">

                                                                ⭐ {
                                                                    user.rating
                                                                }

                                                            </span>

                                                        </td>

                                                    </tr>

                                                )
                                            )

                                        ) : (

                                            <tr>

                                                <td
                                                    colSpan="3"
                                                    className="text-center text-muted"
                                                >

                                                    No Ratings Yet

                                                </td>

                                            </tr>

                                        )
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default StoreOwnerDashboard;