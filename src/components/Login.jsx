import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./../css/Login.css";
import fire from "./../config/fire";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            remember: false,
            isLogginSuccess: false
        };
    }

    componentDidUpdate(prevProps, prevState){
        if (!prevState.isLogginSuccess && this.state.isLogginSuccess !== prevState.isLogginSuccess) {
            this.props.history.push('/home')
        }
    }

    componentDidMount() {
        this.authListener();
    };

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLogginSuccess: true })
            } else {
                this.setState({ isLogginSuccess: false });
            }
        });
    }

    onChange = async (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.name === "remember" ? target.checked : target.value;
        await this.setState({
            [name]: value,
        });
        // console.log(this.state);
    };
    onHandleSubmit = (e) => {
        e.preventDefault();
        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log('Đăng nhập thành công', user.email);
                this.props.history.push('/home')
                // if(user.email){
                //     <Redirect to="/Home"/>
                // }
                // ...
            })
            .catch((error) => {
                console.log('Đăng nhập thất bại');
                // var errorCode = error.code;
                // var errorMessage = error.message;
            });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Sign In
                                </h5>
                                <form
                                    className="form-signin"
                                    onSubmit={this.onHandleSubmit}
                                >
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

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            value={this.state.value}
                                            className="custom-control-input"
                                            id="customCheck1"
                                            onChange={this.onChange}
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="customCheck1"
                                        >
                                            Remember password
                                        </label>
                                    </div>

                                        <button
                                            className="btn btn-lg btn-primary btn-block text-uppercase"
                                            type="submit"
                                        >
                                            Sign in
                                        </button>

                                    <Link
                                        to="/Register"
                                        className="d-block text-center mt-20 small"
                                    >
                                        Register Now
                                    </Link>
                                    <hr className="my-4" />
                                    <button
                                        className="btn btn-lg btn-google btn-block text-uppercase"
                                        type="submit"
                                    >
                                        <i className="fab fa-google mr-2"></i>{" "}
                                        Sign in with Google
                                    </button>
                                    <button
                                        className="btn btn-lg btn-facebook btn-block text-uppercase"
                                        type="submit"
                                    >
                                        <i className="fab fa-facebook-f mr-2"></i>{" "}
                                        Sign in with Facebook
                                    </button>
                                </form>
                            </div>
                        </div>
                        <lottie-player
                            src="https://assets4.lottiefiles.com/animated_stickers/lf_tgs_mmszpbcv.json"
                            background="transparent"
                            speed="1"
                            class=" customAnimation"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
