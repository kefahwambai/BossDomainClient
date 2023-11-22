import React from "react";
import './landing.css'
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tilt from "react-parallax-tilt";


function LandingPage() {
    return (
        <div className="ladingpage">
          <Container className="home-content">
            <Row>
              <Col md={8} className="home-header">
                <h1  className="heading">
                Grow Your Carrer With Personalized <span>Mentorship</span>
                </h1>
                <h1 className="heading-name">
                Get free one-on-one mentorship from experienced technical experst who relate wotuh your career goals and journey.
                </h1>
                <div style={{ padding: 8, textAlign: "left" }}>                 
                </div>
                <Button>
                 Sign Up For Free
                </Button>
              </Col>
              <Col md={4} className="myAvtar">
              <Tilt>
                {/* <img src={myImg} className="img-fluid image" alt="avatar" /> */}
              </Tilt>
            </Col>
            </Row>
         
          </Container>
           

        </div>
    )
}

export default LandingPage;