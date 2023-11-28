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
            <Aboutcard />
          </Col>      
        </Row>       
      </Container>
    </Container>
  );
}

export default About;
