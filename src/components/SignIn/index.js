import {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
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
      <form className="form" onSubmit={onClickSignIn}>
        <h1 className="sign-in-heading">Sign in</h1>
        <p className="login-message">Login to manage your account</p>
        <div className="input-box">
          <input
            type="email"
            className="user-input"
            value={mail}
            onChange={onChangeMail}
            placeholder="Email"
          />
          <HiMail className="icons" />
        </div>
        <div className="input-box">
          <input
            type={showPass ? 'text' : 'password'}
            className="user-input"
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
          />
          <MdVpnKey className="icons" />
          <button type="button" onClick={onChangeShow} className="show-button">
            {showPass ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="checkbox-password-container">
          <div className="label-box-text">
            <input type="checkbox" id="remember" className="check-box" />
            <label htmlFor="remember" className="label-text">
              Remember me
            </label>
          </div>
          <Link to="/reset" className="link">
            <p className="sign-forgot-link">Forgot password?</p>
          </Link>
        </div>
        <button className="sign-in-button" type="submit">
          Login
        </button>
        <p className="login-social-text">Or Login Using</p>
        <div className="social-icons-container">
          <a className="fb-icon icons-container">
            <FaFacebookF size={21} />
          </a>
          <a className="mail-icon icons-container">
            <SiGmail size={20} />
          </a>
          <a className="twitter-icon icons-container">
            <AiOutlineTwitter size={25} />
          </a>
        </div>
        <p className="sign-up-msg">
          Don't have an account?{' '}
          <Link to="/signUp" className="link">
            <span className="sign-forgot">Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn
