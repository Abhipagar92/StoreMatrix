import { Link } from "react-router-dom";

function StoreCard({ store }) {

    return (

        <div className="card shadow h-100">

            <div className="card-body">

                <h5 className="card-title">
                    {store.name}
                </h5>

                <p className="card-text">
                    {store.address}
                </p>

                <p>
                    ⭐ {store.averageRating}
                </p>

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