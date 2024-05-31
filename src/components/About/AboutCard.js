import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinay Anand Lodhi </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently pursuing MCA from IIPS Davv, Indore.
            <br />
            I have completed my Bachelors in Computer Application at IIPS Davv, Indore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency is what that transforms Average into Excellence."{" "}
          </p>
          <footer className="blockquote-footer">Vinay Anand Lodhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
