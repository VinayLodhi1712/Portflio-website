import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import './Contact.css'; // Importing the CSS file
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import logo2 from "../../Assets/logo2.png";
function Contact() {
  const [isRotated, setIsRotated] = useState(false);
  const [currentImage, setCurrentImage] = useState(logo2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      <Container fluid className="margin mt">
      
        <Row className="justify-content-center">
          <Col md={8}>
            
            <Container className="contact-form-container">
            <h3 className="left secondary">Get in touch</h3>
            <h2 className="margin white">Contact Me</h2>
            <img
                src={currentImage}
                alt="home pic"
                className={`marginbottom img-fluid img-circle ${isRotated ? "rotate" : ""}`}
                style={{ maxHeight: "150px"}}
               
              />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Row className="align-items-center">
                    <Col xs={12} md={3}>
                      <Form.Label>Your Name</Form.Label>
                    </Col>
                    <Col xs={12} md={9}>
                      <Form.Control
                        type="text"
                        placeholder="What's your good name?"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Row className="align-items-center">
                    <Col xs={12} md={3}>
                      <Form.Label>Your Email</Form.Label>
                    </Col>
                    <Col xs={12} md={9}>
                      <Form.Control
                        type="email"
                        placeholder="What's your web address?"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Row className="align-items-center">
                    <Col xs={12} md={3}>
                      <Form.Label>Your Message</Form.Label>
                    </Col>
                    <Col xs={12} md={9}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Go ahead..what you want to say..?"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
