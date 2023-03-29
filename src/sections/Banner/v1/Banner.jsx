import Button from "components/button";
import BannerStyleWrapperVideo from "./Banner.style.video";

import bannerIcon from "assets/images/icons/icon1.png";

const Banner = () => {
  return (
    <>
      <BannerStyleWrapperVideo>
        <div className="container">
          <div className="banner-content text-center">
            <img
              src={bannerIcon}
              className="banner-icon"
              alt="banner icon"
            />
            <h1 className="banner-title">
            Welcome to the Playground
            </h1>
            {/* <div className="description">
              The next generation gaming ecosystem for IGOs and NFT
            </div> */}

            {/* <Button href="/projects-grid" variant="mint" md isCenter className="banner-btn">
              Explore IGO
            </Button> */}
          </div>
        </div>
      </BannerStyleWrapperVideo>
    </>
  );
};

export default Banner;
