import { Card, Col, Row } from "react-bootstrap";
import Pokemon from "../types/Pokemon";

const Pokedex: React.FC<{ pokemonData: Pokemon }> = ({pokemonData}) => {

    return (
        <>
            <Card className="poke-card">
                <div className="custom-card-holder">
                    <Card.Img variant="top" src={pokemonData?.sprites?.front_default || "placeholder-url"} className="custom-card-image"/>
                </div>
                <Card.Body>
                    <Card.Title>Name: {pokemonData?.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col className="fs-5 d-flex flex-column">
                                <span>Height: {pokemonData?.height}</span>
                                <span>Weight: {pokemonData?.weight}</span>
                            </Col>
                            <span className="my-2">Types:</span>
                            {pokemonData?.types?.map((types) => 
                            <>
                                <span key={types.slot} className="fs-5">
                                    {types.type.name}
                                </span>
                            </>)}
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </>
    )
}

export default Pokedex