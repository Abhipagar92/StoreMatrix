import { useState } from "react";

function Login() {

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            StoreMatrix
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
                        >
                            Login
                        </button>

                        
                        <p className="text-center mt-3">
                            Don't have an account?

                            <a href="/register">
                                Register
                            </a>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;