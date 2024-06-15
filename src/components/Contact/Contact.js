import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import './Contact.css'; // Importing the CSS file
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
function Contact() {
  const [width, setWidth] = useState(1200);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      username: formData.name,
      user_email: formData.email,
      message: formData.message
    };

    emailjs.send('service_x6o7k2c', 'template_ao7503d', templateParams, '6IaZehgv0GVj6j8G1')
      .then((result) => {
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error)
        alert("An error occurred, please try again.");
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <Container fluid className="contact-section">
        <div className="centerdiv" >
          <div style={{ width: "70%" }}>
            <Container className="contact-form-container">
              <h2>Contact Me</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <div className="form-layout centerdiv" style={{padding:"1rem"}}>
                    <div style={{ width: "20%" }}>
                      <Form.Label>Name</Form.Label>
                    </div>
                    <div style={{ width: "70%" }}>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <div className="form-layout centerdiv" style={{ padding: "1rem" }}>
                    <div style={{ width: "20%" }}>
                      <Form.Label>Email</Form.Label>
                    </div>
                    <div style={{ width: "70%" }}>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <div className="form-layout centerdiv" style={{ padding: "1rem" }}>
                    <div style={{ width: "20%" }}>
                      <Form.Label>Message</Form.Label>
                    </div>
                    <div style={{ width: "70%" }}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Container>
          </div>
        </div>
        <div md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VinayLodhi1712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/VinayLodhi1712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinay-anand-lodhi-5694b1234"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discordapp.com/users/VinayLodhi1712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord/>
                </a>
              </li>
            </ul>
        </div>
      </Container>
    </div>


  );
}

export default Contact;
