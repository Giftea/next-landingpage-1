import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'

import img1 from "../assets/img/icons/solution1.svg";
import img2 from "../assets/img/feature/user-interact2.png";

const CtaThree = () => {
  return (
    <section className="pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={5} sm={5}>
            <div className="user-interact-inner">
              <div className="interact-icon">
                <Image src={img1} className="svg" alt="" />
              </div>
              <h2>ILorem ipsum dolor sit amet, consectetur adipisicing.</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <a href="#" className="btn">
                Get Started
              </a>
            </div>
          </Col>
          <Col lg={7} sm={7}>
            <div className="user-interact-image type2">
              <Image src={img2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaThree;
