import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      className="mb-2 footer"
    >
      {/* <footer>
                <hr/>
                <p>Copyright © Dana Pizza</p>
            </footer> */}

      <Container>
        {/* <hr /> */}
        <Row>
          <hr></hr>
          <Col className="text-center py-2">
            <hr></hr>
            Copyright &copy; Dana Pizza
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
