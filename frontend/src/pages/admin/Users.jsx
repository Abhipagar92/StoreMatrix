import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Layout from "../../components/common/Layout";
import Loader from "../../components/common/Loader";

import {
    getUsers
} from "../../services/admin";

function Users() {

    const [users, setUsers] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

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

            console.log(error);

            toast.error(
                "Failed to Load Users"
            );

        } finally {

            setLoading(false);

        }

    };

    const filteredUsers =
        users.filter(
            (user) =>

                user.name
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                user.email
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                user.address
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||

                user.role
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );

    if (loading) {

        return (

            <Layout>

                <Loader />

            </Layout>

        );

    }

    return (

        <Layout>

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="fw-bold mb-1">
                            Users Management
                        </h2>

                        <p className="text-muted mb-0">
                            Manage all registered users
                        </p>

                    </div>

                    <span className="badge bg-primary fs-6">

                        Total Users:
                        {" "}
                        {filteredUsers.length}

                    </span>

                </div>

                <div className="card shadow border-0 mb-4">

                    <div className="card-body">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Name, Email, Address or Role"
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                </div>

                {
                    filteredUsers.length === 0 ? (

                        <div className="alert alert-warning">

                            No Users Found

                        </div>

                    ) : (

                        <div className="card shadow border-0">

                            <div className="card-body">

                                <div className="table-responsive">

                                    <table className="table table-hover table-bordered align-middle">

                                        <thead className="table-dark">

                                            <tr>

                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>Role</th>
                                                <th>Status</th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {
                                                filteredUsers.map(
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
                                                                {
                                                                    user.address
                                                                }
                                                            </td>

                                                            <td>

                                                                <span
                                                                    className={
                                                                        user.role === "ADMIN"
                                                                            ? "badge bg-danger"
                                                                            : user.role === "STORE_OWNER"
                                                                                ? "badge bg-warning text-dark"
                                                                                : "badge bg-primary"
                                                                    }
                                                                >

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
                                                                            : "badge bg-secondary"
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

        </Layout>

    );

}

export default Users;