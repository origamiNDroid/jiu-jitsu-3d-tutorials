import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/home-styles.module.css';

import { RiPhoneLine, RiMailLine, RiArrowRightDownLine, RiFacebookFill, RiTwitterFill, RiInstagramLine, RiCheckboxFill, RiAddLine, RiCloseLine } from 'react-icons/ri';

export default function Home() {
  return (
    <>  
        <nav className={`${styles.nav} ${styles.nav__container}`}>
            <div className={styles.nav__menu} id="nav-menu">
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <a href="#home" className={`${styles.nav__link} ${styles.active__link}`}>Home</a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#about" className={styles.nav__link}>About</a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#disclaimer" className={styles.nav__link}>Disclaimer</a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#faqs" className={styles.nav__link}>FAQs</a>
                    </li>
                    <li className={styles.nav__item}>
                        <a href="#contact" className={styles.nav__link}>Contact Us</a>
                    </li>
                </ul>

                <div className={styles.nav__close} id="nav-close">
                    <RiCloseLine />
                </div>
            </div>

        </nav>

        
        {/* HOME */} 
        <section className={styles.home} id="home">
            <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
                <img src={"./img/home1.png"} alt={""} className={styles.home__img} />

                <div className={styles.home__data}>
                    <h1 className={styles.home__title}>
                        First 3D Animated Jiu-Jitsu Website
                    </h1>
                    <p className={styles.home__description}>
                        A flexible platform that will allow users to better understand, learn, 
                        and retain information from the wonderful art of Jiu-Jitsu.

                    </p>
                    <a href="#about" className={`${styles.button} ${styles.buttonFlex}`}>
                        Explore <RiArrowRightDownLine></RiArrowRightDownLine>
                    </a>
                </div>

                <div className={styles.home__social}>
                    <span className={styles.home__socialFollow}>Follow Us</span>

                    <div className={styles.home__socialLinks}>
                        <a href="https://www.facebook.com/" target="_blank" className={styles.home__socialLink}>
                            <RiFacebookFill />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className={styles.home__socialLink}>
                            <RiInstagramLine />
                        </a>
                        <a href="https://twitter.com/" target="_blank" className={styles.home__socialLink}>
                            <RiTwitterFill />
                        </a>
                    </div>
                </div>
            </div>
        </section>

            {/* ABOUT */} 
        <section className={`${styles.about} ${styles.section} ${styles.container}`} id="about">
            <div className={`${styles.about__container} ${styles.grid}`}>
                <img src={"./img/home2.png"} alt={""} className={styles.about__img} />

                <div className={styles.about__data}>
                    <h2 className={`${styles.section__title} ${styles.about__title}`}>
                        Who we really are & <br /> why choose us
                    </h2>

                    <p className={styles.about__description}>
                        We are a group of five computer science students that passionate
                        about Jiu-Jitsu
                    </p>

                    <div className={styles.about__details}>
                        <p className={styles.about__detailsDescription}>
                            <RiCheckboxFill className={styles.about__detailsIcon} />
                            First 3D modeling and animations to allow linking of techniques in 
                            any combination to result in fluid visualization of any potential scenarios.
                        </p>
                        <p className={styles.about__detailsDescription}>
                            <RiCheckboxFill className={styles.about__detailsIcon} />
                            Give people the ability to learn Jiu-Jitsu online, without having to go 
                            to the training center in the COVID-19 pandemic as well as to supplement 
                            in-person training and aid in retention.

                        </p>
                        <p className={styles.about__detailsDescription}>
                            <RiCheckboxFill className={styles.about__detailsIcon} />
                            Online self-paced learning platform.
                        </p>
                        <p className={styles.about__detailsDescription}>
                            <RiCheckboxFill className={styles.about__detailsIcon} />
                            100% satisfaction guaranteed.
                        </p>
                    </div>

                    <Link to={'/signup'} className={`${styles.buttonLink} ${styles.buttonFlex}`}>
                        Sign Up Now <RiArrowRightDownLine />
                    </Link>
                    {/* <a href="#about" className={`${styles.buttonLink} ${styles.buttonFlex}`}>
                        Sign Up Now <RiArrowRightDownLine />
                    </a> */}
                </div>
            </div>
        </section>

        {/* STEPS */}
        <section className={`${styles.steps} ${styles.section} ${styles.container}`}>
            <div className={styles.steps__bg}>
                <h2 className={`${styles.section__titleCenter} ${styles.steps__title}`}>
                    Steps to start your <br /> learning journey!
                </h2>

                <div className={`${styles.steps__container} ${styles.grid}`}>
                    <div className={styles.steps__card}>
                        <div className={styles.steps__cardNumber}>01</div>
                        <h3 className={styles.steps__cardTitle}>Sign up</h3>
                        <p className={styles.steps__cardDescription}>
                            Sign up an account with us to explore our website full features.
                        </p>
                    </div>

                    <div className={styles.steps__card}>
                        <div className={styles.steps__cardNumber}>02</div>
                        <h3 className={styles.steps__cardTitle}>Look up a technique</h3>
                        <p className={styles.steps__cardDescription}>
                            Once the account is set up, start your journey by searching for our basic techniques.
                        </p>
                    </div>

                    <div className={styles.steps__card}>
                        <div className={styles.steps__cardNumber}>03</div>
                        <h3 className={styles.steps__cardTitle}>Have fun learning!</h3>
                        <p className={styles.steps__cardDescription}>
                            Our learning process is self-paced and fun with a 100% Satisfaction guaranteed!
                        </p>
                    </div>
                </div>
            </div>
        </section>


        {/* DISCLAIMER */}
        <section className={`${styles.disclaimer} ${styles.section} ${styles.container}`} id="disclaimer">                
            <div className={`${styles.disclaimer__container} ${styles.grid}`}>
                <div className={styles.disclaimer__box}>
                    <h2 className={styles.section__title}>
                        Disclaimer
                    </h2>

                    <div className={styles.disclaimer__description}>
                        <p className={styles.disclaimer__description}>
                            The materials on Jiu-Jitsu 3D Tutorials web site are provided “as is”. Jiu-Jitsu 3D Tutorials makes 
                            no warranties, expressed or implied, and hereby disclaims and negates all other 
                            warranties, including without limitation, implied warranties or conditions of 
                            merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                            property or other violation of rights. Further, Jiu-Jitsu 3D Tutorials does not warrant or make 
                            any representations concerning the accuracy, likely results, or reliability of the use 
                            of the materials on its Internet web site or otherwise relating to such materials or on 
                            any sites linked to this site.
                        </p>

                        <p className={styles.disclaimer__description}>
                            
                            Activities associated with Jiu-Jitsu 3D Tutorials can include the risk of injury, 
                            property damage, and other dangers associated with the contact sport. 
                            The animated tutorials are intended to be used as an educational resource when 
                            practicing and learning the sport of Jiu-Jitsu. This form of martial arts can be 
                            dangerous, and can and will cause injury if not practiced responsibly. The sport 
                            can be physically demanding and can cause exhaustion, refer to a physician before 
                            starting intense training. 
                        </p>

                        <p className={styles.disclaimer__description}>
                            Dangers associated with the activity can include but are not limited to, fractures, 
                            sprains, bruising, contusions, lacerations, and orthopedic injuries. In case of 
                            serious injury, Jiu-Jitsu 3D Tutorials advises seeking professional medical help 
                            immediately. This website does not and cannot recommend medical advice. 
                        </p>

                        <div className={styles.disclaimer__description}>
                            <p className={styles.disclaimer__area}>
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
        <section className={`${styles.questions} ${styles.section}`} id="faqs">
            <h2 className={`${styles.section__titleCenter} ${styles.questions__title} ${styles.container}`}>
                Some common questions <br /> were often asked
            </h2>

            <div className={`${styles.questions__container} ${styles.container} ${styles.grid}`}>
                <div className={styles.questions__group}>
                    <div className={styles.questions__item}>
                        <header className={styles.questions__header}>
                            <RiAddLine className={styles.questions__icon} />
                            <h3 className={styles.questions__itemTitle}>
                                Is it completely free?
                            </h3>
                        </header>

                        <div className={styles.questions__content}>
                            <p className={styles.questions__description}>
                                Yes! Our platform is 100% online and free.
                            </p>
                        </div>
                    </div>

                    <div className={styles.questions__item}>
                        <header className={styles.questions__header}>
                            <RiAddLine className={styles.questions__icon} />
                            <h3 className={styles.questions__itemTitle}>
                                Does Jiu-Jitsu hard to learn?
                            </h3>
                        </header>

                        <div className={styles.questions__content}>
                            <p className={styles.questions__description}>
                                Every sport is hard to learn, just be patient and you will master the art of Jiu-Jitsu.
                            </p>
                        </div>
                    </div>

                </div>

                <div className={styles.questions__group}>
                    <div className={styles.questions__item}>
                        <header className={styles.questions__header}>
                            <RiAddLine className={styles.questions__icon} />
                            <h3 className={styles.questions__itemTitle}>
                                How do I sign up?
                            </h3>
                        </header>

                        <div className={styles.questions__content}>
                            <p className={styles.questions__description}>
                                You can sign up using your email address.
                            </p>
                        </div>
                    </div>

                    <div className={styles.questions__item}>
                        <header className={styles.questions__header}>
                            <RiAddLine className={styles.questions__icon} />
                            <h3 className={styles.questions__itemTitle}>
                                How can I reach your customer support?
                            </h3>
                        </header>

                        <div className={styles.questions__content}>
                            <p className={styles.questions__description}>
                                Our team can be reached via email and phone.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        

        {/* FOOTER */}
        <section className={`${styles.footer} ${styles.contact} ${styles.section} ${styles.container}`} id="contact">   
            <footer className={`${styles.footer} ${styles.section}`}>
                <div className={`${styles.footer__container} ${styles.container} ${styles.grid}`}>
                    <div className={styles.footer__content}>

                        <div className={styles.footer__box}>
                            <h2 className={styles.section__title}>
                                Questions? Concerns? Reach out to us today!
                            </h2>
                        </div>
                    </div>

                    <div className={styles.footer__content}>
                        <h3 className={styles.footer__title}>Our Address</h3>

                        <ul className={styles.footer__data}>
                            <li className={styles.footer__information}>University of Central Florida</li>
                            <li className={styles.footer__information}>4000 Central Florida Blvd. </li>
                            <li className={styles.footer__information}>Orlando, FL 32816</li>
                        </ul>
                    </div>
                    
                    <div className={styles.footer__content}>
                        <h3 className={styles.footer__title}>Contact Us</h3>

                        <ul className={styles.footer__data}>
                            <div className={styles.footer__information}>
                                <span className={styles.footer__information}>
                                    <RiPhoneLine className={styles.contact__icon} />
                                    +123 456 789
                                </span>
                            </div>

                            <div className={styles.footer__information}>
                                <span className={styles.footer__information}>
                                    <RiMailLine className={styles.contact__icon}/>
                                    jiujitsu3dtutorials@gmail.com
                                </span>
                            </div>
                            
                            <div className={styles.footer__social}>
                                <a href="https://www.facebook.com/" className={styles.footer__socialLink}>
                                    <RiFacebookFill />
                                </a>
                                <a href="https://www.instagram.com/" className={styles.footer__socialLink}>
                                    <RiInstagramLine />
                                </a>
                                <a href="https://twitter.com/" className={styles.footer__socialLink}>
                                    <RiTwitterFill />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>

                <p className={styles.footer__copy}>&#169; Jiu-Jitsu 3D Tutorials. All rigths reserved</p>
            </footer>
        </section>
                
    </>
  )
}
