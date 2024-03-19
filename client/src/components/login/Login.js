import React, { useState } from 'react';
import './login.css';
import { BsEnvelopeCheck } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TbLockCog } from "react-icons/tb";


const Login = () => {

  const [isLogin, setLogin] = useState(true)

  const toggleLogin = () => setLogin(false)
  const toggleisLogin = () => setLogin(true)

  return (
    <div id='section' >
      <div className='container'>
        <div className='login_container'>
          {isLogin ? (
            <>
          <div className='login'>
            <h1>Login</h1>
          </div>
          <div className='line'></div>
          <div className='lower_input'>
            <div className='input_container'>
            <BsEnvelopeCheck />
            <h4>Email :</h4>
            <input type="text" className="input-field" placeholder="Enter your email" /> {/* Corrected class attribute */}
            </div>
            <div className='input_container2'>
            <IoLockClosedOutline />
            <h4 style={{'marginRight': '5px'}}>Password :</h4>
            <input style={{'marginLeft': '4px'}} type="text" className="input-field" placeholder="Enter your Password" /> {/* Corrected class attribute */}
          </div>
          </div>
          <button >Login</button>
          <div className='line'>create account</div>
          <button className='button' style={{marginTop: '10px'}} onClick={toggleLogin}>Register</button>
         
          </>
          ) : (
            <>
            <div className='login'>
            <h1>Register</h1>
          </div>
          <div className='line'></div>
          <div className='lower_input1'>
            <div className='input_container1'>
            <FaRegUser />
            <h4 style={{'marginRight': '5px'}}>Username :</h4>
            <input style={{'marginLeft': '4px'}} type="text" className="input-field" placeholder="Enter your username" /> {/* Corrected class attribute */}
            </div>
            <div className='input_container2'>
            <BsEnvelopeCheck />
            <h4>Email :</h4>
            <input type="text" className="input-field" placeholder="Enter your email" /> {/* Corrected class attribute */}
            </div>
            <div className='input_container2'>
            <IoLockClosedOutline />
            <h4 style={{'marginRight': '5px'}}>Password :</h4>
            <input style={{'marginLeft': '4px'}} type="text" className="input-field" placeholder="Enter your Password" /> {/* Corrected class attribute */}
          </div>
            <div className='input_container2'>
            <TbLockCog />
            <h4 style={{'marginRight': '5px'}}>Password :</h4>
            <input style={{'marginLeft': '4px'}} type="text" className="input-field" placeholder="confirm password" /> {/* Corrected class attribute */}
          </div>
          </div>
          <button onClick={toggleLogin}>Register</button>
          <div className='line'>Already have account?</div>
          <button className='button' style={{marginTop: '10px', marginBottom: '5px'}} onClick={toggleisLogin}>Login</button>
         
          </>
          )}
        
        </div>
      </div>
    </div>
  );
}

export default Login;
