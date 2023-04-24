import styled from "styled-components";
import backgroundVideo from "assets/images/bg/banner-video3.mp4";

const BannerStyleWrapperVideo = () => {
  
  return(
    <div classname="container">
    <video autoPlay true muted className="bg-vid"> <source src={backgroundVideo} type="video/mp4" /> </video>
    <div className="overlay">
      <h1>
        WELCOME TO THE PLAYGROUND
      </h1>
    </div>
    </div>
  );


}


export default BannerStyleWrapperVideo;
