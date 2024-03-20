import React, { useState } from 'react';
import './login.css';
import { BsEnvelopeCheck } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TbLockCog } from "react-icons/tb";
import blank from '../assets/R.png'


const Login = () => {

  const [isLogin, setLogin] = useState(true)
  const [avatar, setAvatar] = useState(null);

  const toggleLogin = (e) => {
    e.preventDefault();
    setLogin((prev) => !prev)
  }
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

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
            placeholder="Email"
            required
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className='loginPass'>
          <IoLockClosedOutline/>
          <input
            type="text"
            placeholder="Password"
            required
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          </div>

          <div className='button'>
            <button>Login</button>
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
            placeholder="Email"
            required
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className='loginEmail'>
          <IoLockClosedOutline/>
          <input
            type="text"
            placeholder="Email"
            required
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <div className='loginPass'>
          <IoLockClosedOutline/>
          <input
            type="text"
            placeholder="Password"
            required
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          </div>

          <div className='button' style={{paddingTop: '40px'}}>
            <button>Registers</button>
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
