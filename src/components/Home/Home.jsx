import styles from "./Home.module.css"
import homeImg from "../../assets/homeImg.png"
import hand from "../../assets/hand.png"
import myImage from "../../assets/OskarDybas.jpeg"
import Typewriter from 'typewriter-effect';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.home}>
                <div className={styles.welcome}>
                    <h1>Hi There! <img src={hand} alt="hand img" /></h1>
                    <h1>I'M <span className={styles.name}>OSKAR DYBAS</span></h1>
                    <div className={styles.typewritterWrapper}>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Front-End Developer',
                                        'Web Developer'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor:2500,
                                    deleteSpeed: 50,
                                }}
                            />
                        </h1>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={homeImg} alt="home img" />
                </div>
            </div>
            <div className={styles.aboutContainer}>
                {/*Introduce*/}
                <div className={styles.about}>
                    <div className={styles.myImage}>
                        <img src={myImage} alt="Oskar Dybas" />
                    </div>
                    <div className={styles.introduce}>
                        <h2>LET ME <span>INTRODUCE</span> MYSELF</h2>
                        <p>
                            An ambitious student with a passion for learning and development in the area of programming.
                        </p>
                        <p className={styles.color}>
                            Ready to take on new challenges, using advanced technical skills.
                        </p>
                        <p>
                            Looking for opportunities to gain practical experience and develop skills in a dynamic IT environment.
                        </p>
                    </div>
                </div>

                {/* Social links */}
                <div className={styles.socials}>
                    <h2>FIND <span>ME</span> ON</h2>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="https://github.com/Oskii0201" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/oskar-dyba%C5%9B-b1aa5b239/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/oskar.dybas.1/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}