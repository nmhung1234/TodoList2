import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import fire from './config/fire';
import Home from './components/Home';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    UNSAFE_componentDidMount() {
        this.authListener();
    };

    authListener(){

        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
                console.log("onAuth");
            } else {
                this.setState({ user: null });
                console.log("null user");
            }
        });
    }

    render() {
        let { user } = this.state;
        console.log(user);
        if (user !== null) {
            <Redirect to="/Home" />
        }
        return (
            <Router>
                <Switch>
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Home" component={Home} />
                    <Route component={Login} />
                </Switch>
            </Router>
        )
    }
}



export default App