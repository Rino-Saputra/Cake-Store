import { Container, Row, Col } from "react-bootstrap"
import { error } from "../export/img"

export default function Error() {
  return (
    <Container>
        <Row className="d-flex justify-content-center">
            <Col md={6}>
                <img src={error} alt="" className="cake-img" />
                <h2 className="fw-bold text-danger">Sorry something when wrong</h2>
            </Col>
        </Row>
    </Container>
  )
}
