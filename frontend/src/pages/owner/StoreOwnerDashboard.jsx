import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
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
            <>
                <Header />
                <Loader />
            </>
        );

    }

    if (
        !dashboard ||
        !dashboard.store
    ) {

        return (
            <>
                <Header />

                <div className="container mt-5">

                    <div className="alert alert-info">

                        No Store Assigned Yet

                    </div>

                </div>

                <Footer />
            </>
        );

    }

    const store =
        dashboard.store;

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

                <div className="card shadow mb-4">

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

                        <p>
                            <strong>
                                Email:
                            </strong>
                            {" "}
                            {store.email}
                        </p>

                        <p>
                            <strong>
                                Address:
                            </strong>
                            {" "}
                            {store.address}
                        </p>

                        <p>
                            <strong>
                                Average Rating:
                            </strong>
                            {" "}
                            ⭐ {store.averageRating}
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

                <div className="card shadow">

                    <div className="card-body">

                        <h4 className="mb-3">
                            Users Who Rated
                        </h4>

                        <table className="table table-bordered table-striped">

                            <thead className="table-dark">

                                <tr>

                                    <th>
                                        Name
                                    </th>

                                    <th>
                                        Email
                                    </th>

                                    <th>
                                        Rating
                                    </th>

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

                                                <tr key={index}>

                                                    <td>
                                                        {user.name}
                                                    </td>

                                                    <td>
                                                        {user.email}
                                                    </td>

                                                    <td>
                                                        ⭐ {user.rating}
                                                    </td>

                                                </tr>

                                            )
                                        )

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="3"
                                                className="text-center"
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

            <Footer />

        </>

    );

}

export default StoreOwnerDashboard;