import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  // { Social: <FaFacebookF />, link: "#" },
  // { Social: <FaLinkedinIn />, link: "#" },
  // { Social: <FaInstagram />, link: "#" },
  // { Social: <FaTwitter />, link: "#" },
];

const FooterTwo = () => {
  return (
    <div className="footer-style-2 ptb--30 bg_color--6">
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12"  >
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/home-one">
                  <img
                    src="/assets/images/logo/logo-light.png"
                    alt="Logo images"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            {/* <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20 center">
              <div className="text">
                <p>Copyright © 2022 monster-graphics. All Rights Reserved.</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
