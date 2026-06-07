import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";
import Loader from "../../components/common/Loader";

import {
    getDashboardSummary
} from "../../services/admin";

function AdminDashboard() {

    const [summary, setSummary] =
        useState({
            totalUsers: 0,
            totalStores: 0,
            totalRatings: 0
        });

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const result =
                await getDashboardSummary();

            setSummary(
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

    return (

        <>
            <Header />

            <div className="container mt-4">

                <h2 className="mb-4">
                    Admin Dashboard
                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card bg-primary text-white shadow">

                            <div className="card-body text-center">

                                <h5>
                                    👥 Total Users
                                </h5>

                                <h1>
                                    {summary.totalUsers}
                                </h1>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card bg-success text-white shadow">

                            <div className="card-body text-center">

                                <h5>
                                    🏪 Total Stores
                                </h5>

                                <h1>
                                    {summary.totalStores}
                                </h1>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card bg-warning text-dark shadow">

                            <div className="card-body text-center">

                                <h5>
                                    ⭐ Total Ratings
                                </h5>

                                <h1>
                                    {summary.totalRatings}
                                </h1>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="card shadow">

                    <div className="card-body">

                        <h4 className="mb-4">
                            Quick Actions
                        </h4>

                        <div className="row">

                            <div className="col-md-3 mb-3">

                                <Link
                                    to="/admin/store-owner"
                                    className="btn btn-primary w-100"
                                >
                                    Create Store Owner
                                </Link>

                            </div>

                            <div className="col-md-3 mb-3">

                                <Link
                                    to="/admin/store"
                                    className="btn btn-success w-100"
                                >
                                    Create Store
                                </Link>

                            </div>

                            <div className="col-md-3 mb-3">

                                <Link
                                    to="/admin/users"
                                    className="btn btn-dark w-100"
                                >
                                    View Users
                                </Link>

                            </div>

                            <div className="col-md-3 mb-3">

                                <Link
                                    to="/admin/stores"
                                    className="btn btn-warning w-100"
                                >
                                    View Stores
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AdminDashboard;