import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShopCard from "./ShopCards";
import "./shop.css"
import bundle from "../../Assets/Bossplanner/the-boss-planner-pink book.png"
import bossbundle from "../../Assets/Bossbundle/the-boss-bundle-selar.co-6520051712d60.jpeg"
import recap from "../../Assets/Recap/recap-to-roadmap-workbook-selar.co-651a886b9181e.jpeg"
function Shop() {
  return (
    <Container fluid className="project-section">
      
      <Container>       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ShopCard
              imgPath={bundle}
              isBlog={false}
              title="The Boss Planner"
              description="The Boss Planner 2024 Edition is a powerful 345-page tool designed to empower individuals struggling with self-discipline, consistency, and mindset, offering a comprehensive guide to take charge of life, business, and career, with features like personal roles, vision board, and daily action steps."

            />
          </Col>
          <Col md={4} className="project-card">
          <ShopCard
              imgPath={bossbundle}
              isBlog={false}
              title="The Boss Bundle"
              description="The 2024 Boss Bundle: Your ultimate toolkit for success, combining The Boss Planner for strategic goal planning and Recap to Roadmap Workbook for self-reflection, providing a holistic approach to achieving your dreams in 2024."
           
            />
          </Col>

          <Col md={4} className="project-card">
          <ShopCard
              imgPath={recap}
              isBlog={false}
              title="Recap to Roadmap workbook"
              description="Recap to Roadmap Workbook: Your transformative guide for self-discovery, effective decision-making, and strategic planning, empowering you to gain clarity about your past, understand your strengths, and embark on a purposeful journey toward success in the upcoming year."

            />
          </Col>
          <Col md={4} className="project-card">
          <ShopCard
              // imgPath={ireporter}
              isBlog={false}
              title="Free Guide: Goals to Strategy"
              description="The iReporter app is a web-based platform designed to empower citizens in African countries to combat corruption and request government intervention."

            />
          </Col>
          
          
        </Row>
         </Container>
    </Container>
  );
}

export default Shop;
