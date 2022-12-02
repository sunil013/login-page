import {useState} from 'react'
import {Link} from 'react-router-dom'
import {HiMail} from 'react-icons/hi'
import {MdVpnKey} from 'react-icons/md'
import './index.css'

const SignIn = () => {
  const [mail, setMail] = useState('')
  const [showPass, changeShow] = useState(false)
  const [password, setPassword] = useState('')
  const onChangeShow = () => changeShow(prevVal => !prevVal)
  const onChangeMail = event => setMail(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)
  const onClickSignIn = event => {
    event.preventDefault()
  }
  return (
    <div className="sign-page">
      <form className="form-section" onSubmit={onClickSignIn}>
        <h1 className="sign-in-heading">Sign in</h1>
        <p className="login-message">Login to manage your account</p>
        <div className="input-box">
          <HiMail className="icons" />
          <input
            type="email"
            className="user-input"
            value={mail}
            onChange={onChangeMail}
          />
        </div>
        <div className="input-box">
          <MdVpnKey className="icons" />
          <input
            type={showPass ? 'text' : 'password'}
            className="user-input"
            value={password}
            onChange={onChangePassword}
          />
          <button type="button" onClick={onChangeShow} className="show-button">
            {showPass ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="label-box-text">
          <input type="checkbox" id="remember" className="check-box" />
          <label htmlFor="remember" className="label-text">
            Remember me
          </label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign in
        </button>
      </form>
      <p className="sign-up-msg">
        Don't have an account?{' '}
        <Link to="/signUp" className="link">
          <span className="sign-forgot">Sign up</span>
        </Link>
      </p>
      <Link to="/reset" className="link">
        <p className="sign-forgot">Forgot password?</p>
      </Link>
    </div>
  )
}

export default SignIn
