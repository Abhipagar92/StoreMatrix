import Layout from "../../components/common/Layout";

function Reviewers() {

    return (

        <Layout>

            <div className="container-fluid">

                <h3>
                    Users / Reviewers
                </h3>

                <div className="card shadow">

                    <div className="card-body">

                        <table className="table">

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>John</td>
                                    <td>john@gmail.com</td>
                                    <td>⭐⭐⭐⭐⭐</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default Reviewers;