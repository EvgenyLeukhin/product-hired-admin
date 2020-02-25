import React, { Component } from "react";
import { Input, Alert } from "reactstrap";
import PropTypes from "prop-types";
import cln from 'classnames';

import Spinner from '../../components/Spinner';
import FormValidator from "../Forms/Validator.js";

import login from '../../ph-admin/api/logIn';


import "../Forms/Material.scss";

class Login extends Component {
  state = {
    formLogin: { email: '', password: '' },
    loading: false,
    error: false,
    errorRights: false,
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
      [form.name]: { ...this.state[form.name], errors },
      error: false,
      errorRights: false,
      success: false
    });

    console.log(hasError ? "Form has errors. Check!" : "Form Submitted!");
    e.preventDefault();
    const { email, password } = this.state.formLogin;

    login(email, password)
      .then(this.setState({ loading: true }))

      .then(res => {
        const { roles } = res.user;

        roles.length ? roles.map(i => {

          // have admin rigts
          if (i.name === 'admin') {
            // save userData to localStorage, convert object to string
            localStorage.setItem('ph-admin-user-data', JSON.stringify(res));
            this.setState({ loading: false, success: true });

            // redirect to /companies and reload
            setTimeout(() => {
              const { history } = this.props;
              history.push('/companies');
              // window.location.reload(); // fix problem with getCount after login

            }, 1000);

          // don't have admin rigts
          } else this.setState({ errorRights: true, loading: false })
        }) : this.setState({ errorRights: true, loading: false });
      })

      // if login not ok
      .catch(() => this.setState({ error: true, loading: false }));
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
    const { success, error, errorRights, loading } = this.state;

    return (
      <div className="container-full">
        { success     && <Alert color="success">Success</Alert> }
        { error       && <Alert color="danger">Wrong email or password</Alert> }
        { errorRights && <Alert color="danger">You don't have admin rights</Alert> }

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
              disabled={ !email || !password }
              className="btn btn-primary btn-flat"
              style={{ display: 'flex', justifyContent: 'center' }}
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
