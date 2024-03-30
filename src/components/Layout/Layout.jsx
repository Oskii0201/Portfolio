import styles from "./Layout.module.css"
import {NavbarWeb} from "../Navbar/NavbarWeb/NavbarWeb.jsx";
import {Footer} from "../Footer/Footer.jsx";
import {NavbarMobile} from "../Navbar/NavbarMobile/NavbarMobile.jsx";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
export function Layout(){
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isMobile = windowSize[0] < 800;

    return(
        <div className={styles.layout}>
            {isMobile ? (
                <NavbarMobile/>
            ) : (
                <NavbarWeb/>
            )}
            <div className={styles.content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}