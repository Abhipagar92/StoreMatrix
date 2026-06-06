import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../services/auth";

function Register() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleRegister = async () => {

        try {

            if (
                !formData.name ||
                !formData.email ||
                !formData.password ||
                !formData.address
            ) {

                alert("Please fill all fields");
                return;

            }

            setLoading(true);

            const result =
                await registerUser(formData);

            alert(result.message);

            setFormData({
                name: "",
                email: "",
                password: "",
                address: ""
            });

            navigate("/");

        } catch (error) {

            alert(
                error?.response?.data?.message ||
                "Registration Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            StoreMatrix Register
                        </h2>

                        <div className="mb-3">

                            <label className="form-label">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Address
                            </label>

                            <textarea
                                name="address"
                                className="form-control"
                                rows="3"
                                placeholder="Enter Address"
                                value={formData.address}
                                onChange={handleChange}
                            />

                        </div>

                        <button
                            className="btn btn-success w-100"
                            onClick={handleRegister}
                            disabled={loading}
                        >
                            {
                                loading
                                    ? "Registering..."
                                    : "Register"
                            }
                        </button>

                        <p className="text-center mt-3 mb-0">

                            Already have an account?{" "}

                            <Link to="/">
                                Login
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Register;

