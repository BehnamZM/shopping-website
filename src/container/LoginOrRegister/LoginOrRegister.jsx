import React from 'react'
import './LoginOrRegister.css'
import TitleStyle from '../../components/TitleStyle/TitleStyle'
import ButtonStyle from '../../components/ButtonStyle/ButtonStyle'
import Input from '../../components/Input/Input'
function LoginOrRegister() {
  return (
    <>
      <div className="login-register">
        <div className="login-title">
          <TitleStyle>صفحه ورود و ثبت نام</TitleStyle>
        </div>
        <div className="login-register-body container">

          {/* login part */}

          <div className="login-part auth-part">
            <h4>ورود</h4>
            <label>آدرس ایمیل
              <Input type="email" placeholder='ایمیل خود را وارد کنید' />
            </label>
            <label>رمز عبور
              <Input type="password" placeholder='رمز عبور شما' />
            </label>

            <div className="login-massages">
              <p className="forget-password-massage">آیا رمز خود را فراموش کرده اید؟</p>
              <label className="remember-checkbox">
                مرا به خاطر بسپار
                <Input type="checkbox" />
              </label>
            </div>
            <ButtonStyle>
              ورود
            </ButtonStyle>

          </div>


          {/* register part */}

          <div className="register-part auth-part">
            <h4>ثبت نام</h4>
            <div className="register-name-part">
              <label>نام
                <Input type="text" placeholder='نام خود را وارد کنید' />
              </label>
              <label>نام خانوادگی
                <Input type="text" placeholder='نام خانوادگی خود را وارد کنید' />
              </label>
            </div>
            <label>آدرس ایمیل
              <Input type="email" placeholder='ایمیل خود را وارد کنید' />
            </label>

            <div className="register-password-part">
              <label>رمز عبور
                <Input type="password" placeholder='رمز عبور شما' />
              </label>
              <label>تکرار رمز عبور
                <Input type="password" placeholder='تکرار رمز عبور' />
              </label>
            </div>
            <ButtonStyle>
              ثبت نام
            </ButtonStyle>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginOrRegister