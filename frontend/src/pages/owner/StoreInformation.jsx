import Layout from "../../components/common/Layout";

function StoreInformation() {

    return (

        <Layout>

            <div className="container-fluid">

                <div className="card shadow border-0">

                    <div className="card-body p-4">

                        <h3>
                            Store Information
                        </h3>

                        <p className="text-muted">
                            View and manage your store details
                        </p>

                        <hr />

                        <div className="row">

                            <div className="col-md-4">

                                <img
                                    src="https://via.placeholder.com/300"
                                    className="img-fluid rounded"
                                    alt="store"
                                />

                            </div>

                            <div className="col-md-8">

                                <table className="table">

                                    <tbody>

                                        <tr>
                                            <th>Name</th>
                                            <td>Fresh Mart</td>
                                        </tr>

                                        <tr>
                                            <th>Email</th>
                                            <td>freshmart@gmail.com</td>
                                        </tr>

                                        <tr>
                                            <th>Address</th>
                                            <td>Pune</td>
                                        </tr>

                                        <tr>
                                            <th>Status</th>
                                            <td>
                                                <span className="badge bg-success">
                                                    Active
                                                </span>
                                            </td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default StoreInformation;