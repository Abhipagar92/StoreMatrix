import { Link } from "react-router-dom";

function StoreCard({ store }) {

    return (

        <div className="card shadow h-100 border-0">

            <div className="card-body">

                <h5 className="card-title fw-bold">

                    {store.name}

                </h5>

                <p className="text-muted mb-3">

                    {store.address}

                </p>

                <div className="mb-3">

                    <span className="text-warning fw-bold">

                        ⭐ {store.averageRating}

                    </span>

                    <small className="text-muted ms-2">

                        (
                        {store.totalRatings}
                        {" "}
                        Rating
                        {store.totalRatings !== 1 ? "s" : ""}
                        )

                    </small>

                </div>

                <Link
                    to={`/stores/${store.store_id}`}
                    className="btn btn-primary"
                >
                    View Details
                </Link>

            </div>

        </div>

    );

}

export default StoreCard;