import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../../components/common/Layout";
import Loader from "../../components/common/Loader";

import { getStoreDetails } from "../../services/store";
import { submitRating } from "../../services/rating";

function StoreDetails() {

    const { id } = useParams();

    const [store, setStore] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [rating, setRating] =
        useState(0);

    useEffect(() => {

        loadStore();

    }, []);

    const loadStore = async () => {

        try {

            const result =
                await getStoreDetails(id);

            setStore(
                result.data
            );

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to Load Store Details"
            );

        } finally {

            setLoading(false);

        }

    };

    const handleRating = async () => {

        if (!rating) {

            toast.warning(
                "Please select a rating"
            );

            return;

        }

        try {

            const result =
                await submitRating(
                    id,
                    rating
                );

            toast.success(
                result.message
            );

            setRating(0);

            loadStore();

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to Submit Rating"
            );

        }

    };

    if (loading) {

        return (

            <Layout>

                <Loader />

            </Layout>

        );

    }

    if (!store) {

        return (

            <Layout>

                <div className="alert alert-warning">

                    Store Not Found

                </div>

            </Layout>

        );

    }

    return (

        <Layout>

            <div className="container-fluid">

                <div className="mb-4">

                    <h2 className="fw-bold">
                        {store.name}
                    </h2>

                    <p className="text-muted mb-0">
                        {store.address}
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
                                            store.averageRating ||
                                            store.average_rating ||
                                            0
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
                                        store.totalRatings ||
                                        store.total_ratings ||
                                        0
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
                                            store.averageRating ||
                                            store.average_rating ||
                                            0
                                        ).toFixed(1)
                                    }

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="card shadow border-0">

                    <div className="card-body">

                        <h4 className="mb-2">

                            Rate This Store

                        </h4>

                        <p className="text-muted">

                            Help other users by rating this store.

                        </p>

                        <div className="mb-3">

                            {
                                [1, 2, 3, 4, 5].map(
                                    (star) => (

                                        <span
                                            key={star}
                                            onClick={() =>
                                                setRating(
                                                    star
                                                )
                                            }
                                            style={{
                                                cursor: "pointer",
                                                fontSize: "45px",
                                                color:
                                                    star <= rating
                                                        ? "#ffc107"
                                                        : "#dee2e6"
                                            }}
                                        >
                                            ★
                                        </span>

                                    )
                                )
                            }

                        </div>

                        {
                            rating > 0 && (

                                <div className="alert alert-info">

                                    Selected Rating:
                                    {" "}
                                    <strong>

                                        {rating}

                                    </strong>
                                    {" "}
                                    Star(s)

                                </div>

                            )
                        }

                        <button
                            className="btn btn-primary"
                            onClick={handleRating}
                        >
                            Submit Rating
                        </button>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default StoreDetails;