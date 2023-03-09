import Social from "../../SocialProfile/SocialProfile";
import footerLogo from "assets/images/logo-svg/LOGO-meta-arcade-club-01.svg";
import { VscChevronUp } from "react-icons/vsc";
import FooterBottomStyleWrapper from "./FooterBottom.style";

const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom_wrapper">
      <Social />
      <div className="container">
        <div className="footer-bottom-content">
          <a href="# " className="footer-logo">
            {" "}
            <img src={footerLogo} alt="footer logo" />{" "}
          </a>

          <ul className="footer-menu">
            <li>
              <a href="# ">About us</a>
            </li>
            <li>
              <a href="# ">Social media</a>
            </li>
            <li>
              <a href="# ">Terms of Service</a>
            </li>
            <li>
              <a href="# ">Privacy Policy</a>
            </li>
          </ul>

          <div className="copyright-text">
            Copyright © 2023. All Rights Reserved by 
            <a href="# " target="_blank"> Meta Arcade Club</a>
          </div>
          <div className="scrollup text-center">
            <a href="# ">
              <VscChevronUp />
            </a>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
