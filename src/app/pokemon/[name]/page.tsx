'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Pokemon.module.css';

type Props = {
  params: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

const PokemonPage = ({ params }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (params.name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    }
  }, [params.name]);

  if (!pokemon) return <p>pokemon is running away...</p>;

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/">
          <div className={styles.homeButton}>Home</div>
        </Link>
      </nav>
      <div className={styles.content}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <img className={styles.image} src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonPage;
