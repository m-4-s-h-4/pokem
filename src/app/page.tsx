'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './styles/Home.module.css';

type Pokemon = {
  name: string;
  url: string;
};

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Select your Pokemon:</h1>
      <ul className={styles.pokemonList}>
        {pokemons.map((pokemon, index) => (
          <li key={index} className={styles.pokemonItem}>
            <Link href={`/pokemon/${pokemon.name}`}>
              <div className={styles.pokemonLink}>{pokemon.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
