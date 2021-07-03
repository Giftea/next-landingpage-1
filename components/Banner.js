import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import shape1 from "../assets/img/banner/shaps1.png";
import shape2 from "../assets/img/banner/shaps2.png";
import shape3 from "../assets/img/banner/shaps3.png";
import shape4 from "../assets/img/banner/shaps4.png";
import shape5 from "../assets/img/banner/shaps5.png";
import shape6 from "../assets/img/banner/shaps6.png";
import shape7 from "../assets/img/banner/shaps7.png";

import bannerMoc from "../assets/img/banner/mockup.png";

const Banner = () => {
  return (
    <div className="banner-area-inner">
      <div className={`banner-inner-area banner-area1`}>
        <Container>
          <Row className="align-items-center">
            <Col md={8} lg={6} xl={5}>
              <div className="banner-text-inner">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit lorem ipsum anim id est laborum
                  perspiciatis unde.
                </p>
                <a href="#" className="btn">
                  Download App
                </a>
                <a href="#" className="btn">
                  Discover More
                </a>
              </div>
            </Col>
            <Col md={4} lg={5} className="  offset-lg-1  offse-xl-2">
              <div className="banner-image">
                <Image src={bannerMoc} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
