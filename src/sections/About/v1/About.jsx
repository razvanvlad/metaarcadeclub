import LiveProject from "sections/Projects/v2"
import Tutorial from "sections/Tutorial/v1"

import AboutStyleWrapper from "./About.style"
import SliderHero from "sections/Projects/v2/SliderHero"

const About = () => {
    return (
        <AboutStyleWrapper>
            <SliderHero />
            <Tutorial />
        </AboutStyleWrapper>
    )
}

export default About