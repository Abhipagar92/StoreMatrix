import { useEffect, useState } from "react";

import {
    getStores
} from "../../services/admin";

function Stores() {

    const [stores, setStores] =
        useState([]);

    useEffect(() => {

        loadStores();

    }, []);

    const loadStores =
        async () => {

            try {

                const result =
                    await getStores();

                setStores(
                    result.data
                );

            } catch (error) {

                alert(
                    "Failed to Load Stores"
                );

            }

        };

    return (

        <div className="container mt-5">

            <h2>
                Stores Management
            </h2>

            <table className="table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Owner</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        stores.map(
                            (store) => (

                                <tr
                                    key={
                                        store.store_id
                                    }
                                >

                                    <td>
                                        {
                                            store.store_id
                                        }
                                    </td>

                                    <td>
                                        {
                                            store.name
                                        }
                                    </td>

                                    <td>
                                        {
                                            store.email
                                        }
                                    </td>

                                    <td>
                                        {
                                            store.owner_name
                                        }
                                    </td>

                                    <td>
                                        {
                                            store.status
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

export default Stores;