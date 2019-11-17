import React, { Component } from "react";
import { Input, Alert } from "reactstrap";
import PropTypes from "prop-types";
import cln from 'classnames';
import axios from 'axios';

import Spinner from '../../components/Spinner';
import FormValidator from "../Forms/Validator.js";

import API_URL from '../../consts/apiUrl';

import "../Forms/Material.scss";

/**
 * Validation flow using controlled components
 *
 * 1- User type on input
 * 2- onChange event trigger validation
 * 3- Validate methods are listed using "data-validate"
 *    attribute. Content must be an array in json format.
 * 4- The validation returns an object with format {[input name]: status}
 *    where status is an array of boolean per each method
 * 5- Methods that requires an argument, read the 'data-param' attribute
 * 6- Similarly, onSubmit event does a bulk validation on all form elements
 */

class Login extends Component {
    state = {
        formLogin: {
            email: "",
            password: ""
        },
        loading: false,
        error: false,
        success: false
    };

    /**
     * Validate input using onChange event
     * @param  {String} formName The name of the form in the state object
     * @return {Function} a function used for the event
     */
    validateOnChange = event => {
        const input = event.target;
        const form = input.form;
        const value = input.type === "checkbox" ? input.checked : input.value;

        const result = FormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            },
            error: false,
            success: false
        });
    };

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i =>
            ["INPUT", "SELECT"].includes(i.nodeName)
        );

        const { errors, hasError } = FormValidator.bulkValidate(inputs);

        this.setState({
            [form.name]: { ...this.state[form.name], errors }
        });

        console.log(hasError ? "Form has errors. Check!" : "Form Submitted!");

        e.preventDefault();

        const { email, password } = this.state.formLogin;

        // login request
        axios.post(`${API_URL}/api/api/users/login`, { email, password })
            .then(this.setState({ loading: true }))

        // if login
        .then((res) => {
            this.setState({ success: true });
            const token = localStorage.getItem('ph-admin-token');

            // save tokken to localStorage
            if (!token) {
                localStorage.setItem('ph-admin-token', res.data.id);
                localStorage.setItem('ph-admin-id',    res.data.userId);
                localStorage.setItem('ph-admin-email', email);
            }

            setTimeout(() => {
                const { history } = this.props;
                history.push('/dashboard');
            }, 1000);
        })

        // if not login
        .catch(() => {
            this.setState({ error: true, loading: false });
        });
    };

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return (
            this.state[formName] &&
            this.state[formName].errors &&
            this.state[formName].errors[inputName] &&
            this.state[formName].errors[inputName][method]
        );
    };

    
    render() {
        const { email, password } = this.state.formLogin;
        const { success, error, loading } = this.state;

        return (
            <div className="container-full">
                { success && <Alert color="success">Success</Alert> }
                { error   && <Alert color="danger">Wrong email or password</Alert> }

                <div className={cln('container container-xs', { 'login-success': success })}>
                    <div className="text-center">
                        <img 
                            style={{ display: 'inline-flex', margin: '12vh 0  20px', width: '200px' }}
                            src="img/logo.svg" alt="Brand logo"
                        />
                    </div>

                    <form
                        className={cln('cardbox b0 form-validate', { error } )}
                        action=""
                        name="formLogin"
                        onSubmit={this.onSubmit}
                    >

                        <div className="cardbox-heading">
                            <div className="cardbox-title text-center">Login</div>
                        </div>
                        
                        <div className="cardbox-body">
                            <div className="mda-form-group float-label mda-input-group">
                                <div className="mda-form-control">
                                    <Input type="email" name="email"
                                        className={email && 'hasValue'}
                                        invalid={
                                            this.hasError( "formLogin", "email", "required") ||
                                            this.hasError( "formLogin", "email", "email" )
                                        }
                                        onChange={this.validateOnChange}
                                        data-validate='["required", "email"]'
                                        value={this.state.formLogin.email}
                                    />

                                    <div className="mda-form-control-line" />

                                    <label>Email address</label>
                                </div>

                                <span className={cln('mda-input-group-addon', { hasValue: email })}>
                                    <em className="ion-ios-email-outline icon-lg" />
                                </span>
                            </div>

                            <div className="mda-form-group float-label mda-input-group">
                                <div className="mda-form-control">
                                    <Input type="password" name="password"
                                        className={password && 'hasValue'}
                                        invalid={this.hasError("formLogin", "password", "required")}
                                        onChange={this.validateOnChange}
                                        data-validate='["required"]'
                                        value={this.state.formLogin.password}
                                    />
                                    <div className="mda-form-control-line" />
                                    <label>Password</label>
                                </div>
                                        
                                <span className={cln('mda-input-group-addon', { hasValue: password })}>
                                    <em className="ion-ios-locked-outline icon-lg" />
                                </span>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={!email || !password}
                            className="btn btn-primary btn-flat"
                            style={{ 
                                display: 'flex', 
                                justifyContent: 'center',
                            }}
                        >
                            { loading ? <Spinner /> : 'Authenticate' }
                        </button>
                    </form>

                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object
};

export default Login;
