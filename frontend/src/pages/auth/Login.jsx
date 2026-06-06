import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser} from "../../services/auth";
import {saveToken,saveUser} from "../../utils/storage";
import {AuthContext } from "../../context/AuthContext";

function Login() {

    const navigate =  useNavigate();
    const { setUser } =  useContext(AuthContext);
    const [loading, setLoading] =  useState(false);
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");

    const handleLogin =
        async () => {

            try {

                if (
                    !email ||
                    !password
                ) {

                    alert(
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

                alert(
                    result.message
                );

                if (
                    result.user.role ===
                    "ADMIN"
                ) {

                    navigate(
                        "/admin/dashboard"
                    );

                }
                else if (
                    result.user.role ===
                    "STORE_OWNER"
                ) {

                    navigate(
                        "/owner/dashboard"
                    );

                }
                else {

                    navigate(
                        "/stores"
                    );

                }

            } catch (error) {

                alert(
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

                <div className="col-md-4">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            StoreMatrix Login
                        </h2>

                        <div className="mb-3">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                        <div className="mb-3">

                            <label>
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
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

                        <p className="text-center mt-3">

                            Don't have an account?{" "}

                            <Link
                                to="/register"
                            >
                                Register
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;