import {Container} from "../Container/Container.jsx";
import {Welcome} from "./Welcome/Welcome.jsx";
import {Introduce} from "./Introduce/Introduce.jsx";

export function Home(){
    return(
        <Container>
            <Welcome/>
            <Introduce/>
        </Container>
    )
}