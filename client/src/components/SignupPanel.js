import React from 'react'
import { Link } from 'react-router-dom'

function SignupPanel() {
  return (
    <>
        <div className='panel left-panel'>
            <div className='content'>
                <h3> Already a member? </h3>
                <p>
                    Sign in to continue your learning journey!
                </p>
                <Link to={'/signin'}>
                    <button className='btn transparent' id='sign-in-btn'>
                        Login
                    </button>
                </Link>
            </div>

            {/* <img src={'./img/Picture1.png'} className='image' alt='' /> */}
        </div>
    </>
  )
}

export default SignupPanel