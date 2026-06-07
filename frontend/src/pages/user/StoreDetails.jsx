import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getStoreDetails } from "../../services/store";

import { submitRating, updateRating } from "../../services/rating";

function StoreDetails() {

    const { id } = useParams();

    const [store, setStore] =
        useState(null);

    const [rating, setRating] =
        useState("");

    useEffect(() => {

        loadStore();

    }, []);

    const loadStore = async () => {

        try {

            const result =
                await getStoreDetails(id);

            console.log(
                "STORE DETAILS =>",
                result
            );

            setStore(
                result.data
            );

        } catch (error) {

            console.log(
                "STORE ERROR =>",
                error
            );

        }

    };

    const handleRating =
        async () => {

            try {

                await submitRating(
                    id,
                    rating
                );

                alert(
                    "Rating Submitted Successfully"
                );

                loadStore();

            } catch (error) {

                if (
                    error?.response?.data?.message ===
                    "You have already rated this store"
                ) {

                    const update =
                        window.confirm(
                            "Rating already exists. Update it?"
                        );

                    if (!update) {
                        return;
                    }

                    const result =
                        await updateRating(
                            id,
                            rating
                        );

                    alert(
                        result.message
                    );

                    loadStore();

                }

            }

        };

    return (

        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2>
                    {store.name}
                </h2>

                <p>
                    {store.address}
                </p>

                <h4>
                    Average Rating:
                    {" "}
                    {store.averageRating}
                </h4>

                <hr />

                <h5>
                    Rate This Store
                </h5>

                <select
                    className="form-control mb-3"
                    value={rating}
                    onChange={(e) =>
                        setRating(
                            e.target.value
                        )
                    }
                >

                    <option value="">
                        Select Rating
                    </option>

                    <option value="1">
                        1
                    </option>

                    <option value="2">
                        2
                    </option>

                    <option value="3">
                        3
                    </option>

                    <option value="4">
                        4
                    </option>

                    <option value="5">
                        5
                    </option>

                </select>

                <button
                    className="btn btn-primary"
                    onClick={handleRating}
                >
                    Submit Rating
                </button>

            </div>

        </div>

    );
}

export default StoreDetails;