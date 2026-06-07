import Layout from "../../components/common/Layout";

function Notifications() {

    return (

        <Layout>

            <div className="container-fluid">

                <h3>
                    Notifications
                </h3>

                <div className="list-group">

                    <div className="list-group-item">

                        ⭐ New Rating Received

                    </div>

                    <div className="list-group-item">

                        👤 New User Reviewed Your Store

                    </div>

                </div>

            </div>

        </Layout>

    );

}

export default Notifications;