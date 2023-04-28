import styled from "styled-components";
import tutorialBg from "assets/images/bg/website_BG_03_small.png";

const TutorialStyleWrapper = styled.section`
* {
  box-sizing: border-box;
  overflow-x: hidden;
}



h2 {
  text-align: center;
}

  .container {
    background-image: url(${tutorialBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 50px 0;
    margin: 0 auto;
    max-width: 100%;
    width: 100vw; // Set the width to 100vw
    box-sizing: border-box; // Add box-sizing property
    height: 100%;
    min-height: 500px; // Adjust this value as needed
  }
  .section_title_wrapper {
    padding-top: 130px; 

  }
  .participate-item {
    .number-image {
      margin-right: 12px;
      flex: 0 0 21%;
    }

    h4 {
      margin-bottom: 10px;
      text-align: center;
    }
  }



  @media only screen and (max-width: 991px) {
    .participate-item {
      .number-image {
        flex: 0 0 15%;
      }
    }
  }
`;

export default TutorialStyleWrapper;