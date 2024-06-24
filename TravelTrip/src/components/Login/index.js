import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <div>
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
        </div>
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
          <button
            type="button"
            className="toggle-password-button"
            onClick={this.toggleShowPassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <div>
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
        </div>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <h1>Travel Trip</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
