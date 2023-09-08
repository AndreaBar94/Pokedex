import { Card } from "react-bootstrap";
import Pokemon, { PokemonList } from "../types/Pokemon";

const Pokedex: React.FC<{ pokemonData: Pokemon, pokemonList: PokemonList }> = ({pokemonData, pokemonList}) => {

    return (
        <>
        {pokemonList.results.map((pokemon: Pokemon)=> 
        
            <Card className="bg-primary">
                <Card.Img variant="top" src={pokemonData?.sprites?.front_default || "placeholder-url"} />
                <Card.Body>
                    <Card.Title>{pokemon && pokemon.name}</Card.Title>
                    <Card.Text>
                        <p>Height: {pokemonData?.height}</p>
                        <p>Weight: {pokemonData?.weight}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )}
        </>
    )
}

export default Pokedex