import { useEffect, useState } from "react";

import Header from "../../components/common/Header";
import StoreCard from "../../components/store/StoreCard";

import { getStores } from "../../services/store";

function StoreList() {

    const [stores, setStores] =
        useState([]);

    const [search, setSearch] =
        useState("");

    useEffect(() => {

        loadStores();

    }, []);

    const loadStores = async () => {

        try {

            const result =
                await getStores();

            setStores(
                result.data
            );

        } catch (error) {

            console.log(error);

            alert(
                "Failed to Load Stores"
            );

        }

    };

    const filteredStores =
        stores.filter(
            (store) =>
                store.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );

    return (

        <>
            <Header />

            <div className="container mt-5">

                <h2 className="mb-4">
                    Available Stores
                </h2>

                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Search Stores..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                />

                {
                    filteredStores.length === 0 && (

                        <div className="alert alert-warning">

                            No Stores Found

                        </div>

                    )
                }

                <div className="row">

                    {
                        filteredStores.map(
                            (store) => (

                                <div
                                    className="col-md-4 mb-4"
                                    key={
                                        store.store_id
                                    }
                                >

                                    <StoreCard
                                        store={store}
                                    />

                                </div>

                            )
                        )
                    }

                </div>

            </div>
        </>

    );
}

export default StoreList;