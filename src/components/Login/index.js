import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  MainContainer,
  FormContainer,
  Logo,
  InputContainer,
  LoginButton,
  SubmitError,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMessage: '',
  }

  onChangeInput = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      path: '/',
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showError: true, errorMessage})
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

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="username">USERNAME</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeInput}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          type={inputType}
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangeInput}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainContainer>
        <FormContainer onSubmit={this.submitForm}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsername()}</InputContainer>
          <InputContainer>{this.renderPassword()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showError && <SubmitError>*{errorMessage}</SubmitError>}
        </FormContainer>
      </MainContainer>
    )
  }
}

export default Login
