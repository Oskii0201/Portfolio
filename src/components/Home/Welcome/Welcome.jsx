import styles from "./Welcome.module.css"
import hand from "../../../assets/hand.png";
import Typewriter from "typewriter-effect";
import homeImg from "../../../assets/homeImg.png";
import {Row} from "../../Row/Row.jsx";
export function Welcome(){
    return(
        <Row>
            <div className={styles.welcome}>
                <h1>Hi There! <img src={hand} alt="hand img" /></h1>
                <h1>I'M <span className={styles.magenta}>OSKAR DYBAS</span></h1>
                <div className={styles.typewritterWrapper}>
                    <h2 className={styles.magenta}>
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
                    </h2>
                </div>
            </div>
            <div className={styles.image}>
                <img src={homeImg} alt="home img" />
            </div>
        </Row>
    )
}