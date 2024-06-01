import React, { useContext } from 'react';
import { PokeContext } from '../context/Provider';
import { Card, Button, Row, Col } from 'react-bootstrap';

export const CartPage = () => {
    const { cart, pokeToCart } = useContext(PokeContext);

    return (
        <div className="container">
            <h1>Favoritos</h1>
            {cart.length === 0 ? (
                <p>No has adoptado a ningún Pokémon.</p>
            ) : (
                <Row>
                    {cart.map(pokemon => (
                        <Col key={pokemon.id} className="mb-6">
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
                                    <Button onClick={() => pokeToCart(pokemon.id)} variant="danger">
                                        Ya no lo quiero
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};
