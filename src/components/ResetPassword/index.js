import {useState} from 'react'
import {Link} from 'react-router-dom'
import {HiMail} from 'react-icons/hi'
import {BsArrowLeftShort} from 'react-icons/bs'
import './index.css'

const ResetPassword = () => {
  const [mail, setMail] = useState('')
  const onChangeMail = event => setMail(event.target.value)
  const onClickReset = event => {
    event.preventDefault()
  }
  return (
    <div className="sign-page">
      <Link to="/signIn">
        <div className="back-container">
          <BsArrowLeftShort className="back-arrow" />
          <p className="back-text">Back To Main</p>
        </div>
      </Link>
      <form className="form-reset-section" onSubmit={onClickReset}>
        <img
          src="https://res.cloudinary.com/sunil013/image/upload/v1669982040/forgot-password-icon-18350_ucrbfk.png"
          alt="reset"
          className="image-password"
        />
        <h1 className="forgot-pass-heading">Forgot password?</h1>
        <p className="login-message">
          Please enter your registered email address we'll send instructions to
          help reset your password
        </p>
        <div className="input-box">
          <HiMail className="icons" />
          <input
            type="email"
            className="user-input"
            value={mail}
            onChange={onChangeMail}
          />
        </div>
        <button className="sign-in-button" type="button">
          Send reset instructions
        </button>
      </form>
    </div>
  )
}

export default ResetPassword
