import React, { useState } from 'react';
import './login.css';
// import { BsEnvelopeCheck } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TbTextCaption, TbTypography } from "react-icons/tb";
import blank from '../assets/R.png'
import {useInputValidation} from '6pp'
import { usernameValidator } from '../utils/validator';


const Login = () => {

  const [isLogin, setLogin] = useState(true)
  const [avatar, setAvatar] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState('');

  const toggleLogin = (e) => {
    e.preventDefault();
    setLogin((prev) => !prev)
  }
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  const name = useInputValidation('')
  const bio = useInputValidation('')
  const username = useInputValidation('', usernameValidator)
  const password= useInputValidation('')

  return (
    <div id='section' >
      <div className='container'>
        <div className='login_container'>
            <form className='loginform'>
          {isLogin ? (
            <>
          <h1>Login</h1>
          <div className='line'></div>
          <div className='loginUser'>
          <FaRegUser/>
          <input
            type="text"
            placeholder="Username"
            required
            value={username.value}
            onChange={username.changeHandler}
          />
          {username.error && (
            <TbTypography color='error' fontVariant={TbTextCaption}>
              {username.error}
            </TbTypography>
          )}
          </div>
          <div className='loginPass'>
          <IoLockClosedOutline/>
          <input
            type="text"
            placeholder="Password"
            required
            value={password.value}
            onChange={password.changeHandler}
          />
          </div>

          <div className='button'>
            <button>{isSubmitted ? 'Log in ✓' : 'Log in...'}</button>
          </div>
          <div className='line'></div>
          <h3>create account</h3>
          <div className='button'>
            <button  onClick={toggleLogin}>Register</button>
          </div>
          </>
          ) : (
            <>
            <h1>Register</h1>
            <div className='line'></div>
            <div className='avatarSelection'>
                  <div className='avatarPreview'>
                    <img src={avatar ? URL.createObjectURL(avatar) : blank} alt="Avatar" />
                  </div>
                  <input
                  id='avatar'
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                  <label htmlFor="avatar">Upload Avatar</label>
                </div>
          <div className='loginUser'>
          <FaRegUser/>
          <input
            type="text"
            placeholder="Name"
            required
            value={name.value}
            onChange={name.changeHandler}
          />
          </div>
          <div className='loginEmail'>
          <IoLockClosedOutline/>
          <input
            type="text"
            placeholder="Bio"
            required
            value={bio.value}
            onChange={bio.changeHandler}
          />
          </div>
          <div className='loginPass'>
          <IoLockClosedOutline/>
          <input
            type="text"
            placeholder="Username"
            required
            value={username.value}
            onChange={username.changeHandler}
          />
          </div>
          <div className='loginPass'>
          <IoLockClosedOutline/>
          <input
            type="text"
            placeholder="Password"
            required
            value={password.value}
            onChange={password.changeHandler}
          />
          </div>

          <div className='button' style={{paddingTop: '40px'}}>
            <button>{isSubmitted ? 'Registered ✓' : 'Register...'}</button>
          </div>
          <div className='line'></div>
          <h3>Already have account?</h3>
          <div className='button' >
            <button onClick={toggleLogin}>Login</button>
          </div>
          </>
          )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
