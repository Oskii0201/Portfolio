import styles from "./Description.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../../../assets/aboutImage.png";
import {Row} from "../../Row/Row.jsx";
export function Description(){
    return(
        <Row>
            <div className={styles.about}>

                {/*Description*/}
                <h2>Here's a short note <span className={styles.magenta}>About Me</span></h2>
                <div className={styles.wrapper}>
                    <p>
                        Hi Everyone, I am <span className={styles.magenta}>Oskar Dybas</span> from <span className={styles.magenta}>Katowice, Poland.</span>
                    </p>
                    <p>I am a 3rd year student of computer science at the WSB University in Chorzow.</p>
                    <p>
                        In the project team, I mainly deal with the Front-end, for example we created the <span className={styles.magenta}>Quirky Car Repair</span> application.
                    </p>

                    {/*Activities*/}
                    <div className={styles.activities}>
                        <h3>A few activities that I love to do in my free time from learning and coding!</h3>
                        <ul className={styles.activitiesList}>
                            <li>
                                <FontAwesomeIcon icon={faHandPointRight} /> Playing sport
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHandPointRight} /> Travelling
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHandPointRight} /> Playing Games
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Image*/}
            <div className={styles.image}>
                <img src={aboutImage} alt="home img" />
            </div>
        </Row>
    )
}