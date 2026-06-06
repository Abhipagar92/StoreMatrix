import { useEffect, useState } from "react";

import StoreCard from "../../components/store/StoreCard";

import {  getStores } from "../../services/store";

function StoreList() {

    const [stores, setStores] =
        useState([]);

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

            alert(
                "Failed to Load Stores"
            );

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Available Stores
            </h2>

            <div className="row">

                {
                    stores.map(
                        (store) => (

                            <div
                                className="col-md-4 mb-4"
                                key={store.store_id}
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

    );
}

export default StoreList;