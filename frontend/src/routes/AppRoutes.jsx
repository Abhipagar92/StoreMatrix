import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/Users";
import Stores from "../pages/admin/Stores";
import CreateStoreOwner from "../pages/admin/CreateStoreOwner";
import CreateStore from "../pages/admin/CreateStore";

import StoreOwnerDashboard from "../pages/owner/StoreOwnerDashboard";
import RatingsReviews from "../pages/owner/RatingsReviews";

import StoreList from "../pages/user/StoreList";
import StoreDetails from "../pages/user/StoreDetails";

import Profile from "../pages/profile/Profile";
import ChangePassword from "../pages/profile/ChangePassword";

import NotFound from "../pages/common/NotFound";

import ProtectedRoute from "../components/common/ProtectedRoute";

function DashboardRedirect() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    if (!user) {

        return (
            <Navigate
                to="/"
                replace
            />
        );

    }

    switch (user.role) {

        case "ADMIN":

            return (
                <Navigate
                    to="/admin/dashboard"
                    replace
                />
            );

        case "STORE_OWNER":

            return (
                <Navigate
                    to="/owner/dashboard"
                    replace
                />
            );

        case "NORMAL_USER":

            return (
                <Navigate
                    to="/stores"
                    replace
                />
            );

        default:

            return (
                <Navigate
                    to="/"
                    replace
                />
            );

    }

}

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <DashboardRedirect />
                    }
                />

                {/* Admin Routes */}

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
                    path="/admin/users"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "ADMIN"
                            ]}
                        >
                            <Users />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/stores"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "ADMIN"
                            ]}
                        >
                            <Stores />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/store-owner"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "ADMIN"
                            ]}
                        >
                            <CreateStoreOwner />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/store"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "ADMIN"
                            ]}
                        >
                            <CreateStore />
                        </ProtectedRoute>
                    }
                />

                {/* Store Owner Routes */}

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
                    path="/owner/ratings"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "STORE_OWNER"
                            ]}
                        >
                            <RatingsReviews />
                        </ProtectedRoute>
                    }
                />

                {/* Normal User Routes */}

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
                    path="/stores/:id"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "NORMAL_USER"
                            ]}
                        >
                            <StoreDetails />
                        </ProtectedRoute>
                    }
                />

                {/* Common Routes */}

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "ADMIN",
                                "STORE_OWNER",
                                "NORMAL_USER"
                            ]}
                        >
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/change-password"
                    element={
                        <ProtectedRoute
                            allowedRoles={[
                                "ADMIN",
                                "STORE_OWNER",
                                "NORMAL_USER"
                            ]}
                        >
                            <ChangePassword />
                        </ProtectedRoute>
                    }
                />

                {/* Error Routes */}

                <Route
                    path="/not-found"
                    element={
                        <NotFound />
                    }
                />

                <Route
                    path="*"
                    element={
                        <NotFound />
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;