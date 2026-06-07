import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
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

            console.log(
                "STORE DETAILS =>",
                result.data
            );

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

                    <div className="alert alert-warning">

                        Store Not Found

                    </div>

                </div>

                <Footer />
            </>
        );

    }

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="card shadow border-0">

                            <div className="card-body p-4">

                                <h2 className="mb-2">
                                    {store.name}
                                </h2>

                                <p className="text-muted">
                                    {store.address}
                                </p>

                                <hr />

                                <div className="row mb-4">

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0">

                                            <div className="card-body text-center">

                                                <h5>
                                                    Average Rating
                                                </h5>

                                                <h2 className="text-warning">

                                                    ⭐ {store.averageRating}

                                                </h2>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <div className="card bg-light border-0">

                                            <div className="card-body text-center">

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

                                <hr />

                                <h4 className="mb-3">
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
                                                        fontSize: "40px",
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

                                        <p className="fw-bold">

                                            Selected Rating:
                                            {" "}
                                            {rating}
                                            {" "}
                                            Star(s)

                                        </p>

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

                </div>

            </div>

            <Footer />

        </>

    );

}

export default StoreDetails;