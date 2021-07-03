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
                Download our App Today &<br />
                Experience Endless Possibilities.
              </h2>
              <h3>
                and get started with a free 1 month trial for your business
              </h3>
              <a href="#" className="btn">
                Download App
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaOne;
