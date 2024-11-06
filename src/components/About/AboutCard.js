import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">James Nguyen </span>
            I am <span className="purple">an international student from Vietnam</span>
            <br />
            I am currently a first-year student at Virginia Tech.
            
            I am pursuing computer science with a focus on AI/ML. I have participated in serveral hackathons with Backend Developer position. I also have some personal AI projects using Pytorch and TensorFlow frameworks focusing on enhancing education with AI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing guitar
            </li>
          </ul>

          <p style={{ color: "rgb(76, 187, 23)" }}>
            "No success without hardwork"{" "}
          </p>
          <footer className="blockquote-footer">James</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
