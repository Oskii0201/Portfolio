import styles from "./Home.module.css"
import homeImg from "../../assets/homeImg.png"
import hand from "../../assets/hand.png"
import Typewriter from 'typewriter-effect';
export function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.home}>
                <div className={styles.welcome}>
                    <h1>Hi There! <img src={hand} alt="hand img" /></h1>
                    <h1>I'M <span className={styles.name}>OSKAR DYBAS</span></h1>
                    <div className={styles.typewritterWrapper}>
                        <Typewriter
                            options={{
                                strings: [
                                    'Front-End Developer',
                                ],
                                autoStart: true,
                                loop: true,
                                pauseFor:2500,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={homeImg} alt="home img" />
                </div>
            </div>
        </div>
    )
}