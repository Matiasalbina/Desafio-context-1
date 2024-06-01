import React, { createContext, useEffect, useState } from 'react';

export const PokeContext = createContext();

export const PokemonProvider = ({ children }) => {
    const pokeOnCart = JSON.parse(localStorage.getItem('cart'));

    const [pokemones, setPokemones] = useState([]);
    const [cart, setCart] = useState(pokeOnCart ? pokeOnCart : []);

    useEffect(() => {
        fetchPokemones();
    }, []);

    const fetchPokemones = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();

        const pokemonesFiltered = await Promise.all(data.results.map(async (pokemon) => {
            const pokeResponse = await fetch(pokemon.url);
            const pokeData = await pokeResponse.json();
            return {
                id: pokeData.id,
                name: pokeData.name,
                image: pokeData.sprites.front_default,
                abilities: pokeData.abilities.map(ability => ability.ability.name).join(', '),
                types: pokeData.types.map(type => type.type.name).join(', '),
                onCart: false,
            };
        }));

        setPokemones(pokemonesFiltered);
    };

    const pokeToCart = (id) => {
        const pokemonesModified = pokemones.map((pokemon) =>
            pokemon.id === id ? { ...pokemon, onCart: !pokemon.onCart } : pokemon
        );

        setPokemones(pokemonesModified);

        const pokeOnCart = pokemonesModified.filter(
            (pokemon) => pokemon.onCart
        );

        localStorage.setItem('cart', JSON.stringify(pokeOnCart));

        setCart(pokeOnCart);
    };

    return (
        <PokeContext.Provider value={{ pokemones, cart, pokeToCart }}>
            {children}
        </PokeContext.Provider>
    );
};
