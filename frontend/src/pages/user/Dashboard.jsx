import Layout from "../../components/common/Layout";

function Dashboard() {

    return (

        <Layout>

            <div className="container-fluid">

                <h2 className="mb-4">
                    Dashboard
                </h2>

                <div className="row">

                    <div className="col-md-4 mb-3">

                        <div className="card shadow border-0">

                            <div className="card-body">

                                <h6>Total Stores</h6>

                                <h2>25</h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="card shadow border-0">

                            <div className="card-body">

                                <h6>Ratings Given</h6>

                                <h2>12</h2>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="card shadow border-0">

                            <div className="card-body">

                                <h6>Average Rating</h6>

                                <h2>4.5 ⭐</h2>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default Dashboard;