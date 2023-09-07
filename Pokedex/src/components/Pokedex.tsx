import { Card } from "react-bootstrap";
import Pokemon from "../types/Pokemon";

const Pokedex: React.FC<{ pokemonData: Pokemon }> = ({pokemonData}) => {

  return (
    <>
        <Card className="bg-primary">
            <Card.Img variant="top" src={pokemonData?.sprites?.front_default || "placeholder-url"} />
            <Card.Body>
                <Card.Title>{pokemonData && pokemonData.name}</Card.Title>
                <Card.Text>
                    <p>Height: {pokemonData?.height}</p>
                    <p>Weight: {pokemonData?.weight}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default Pokedex