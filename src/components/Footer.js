import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/christianoes/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ChristianOki01"><BsGithub /></a>
            </div>
            <p>Email : okiekasakti@gmail.com</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
