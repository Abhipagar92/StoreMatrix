import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { loginUser } from "../../services/auth";

import {
    saveToken,
    saveUser
} from "../../utils/storage";

import {
    AuthContext
} from "../../context/AuthContext";

function Login() {

    const navigate =
        useNavigate();

    const { setUser } =
        useContext(AuthContext);

    const [loading, setLoading] =
        useState(false);

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleKeyPress = (e) => {

        if (e.key === "Enter") {

            handleLogin();

        }

    };

    const handleLogin = async () => {

        try {

            if (
                !email.trim() ||
                !password.trim()
            ) {

                toast.warning(
                    "Please fill all fields"
                );

                return;

            }

            setLoading(true);

            const result =
                await loginUser(
                    email,
                    password
                );

            saveToken(
                result.token
            );

            saveUser(
                result.user
            );

            setUser(
                result.user
            );

            toast.success(
                result.message
            );

            setTimeout(() => {

                navigate(
                    "/dashboard"
                );

            }, 1000);

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Login Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-lg-4 col-md-6">

                    <div className="card shadow border-0">

                        <div className="card-body p-4">

                            <div className="text-center mb-4">

                                <h2 className="fw-bold text-primary">

                                    StoreMatrix

                                </h2>

                                <p className="text-muted">

                                    Sign in to continue

                                </p>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Email

                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                    onKeyDown={
                                        handleKeyPress
                                    }
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Password

                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    onKeyDown={
                                        handleKeyPress
                                    }
                                />

                            </div>

                            <button
                                className="btn btn-primary w-100"
                                onClick={handleLogin}
                                disabled={loading}
                            >

                                {
                                    loading
                                        ? "Logging in..."
                                        : "Login"
                                }

                            </button>

                            <p className="text-center mt-3 mb-0">

                                Don't have an account?{" "}

                                <Link to="/register">

                                    Register

                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;