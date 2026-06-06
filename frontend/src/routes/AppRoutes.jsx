import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Users from "../pages/admin/Users";

import AdminDashboard
    from "../pages/admin/AdminDashboard";

import StoreOwnerDashboard
    from "../pages/owner/StoreOwnerDashboard";

import StoreList
    from "../pages/user/StoreList";

import ProtectedRoute
    from "../components/common/ProtectedRoute";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "ADMIN"
                            ]}
                        >
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/owner/dashboard"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "STORE_OWNER"
                            ]}
                        >
                            <StoreOwnerDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/stores"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "NORMAL_USER"
                            ]}
                        >
                            <StoreList />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/users"
                    element={
                        <ProtectedRoute
                            allowedRoles={["ADMIN"]}
                        >
                            <Users />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );
}

export default AppRoutes;