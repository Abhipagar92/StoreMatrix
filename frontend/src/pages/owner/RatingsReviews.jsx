import Layout from "../../components/common/Layout";

function RatingsReviews() {

    const reviews = [
        {
            user: "John",
            rating: 5,
            review: "Excellent Store"
        },
        {
            user: "Rahul",
            rating: 4,
            review: "Good Products"
        }
    ];

    return (

        <Layout>

            <div className="container-fluid">

                <h3 className="mb-4">

                    Ratings & Reviews

                </h3>

                <div className="card shadow">

                    <div className="card-body">

                        <table className="table">

                            <thead>

                                <tr>

                                    <th>User</th>
                                    <th>Rating</th>
                                    <th>Review</th>

                                </tr>

                            </thead>

                            <tbody>

                                {
                                    reviews.map(
                                        (
                                            item,
                                            index
                                        ) => (

                                            <tr
                                                key={index}
                                            >

                                                <td>
                                                    {
                                                        item.user
                                                    }
                                                </td>

                                                <td>

                                                    ⭐ {
                                                        item.rating
                                                    }

                                                </td>

                                                <td>

                                                    {
                                                        item.review
                                                    }

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

        </Layout>

    );

}

export default RatingsReviews;