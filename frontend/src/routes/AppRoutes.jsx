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

import Stores from "../pages/admin/Stores";

import CreateStoreOwner from "../pages/admin/CreateStoreOwner";

import CreateStore from "../pages/admin/CreateStore";

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

                <Route
                    path="/admin/stores"
                    element={
                        <ProtectedRoute
                            allowedRoles={["ADMIN"]}
                        >
                            <Stores />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/store-owner"
                    element={
                        <ProtectedRoute
                            allowedRoles={["ADMIN"]}
                        >
                            <CreateStoreOwner />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/store"
                    element={
                        <ProtectedRoute
                            allowedRoles={["ADMIN"]}
                        >
                            <CreateStore />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );
}

export default AppRoutes;