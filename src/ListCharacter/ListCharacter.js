import React from 'react';
import Character from '../Character/Character';
export default function ListCharacter(props) {
  const characters = props.values.map((character, i) => {
    return (
      <li key={i}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <div>
      <ul>{characters}</ul>
    </div>
  );
}
