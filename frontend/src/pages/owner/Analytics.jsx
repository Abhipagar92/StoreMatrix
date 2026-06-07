import Layout from "../../components/common/Layout";

function Analytics() {

    return (

        <Layout>

            <div className="container-fluid">

                <h3>
                    Analytics
                </h3>

                <div className="row">

                    <div className="col-md-3">

                        <div className="card shadow">

                            <div className="card-body">

                                <h5>

                                    Average Rating

                                </h5>

                                <h2>

                                    ⭐ 4.5

                                </h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card shadow">

                            <div className="card-body">

                                <h5>

                                    Total Ratings

                                </h5>

                                <h2>

                                    120

                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default Analytics;