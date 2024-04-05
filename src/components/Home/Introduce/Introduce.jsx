import styles from "./Introduce.module.css"
import {Row} from "../../Row/Row.jsx";
import myImage from "../../../assets/OskarDybas.jpeg";
import {Container} from "../../Container/Container.jsx";
import {LinkList} from "../../LinkList/LinkList.jsx";
export function Introduce(){
    return(
        <Container paddingBottom={false}>
            {/*Introduce*/}
            <Row wrapReverse={true}>
                <div className={styles.myImage}>
                    <img src={myImage} alt="Oskar Dybas" />
                </div>
                <div className={styles.introduce}>
                    <h2>LET ME <span className={styles.magenta}>INTRODUCE</span> MYSELF</h2>
                    <p>
                        An ambitious student with a passion for learning and development in the area of programming.
                    </p>
                    <p>
                        Ready to take on new challenges, using advanced technical skills.
                    </p>
                    <p>
                        Looking for opportunities to gain practical experience and develop skills in a dynamic IT environment.
                    </p>
                </div>
            </Row>

            {/* Social links */}
            <div className={styles.socials}>
                <h2>FIND <span className={styles.magenta}>ME</span> ON</h2>
                <LinkList/>
            </div>
        </Container>
    )
}