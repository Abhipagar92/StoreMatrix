import { Link } from "react-router-dom";

function StoreCard({ store }) {

    return (

        <div className="card shadow h-100">

            <div className="card-body">

                <h5>
                    {store.name}
                </h5>

                <p>
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