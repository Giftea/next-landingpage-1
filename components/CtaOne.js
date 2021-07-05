import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CtaOne = () => {
  return (
    <section className="border-top pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="download-app-inner text-center">
              <h2 className="h1">
                Lorem ipsum dolor sit. &<br />
                Amet consectetur adipisicing elit.
              </h2>
              <h3>
                Adipisicing elit. Eveniet labore quis nesciunt, rem explicabo nulla?
              </h3>
              <a href="#" className="btn">
                Get Started
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaOne;
