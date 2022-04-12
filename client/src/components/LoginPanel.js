import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../assets/css/signin-style.module.css'

function LoginPanel() {
  return (
    <>
        <div className={`${styles.panel} ${styles.leftPanel}`}>
            <div className={`${styles.content}`}>
                <h3>Interested? <br />
                Sign Up with Us! </h3>
                <p>
                    A new journey of self-learning is about to begin!

                </p>
                <Link to={'/signup'}>
                    <button className={`${styles.btn} ${styles.transparent}`} id='sign-up-btn'>
                        Sign Up
                    </button>
                </Link>
            </div>
            <img src={'./img/Picture2.png'} className={`${styles.image}`} alt={''} />
        </div>
    </>
  )
}

export default LoginPanel