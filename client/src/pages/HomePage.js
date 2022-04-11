import React from 'react';
import { HashLink, Link } from 'react-router-dom';
import '../assets/css/home-styles.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
        
             {/* HOME */} 
            <section className="home" id="home">
                <div className="home__container container grid">
                    <img src={"./img/home1.png"} alt={""} className="home__img" />

                    <div className="home__data">
                        <h1 className="home__title">
                            First 3D Animated Jiu-Jitsu Website
                        </h1>
                        <p className="home__description">
                            A flexible platform that will allow users to better understand, learn, 
                            and retain information from the wonderful art of Jiu-Jitsu.

                        </p>
                        <a href="#about" className="button button--flex">
                            Explore <i className="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>

                    <div className="home__social">
                        <span className="home__social-follow">Follow Us</span>

                        <div className="home__social-links">
                            <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="home__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

             {/* ABOUT */} 
            <section className="about section container" id="about">
                <div className="about__container grid">
                    <img src={"./img/home2.png"} alt={""} className="about__img" />

                    <div className="about__data">
                        <h2 className="section__title about__title">
                            Who we really are & <br /> why choose us
                        </h2>

                        <p className="about__description">
                            We are a group of five computer science students that passionate
                            about Jiu-Jitsu
                        </p>

                        <div className="about__details">
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                First 3D modeling and animations to allow linking of techniques in 
                                any combination to result in fluid visualization of any potential scenarios.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Give people the ability to learn Jiu-Jitsu online, without having to go 
                                to the training center in the COVID-19 pandemic as well as to supplement 
                                in-person training and aid in retention.
 
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Online self-paced learning platform.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                100% satisfaction guaranteed.
                            </p>
                        </div>

                        <a href="#about" className="button--link button--flex">
                            Sign Up Now <i className="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section className="steps section container">
                <div className="steps__bg">
                    <h2 className="section__title-center steps__title">
                        Steps to start your <br /> learning journey!
                    </h2>

                    <div className="steps__container grid">
                        <div className="steps__card">
                            <div className="steps__card-number">01</div>
                            <h3 className="steps__card-title">Sign up</h3>
                            <p className="steps__card-description">
                                Sign up an account with us to explore our website full features.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">02</div>
                            <h3 className="steps__card-title">Look up a technique</h3>
                            <p className="steps__card-description">
                                Once the account is set up, start your journey by searching for our basic techniques.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">03</div>
                            <h3 className="steps__card-title">Have fun learning!</h3>
                            <p className="steps__card-description">
                                Our learning process is self-paced and fun with a 100% Satisfaction guaranteed!
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* DISCLAIMER */}
            <section className="disclaimer section container" id="disclaimer">                
                <div className="disclaimer__container grid">
                    <div className="disclaimer__box">
                        <h2 className="section__title">
                            Disclaimer
                        </h2>

                        <div className="disclaimer__description">
                            <p className="disclaimer__description">
                                The materials on Jiu-Jitsu 3D Tutorials web site are provided “as is”. Jiu-Jitsu 3D Tutorials makes 
                                no warranties, expressed or implied, and hereby disclaims and negates all other 
                                warranties, including without limitation, implied warranties or conditions of 
                                merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                                property or other violation of rights. Further, Jiu-Jitsu 3D Tutorials does not warrant or make 
                                any representations concerning the accuracy, likely results, or reliability of the use 
                                of the materials on its Internet web site or otherwise relating to such materials or on 
                                any sites linked to this site.
                            </p>

                            <p className="disclaimer__description">
                                
                                Activities associated with Jiu-Jitsu 3D Tutorials can include the risk of injury, 
                                property damage, and other dangers associated with the contact sport. 
                                The animated tutorials are intended to be used as an educational resource when 
                                practicing and learning the sport of Jiu-Jitsu. This form of martial arts can be 
                                dangerous, and can and will cause injury if not practiced responsibly. The sport 
                                can be physically demanding and can cause exhaustion, refer to a physician before 
                                starting intense training. 
                            </p>

                            <p className="disclaimer__description">
                                Dangers associated with the activity can include but are not limited to, fractures, 
                                sprains, bruising, contusions, lacerations, and orthopedic injuries. In case of 
                                serious injury, Jiu-Jitsu 3D Tutorials advises seeking professional medical help 
                                immediately. This website does not and cannot recommend medical advice. 
                            </p>

                            <div className="disclaimer__description">
                                <p className="disclaimer__area">
                                    By practicing any tutorials or models on this website, you assume full responsibility 
                                for any injury or action that happens during the use of tutorials. If you do not agree 
                                to these conditions, please exit this website respectfully. 
                                </p>
                            </div>


                        </div>
                    </div>

                </div>
            </section>

            {/* QUESTIONS */}
            <section className="questions section" id="faqs">
                <h2 className="section__title-center questions__title container">
                    Some common questions <br /> were often asked
                </h2>

                <div className="questions__container container grid">
                    <div className="questions__group">
                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Is it completely free?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Yes! Our platform is 100% online and free.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    Does Jiu-Jitsu hard to learn?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Every sport is hard to learn, just be patient and you will master the art of Jiu-Jitsu.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="questions__group">
                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    How do I sign up?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    You can sign up using your email address.
                                </p>
                            </div>
                        </div>

                        <div className="questions__item">
                            <header className="questions__header">
                                <i className="ri-add-line questions__icon"></i>
                                <h3 className="questions__item-title">
                                    How can I reach your customer support?
                                </h3>
                            </header>

                            <div className="questions__content">
                                <p className="questions__description">
                                    Our team can be reached via email and phone.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            

        {/* FOOTER */}
        <section className="footer contact section container" id="contact">   
            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content">

                        <div className="footer__box">
                            <h2 className="section__title">
                                Questions? Concerns? Reach out to us today!
                            </h2>
                        </div>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Address</h3>

                        <ul className="footer__data">
                            <li className="footer__information">University of Central Florida</li>
                            <li className="footer__information">4000 Central Florida Blvd. </li>
                            <li className="footer__information">Orlando, FL 32816</li>
                        </ul>
                    </div>
                    
                    <div className="footer__content">
                        <h3 className="footer__title">Contact Us</h3>

                        <ul className="footer__data">
                            <div className="footer__information">
                                <span className="footer__information">
                                    <i className="ri-phone-line contact__icon"></i>
                                    +123 456 789
                                </span>
                            </div>

                            <div className="footer__information">
                                <span className="footer__information">
                                    <i className="ri-mail-line contact__icon"></i>
                                    jiujitsu3dtutorials@gmail.com
                                </span>
                            </div>
                            
                            <div className="footer__social">
                                <a href="https://www.facebook.com/" className="footer__social-link">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="https://www.instagram.com/" className="footer__social-link">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="https://twitter.com/" className="footer__social-link">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>

                <p className="footer__copy">&#169; Jiu-Jitsu 3D Tutorials. All rigths reserved</p>
            </footer>
        </section>
                
    </>
  )
}
