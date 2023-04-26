import Countdown, { zeroPad } from 'react-countdown';
import { Slider, SliderItem } from "components/slider/Slider";
// import ProgressBar from "components/progressBar";
// import CardHover from "components/cardHover";
import LiveProjectStyleWrapper from "./LiveProject.style";
// import data from "assets/data/liveProject/dataV1";
import bannereWebsite1 from "assets/images/slider/update/bannere-website.png";
import bannereWebsite2 from "assets/images/slider/update/bannere-website2.png";
import bannereWebsite3 from "assets/images/slider/update/bannere-website3.png";
import bannereWebsite4 from "assets/images/slider/update/bannere-website4.png";

const SliderHero = () => {


  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5500,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="countdown_wrapper">
        <div>
          {zeroPad(days)}
          <span>D</span>
        </div>
        <div>
          {zeroPad(hours)}
          <span>H</span>
        </div>
        <div>
          {zeroPad(minutes)}
          <span>M</span>
        </div>
        <div>
          {zeroPad(seconds)}
          <span>S</span>
        </div>
      </div>
    )
  }


  return (
    <LiveProjectStyleWrapper className="live_project_wrapper">
      <div className="container">
        <Slider {...sliderSettings}>
          <div>
            <img
                src={bannereWebsite1}
                className="banner-icon"
                alt="banner icon"
              />
          </div>
          <div>
            <img
                src={bannereWebsite2}
                className="banner-icon"
                alt="banner icon"
              />
          </div>
          <div>
            <img
                src={bannereWebsite3}
                className="banner-icon"
                alt="banner icon"
              />
          </div>
          <div>
            <img
                src={bannereWebsite4}
                className="banner-icon"
                alt="banner icon"
              />
          </div>
        </Slider>
      </div>
    </LiveProjectStyleWrapper>
  );
};

export default SliderHero;
