import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";
import Loader from "../../components/common/Loader";

import {
    getUsers
} from "../../services/admin";

function Users() {

    const [users, setUsers] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        try {

            const result =
                await getUsers();

            setUsers(
                result.data
            );

        } catch (error) {

            toast.error(
                "Failed to Load Users"
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

            <div className="container mt-5">

                <h2 className="mb-4">
                    Users Management
                </h2>

                {
                    users.length === 0 ? (

                        <div className="alert alert-info">

                            No Users Found

                        </div>

                    ) : (

                        <div className="card shadow">

                            <div className="card-body">

                                <div className="table-responsive">

                                    <table className="table table-hover table-bordered align-middle">

                                        <thead className="table-dark">

                                            <tr>

                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Status</th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {
                                                users.map(
                                                    (user) => (

                                                        <tr
                                                            key={
                                                                user.user_id
                                                            }
                                                        >

                                                            <td>
                                                                {
                                                                    user.user_id
                                                                }
                                                            </td>

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

                                                                <span className="badge bg-primary">

                                                                    {
                                                                        user.role
                                                                    }

                                                                </span>

                                                            </td>

                                                            <td>

                                                                <span
                                                                    className={
                                                                        user.status === "ACTIVE"
                                                                            ? "badge bg-success"
                                                                            : "badge bg-danger"
                                                                    }
                                                                >

                                                                    {
                                                                        user.status
                                                                    }

                                                                </span>

                                                            </td>

                                                        </tr>

                                                    )
                                                )
                                            }

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    )
                }

            </div>

        </>

    );
}

export default Users;