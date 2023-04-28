import styled from "styled-components";

const AboutStyleWrapper = styled.section`
    position: relative;
    background: #151625;

    .live_project_wrapper {
        position: absolute;
        width: 100%;
        height: auto;
        top: -385px;
        z-index: 99;
    }

    @media only screen and (max-width: 991px) {
        padding-top: 465px;
        padding-bottom: 45px;
         
    }
`
    



export default AboutStyleWrapper;