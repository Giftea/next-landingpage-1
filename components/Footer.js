import React from "react";
import footerBg from "../assets/img/footer-bg.png";
import footerLogo from "../assets/img/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerbg">
        <Image src={footerBg} className="svg" alt="" />
      </div>
      <div className="footer-top pt-120 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <Image src={footerLogo} alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit ame consy ect etur adipisc de elit.
                  Quisque act raqum nunc no dolor sit de amet.
                </p>

                <div className="footer-social-area">
                  <ul className="social-icons social-icons-light nav">
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>Our Address</h5>
                </div>

                <div className="widget-body">
                  <ul className="address-list">
                    <li>
                      <span>
                        <i className="fa  fa-phone-square"></i>
                      </span>
                      576 3864 000
                    </li>
                    <li>
                      <span>
                        <i className="fa  fa-envelope"></i>
                      </span>
                      eleojouhiene@gmail.com
                    </li>
                    <li>
                      <span>
                        <i className="fa  fa-map"></i>
                      </span>
                      855 road, Douglas str, 1234 NW
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>Extra Links</h5>
                </div>
              </div>

              <div className="widget-body">
                <div className="extra-link">
                  <div className="link-left">
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">How It Works</a>
                      </li>
                    </ul>
                  </div>
                  <div className="link-right">
                    <ul>
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Clients</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text text-center">
          <p>© copyright 2021 by Giftea</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
