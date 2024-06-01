import React, { useContext } from 'react';
import { PokeContext } from '../context/Provider';
import { Card, Button, Row, Col } from 'react-bootstrap';

export const HomePage = () => {
    const { pokemones, pokeToCart } = useContext(PokeContext);

    return (
        <div className="container">
            <h1>Adopción Pokémon</h1>
            <Row>
                {pokemones.map(pokemon => (
                    <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="h-100 Poke-Card">
                            <Card.Img variant="top" src={pokemon.image} className="img-fluid card-img-custom" />
                            <Card.Body>
                                <Card.Title>{pokemon.name}</Card.Title>
                                <Card.Text>
                                    Abilities: {pokemon.abilities}
                                </Card.Text>
                                <Card.Text>
                                    Types: {pokemon.types}
                                </Card.Text>
                                <Button onClick={() => pokeToCart(pokemon.id)} variant="primary">
                                    {pokemon.onCart ? 'Ya no lo quiero' : 'Adoptar'}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
