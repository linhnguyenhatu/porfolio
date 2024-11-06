import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "70px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={"https://cdn.discordapp.com/attachments/959644048841375787/1303860553432961064/Thiet_ke_chua_co_ten__2_-removebg-preview.png?ex=672d4a44&is=672bf8c4&hm=b9a8142d66d5849a1a7b6326b078307d72f2deda8fc8f6f9631332bcf216db47&"} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
