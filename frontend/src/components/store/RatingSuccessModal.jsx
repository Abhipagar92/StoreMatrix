function RatingSuccessModal({
    show,
    onClose
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

                        <h1>
                            ✅
                        </h1>

                        <h3>
                            Rating Submitted
                        </h3>

                        <button
                            className="btn btn-primary mt-3"
                            onClick={onClose}
                        >
                            Continue
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default RatingSuccessModal;