import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import "./about.css"



function About() {
  return (
    <Container fluid className="about-section">    
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              marginTop: '-5rem',
              paddingBottom: "50px",
            }}>
            {/* <h1 style={{ textAlign: "center",fontSize: "2.1em", paddingBottom: "20px" }}>
            About The Boss Domain: Unleash Your Inner Boss
            </h1> */}
            <Aboutcard />
          </Col>      
        </Row>       
      </Container>
    </Container>
  );
}

export default About;
