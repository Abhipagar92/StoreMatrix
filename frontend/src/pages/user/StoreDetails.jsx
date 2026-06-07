import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/common/Header";
import { getStoreDetails } from "../../services/store";
import { submitRating } from "../../services/rating";
import Loader from "../../components/common/Loader";

function StoreDetails() {

    const { id } = useParams();

    const [store, setStore] =
        useState(null);

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

            alert(
                "Failed to Load Store Details"
            );

        }

    };

    const handleRating =
        async () => {

            if (!rating) {

                alert(
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

                alert(
                    result.message
                );

                loadStore();

            } catch (error) {

                alert(
                    error?.response?.data?.message ||
                    "Failed to Submit Rating"
                );

            }

        };

    if (!store) {

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

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <div className="card shadow p-4">

                            <h2 className="mb-3">
                                {store.name}
                            </h2>

                            <p className="text-muted">
                                {store.address}
                            </p>

                            <hr />

                            <h4>
                                ⭐ Average Rating:
                                {" "}
                                {store.averageRating}
                            </h4>

                            <p>
                                Total Ratings:
                                {" "}
                                {store.totalRatings}
                            </p>

                            <hr />

                            <h5 className="mb-3">
                                Rate This Store
                            </h5>

                            <div className="mb-4">

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
                                                    fontSize: "35px",
                                                    color:
                                                        star <= rating
                                                            ? "gold"
                                                            : "#ccc"
                                                }}
                                            >
                                                ★
                                            </span>

                                        )
                                    )
                                }

                            </div>

                            <button
                                className="btn btn-primary"
                                onClick={
                                    handleRating
                                }
                            >
                                Submit Rating
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}

export default StoreDetails;