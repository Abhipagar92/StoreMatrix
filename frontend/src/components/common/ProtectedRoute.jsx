import { Navigate } from "react-router-dom";

import { getUser } from "../../utils/storage";

function ProtectedRoute({
    children,
    allowedRoles
}) {

    const user = getUser();

    if (!user) {
        return <Navigate to="/" />;
    }

    if (
        allowedRoles &&
        !allowedRoles.includes(user.role)
    ) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;