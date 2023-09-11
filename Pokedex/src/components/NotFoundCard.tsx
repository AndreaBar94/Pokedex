import { Card } from "react-bootstrap";

const NotFoundCard = () => {
  return (
    <Card className="poke-card">
                <div className="custom-card-image"></div>
                <Card.Body>
                    <Card.Text>
                        <p>404 not found</p>
                    </Card.Text>
                </Card.Body>
            </Card>
  )
}

export default NotFoundCard
