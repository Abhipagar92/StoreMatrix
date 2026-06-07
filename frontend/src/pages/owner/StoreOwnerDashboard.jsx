import { useEffect, useState } from "react";

import Header from "../../components/common/Header";

import {
    getDashboard
} from "../../services/storeOwner";

function StoreOwnerDashboard() {

    const [store, setStore] =
        useState(null);

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

                alert(
                    "Failed to Load Dashboard"
                );

            }

        };

    if (!store) {

        return (
            <>
                <Header />
                <div className="container mt-5">
                    Loading...
                </div>
            </>
        );

    }

    return (

        <>
            <Header />

            <div className="container mt-5">

                <div className="card shadow p-4">

                    <h2>
                        Store Owner Dashboard
                    </h2>

                    <hr />

                    <p>
                        <strong>
                            Store Name:
                        </strong>
                        {" "}
                        {store.name}
                    </p>

                    <p>
                        <strong>
                            Average Rating:
                        </strong>
                        {" "}
                        {store.averageRating}
                    </p>

                    <p>
                        <strong>
                            Total Ratings:
                        </strong>
                        {" "}
                        {store.totalRatings}
                    </p>

                </div>

            </div>

        </>

    );
}

export default StoreOwnerDashboard;