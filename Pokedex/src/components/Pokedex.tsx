import { Card } from "react-bootstrap";
import Pokemon from "../types/Pokemon";

const Pokedex: React.FC<{ pokemonData: Pokemon }> = ({pokemonData}) => {

    return (
        <>
        {pokemonData && pokemonData.id ? 
            (<Card className="poke-card">
                <Card.Img variant="top" src={pokemonData?.sprites?.front_default || "placeholder-url"} className="custom-card-image"/>
                <Card.Body>
                    <Card.Title>Name: {pokemonData?.name}</Card.Title>
                    <Card.Text>
                        <p>Height: {pokemonData?.height}</p>
                        <p>Weight: {pokemonData?.weight}</p>
                    </Card.Text>
                </Card.Body>
            </Card> )
            :
            (<Card className="poke-card">
                <div className="custom-card-image"></div>
                <Card.Body>
                    <Card.Text>
                        <p>404 not found</p>
                    </Card.Text>
                </Card.Body>
            </Card> )
            }  
            
        
        </>
    )
}

export default Pokedex