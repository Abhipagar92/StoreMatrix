import { useEffect, useState } from "react";

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

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard =
        async () => {

            try {

                const result =
                    await getDashboardSummary();

                setSummary(
                    result.data
                );

            } catch (error) {

                console.log(error);

                alert(
                    "Failed to Load Dashboard"
                );

            }

        };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Admin Dashboard
            </h2>

            <div className="row">

                <div className="col-md-4">

                    <div className="card text-center shadow">

                        <div className="card-body">

                            <h5>
                                Total Users
                            </h5>

                            <h2>
                                {
                                    summary.totalUsers
                                }
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card text-center shadow">

                        <div className="card-body">

                            <h5>
                                Total Stores
                            </h5>

                            <h2>
                                {
                                    summary.totalStores
                                }
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card text-center shadow">

                        <div className="card-body">

                            <h5>
                                Total Ratings
                            </h5>

                            <h2>
                                {
                                    summary.totalRatings
                                }
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AdminDashboard;