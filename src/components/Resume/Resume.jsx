import styles from "./Resume.module.css"
import pdf from "../../assets/OskarDybasResume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import {useEffect, useState} from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {faFileArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export function Resume(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const calculateScale = () => {
        if (windowWidth > 1000) {
            return 1.5;
        } else if (windowWidth > 786) {
            return 1;
        } else if(windowWidth > 540){
            return 0.8;
        }else{
            return 0.6;
        }
    };
    return(
        <div className={styles.resumeContainer}>
            {/*Download button*/}
            <div className={styles.row}>
                <a href={pdf} target="_blank"><FontAwesomeIcon icon={faFileArrowDown} /> Download CV</a>
            </div>
            {/*Resume*/}
            <div className={styles.resumeRow}>
                <Document file={pdf}>
                    <Page pageNumber={1} scale={calculateScale()}/>
                </Document>
            </div>
            {/*Download button*/}
            <div className={styles.row}>
                <a href={pdf} target="_blank"><FontAwesomeIcon icon={faFileArrowDown} /> Download CV</a>
            </div>
        </div>
    )
}