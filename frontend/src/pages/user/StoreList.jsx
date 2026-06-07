import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Header from "../../components/common/Header";
import Loader from "../../components/common/Loader";
import StoreCard from "../../components/store/StoreCard";

import { getStores } from "../../services/store";

function StoreList() {

    const [stores, setStores] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

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

            toast.error(
                "Failed to Load Stores"
            );

        } finally {

            setLoading(false);

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

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>
                        Available Stores
                    </h2>

                </div>

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
                    filteredStores.length === 0 ? (

                        <div className="alert alert-warning">

                            No Stores Found

                        </div>

                    ) : (

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

                    )
                }

            </div>

        </>

    );
}

export default StoreList;