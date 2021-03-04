import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../css/Register.css";
import fire from "./../config/fire";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            cfpassword: "",
        };
    }
    onChange = async (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        await this.setState({
            [name]: value,
        });
    };
    onHandleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.cfpassword) {
            alert("Password not match!");
        } else {
            fire.auth()
                .createUserWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                )
                .then((userCredential) => {
                    // Signed in
                    var user = fire.auth().currentUser;
                    user.updateProfile({
                        displayName: this.state.username,
                    });
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // ..
                });
        }
        // this.props.user(this.state);
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-img-left d-none d-md-flex">
                                {/* <!-- Background image for card set in CSS! --> */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Register
                                </h5>
                                <form
                                    className="form-signin"
                                    onSubmit={this.onHandleSubmit}
                                >
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            name="username"
                                            value={this.state.value}
                                            id="inputUserame"
                                            className="form-control"
                                            placeholder="Username"
                                            required
                                            onChange={this.onChange}
                                        />
                                        <label htmlFor="inputUserame">
                                            Username
                                        </label>
                                    </div>

                                    <div className="form-label-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={this.state.value}
                                            id="inputEmail"
                                            className="form-control"
                                            placeholder="Email address"
                                            required
                                            onChange={this.onChange}
                                        />
                                        <label htmlFor="inputEmail">
                                            Email address
                                        </label>
                                    </div>

                                    <hr />

                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            name="password"
                                            value={this.state.value}
                                            id="inputPassword"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                            onChange={this.onChange}
                                        />
                                        <label htmlFor="inputPassword">
                                            Password
                                        </label>
                                    </div>

                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            name="cfpassword"
                                            value={this.state.value}
                                            id="inputConfirmPassword"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            required
                                            onChange={this.onChange}
                                        />
                                        <label htmlFor="inputConfirmPassword">
                                            Confirm password
                                        </label>
                                    </div>

                                    <button
                                        className="btn btn-lg btn-primary btn-block text-uppercase"
                                        type="submit"
                                    >
                                        Register
                                    </button>

                                    <Link
                                        to="/Login"
                                        className="d-block text-center mt-2 small"
                                    >
                                        Sign In
                                    </Link>
                                    
                                    <hr className="my-4" />
                                    <button
                                        className="btn btn-lg btn-google btn-block text-uppercase"
                                        type="submit"
                                    >
                                        <i className="fab fa-google mr-2"></i>{" "}
                                        Sign up with Google
                                    </button>
                                    <button
                                        className="btn btn-lg btn-facebook btn-block text-uppercase"
                                        type="submit"
                                    >
                                        <i className="fab fa-facebook-f mr-2"></i>{" "}
                                        Sign up with Facebook
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
