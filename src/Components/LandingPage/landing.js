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
                             
                <Button>
                 Sign Up For Free
                </Button>
              </Col>
              <Col md={4} className="myAvtar">
              <Tilt>                
              </Tilt>
            </Col>
            </Row>
         
          </Container>
           

        </div>
    )
}

export default LandingPage;