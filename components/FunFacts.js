import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "4789",
    title: "Downloads"
  },
  {
    count: "6389",
    title: "Likes"
  },
  {
    count: "900",
    title: "5 Star Reating"
  },
  {
    count: "489",
    title: "Awards"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>{funfact.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
