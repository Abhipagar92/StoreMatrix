import { useEffect, useState } from "react";

import { getUsers }
from "../../services/admin";

function Users() {

    const [users, setUsers] =
        useState([]);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers =
        async () => {

            try {

                const result =
                    await getUsers();

                setUsers(
                    result.data
                );

            } catch (error) {

                alert(
                    "Failed to Load Users"
                );

            }

        };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Users Management
            </h2>

            <table
                className="table table-bordered"
            >

                <thead>

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
                                        {
                                            user.role
                                        }
                                    </td>

                                    <td>
                                        {
                                            user.status
                                        }
                                    </td>

                                </tr>
                            )
                        )
                    }

                </tbody>

            </table>

        </div>
    );
}

export default Users;