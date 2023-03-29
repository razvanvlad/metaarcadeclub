import styled from "styled-components";
import backgroundVideo from "assets/images/bg/background-crop-2.mp4";

const BannerStyleWrapperVideo = () => {
  
  return(
    <video autoPlay true muted className="bg-vid"> <source src={backgroundVideo} type="video/mp4" /> </video>
  );

}


export default BannerStyleWrapperVideo;
