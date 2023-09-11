import { Card } from "react-bootstrap";

const NotFoundCard = () => {
  return (
    <Card className="poke-card">
        <div className="custom-card-image"></div>
        <Card.Body>
            <Card.Text className="fs-5 text-muted">
                Enter a valid Pokémon name / #id number
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default NotFoundCard
