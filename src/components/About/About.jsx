import {Container} from "../Container/Container.jsx";
import {Description} from "./Description/Description.jsx";
import {TechStack} from "./TechStack/TechStack.jsx";
import {SoftSkills} from "./SoftSkills/SoftSkills.jsx";
import {ToolStack} from "./ToolStack/ToolStack.jsx";
export function About(){
    return(
        <Container>
            <Description/>
            <SoftSkills/>
            <TechStack/>
            <ToolStack/>
        </Container>
    )
}