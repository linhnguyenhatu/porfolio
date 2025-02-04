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
import medicalchatbot from "../../Assets/Projects/medicalchatbot.webp";
import hatespeech from "../../Assets/Projects/hatespeech.jpg"
import movierating from "../../Assets/Projects/movieratings.webp"
import heart from "../../Assets/Projects/heart.jpg"
import transport from "../../Assets/Projects/transportation.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some small projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Disease Prediction"
              description="AI models on a dataset of 56,000 patients' medical records to explore patterns related to cardiovascular disease diagnosis. I developed several machine learning models from scratch, including Logistic Regression, Decision Tree, Random Forest, and AdaBoost, using the Numpy package. The models achieved an impressive out-of-sample accuracy of over 93%"
              ghLink="https://github.com/linhnguyenhatu/Heart-Disease-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transport}
              isBlog={false}
              title="RAG and React Agent for transportation"
              description="A RAG system with a ReAct Agent using Langchain framework and leveraging GenAI models such as DeepSeek-R1, Llama 3.1, and Phi4 to enhance information retrieval and contextual accuracy within transportation field."
              ghLink="https://github.com/linhnguyenhatu/RAG-and-ReAct-Agent"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalchatbot}
              isBlog={false}
              title="Medical Chatbot"
              description="This is an Chatbot AI that is specifically for medical problems. It utilizes Decoder-only Transformer model with a standard Embedding technique. I use the PyTorch framework and other libraries for ML and processing the data. Because it is only a demo, the vocabulary size is only 30000 words and the whole dataset only has 200000 samples."
              ghLink="https://github.com/linhnguyenhatu/Medical-Chatbot-Demo"
            />
          </Col>

          </Row>


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
              imgPath={hatespeech}
              isBlog={false}
              title="Hate Speech Detection"
              description="An AI model that can detect hate speeches and posts using basic Word2Vec technique and Long-Short Term Memory model to process Natural Language inputs. It can classify posts into three categories: hate, offensive, and neither"
              ghLink="https://github.com/linhnguyenhatu/Hate-Speech-Detection"    
            />
          </Col>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Facebook Stock Prediction"
              description="An AI model that can predict facebook stock price using a dataset from 2012 to 2021."
              ghLink="https://github.com/linhnguyenhatu/Facebook-Stock-Prediction"    
            />
          </Col>

          </Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movierating}
              isBlog={false}
              title="Movie Ratings Classification"
              description="A small movie-reviews classification into positive and negative reviews using Word2Vec and LSTM"
              ghLink="https://github.com/linhnguyenhatu/Movie-Reviews-Word2vec-LSTM-"
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

        </Row>


      </Container>
    </Container>
  );
}

export default Projects;
