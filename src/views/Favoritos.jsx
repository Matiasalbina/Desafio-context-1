import React, { useContext } from 'react';
import { PokeContext } from '../context/Provider';
import { Card, Button, Row, Col } from 'react-bootstrap';

export const CartPage = () => {
    const { cart, pokeToCart } = useContext(PokeContext);

    return (
        <div className="container">
            <h1>Favoritos</h1>
            <Row>
                {cart.map(pokemon => (
                    <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3} className="mb-6">
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
        </div>
    );
};
