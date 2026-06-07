import Layout from "../../components/common/Layout";

function MyRatings() {

    return (

        <Layout>

            <div className="container">

                <h2 className="mb-4">
                    My Ratings
                </h2>

                <div className="card shadow">

                    <div className="card-body">

                        <table className="table">

                            <thead>

                                <tr>

                                    <th>Store</th>
                                    <th>Rating</th>
                                    <th>Date</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Fresh Mart</td>

                                    <td>⭐⭐⭐⭐⭐</td>

                                    <td>Today</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default MyRatings;