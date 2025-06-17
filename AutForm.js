import react, { useState } from 'react'
export default function AuthForm(){
    const[isLogin, setIsLogin]= useState(true);
    return(
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>login</button>
                    <button className={!isLogin ? 'active':""} onClick={() => setIsLogin(false)}>sign up</button>
                </div>
                {isLogin? <>
                <div className='form'>
                    <h2>Login Form</h2>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <a href='#'>Forgot password</a>
                    <button>Login</button>
                    <p>Not a member?<a href='#' onClick={()=> setIsLogin(false)}>Sign up now</a></p>
                    </div></> :<>
                    <div className='form'>
                      <h2>Sign up</h2>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                     <input type='password' placeholder=' confirm Password'/>
                     <button>Sign up</button>
                   </div>
                    </>}
            </div>
            
            
            </div>
    )
}