function LogoutModal({
    show,
    onClose,
    onConfirm
}) {

    if (!show) return null;

    return (

        <div
            className="modal d-block"
            style={{
                background: "rgba(0,0,0,.5)"
            }}
        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-body text-center p-5">

                        <h3>
                            Logout
                        </h3>

                        <p>
                            Are you sure you want to logout?
                        </p>

                        <button
                            className="btn btn-secondary me-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={onConfirm}
                        >
                            Logout
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default LogoutModal;