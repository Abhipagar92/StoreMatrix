function EmptyState({
    title,
    message
}) {

    return (

        <div className="text-center py-5">

            <i
                className="bi bi-search"
                style={{
                    fontSize: "80px"
                }}
            ></i>

            <h3 className="mt-3">
                {title}
            </h3>

            <p>
                {message}
            </p>

        </div>

    );

}

export default EmptyState;