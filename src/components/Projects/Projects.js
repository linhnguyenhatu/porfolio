import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/facebook.png";
import chatify from "../../Assets/Projects/chartify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Math Learner"
              description="An AI application that uses PyTorch framework and a simple regression machine learning model to create a personalized learning experience for students. The model is bases on different crucial factors that impact student's performance such as grades, time spending on materials, exams,.. provide supplement materials and practice problems."
              ghLink="https://github.com/linhnguyenhatu/AI-Math-Learner"
              demoLink="https://guest1903150.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI planner"
              description="An AI application that use chatbot AI + given databases to generate a personalized and detailed plan of a trip for the user. User prompts are in natural languages and can have different complexities, from number of days to number of destinations and amount of budget.(demo)"
              ghLink="https://github.com/linhnguyenhatu/AI-Planer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Facebook Stock Prediction"
              description="Predict facebook stock price using a dataset from 2012 to 2021."
              ghLink="https://github.com/linhnguyenhatu/Facebook-Stock-Prediction"    
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
