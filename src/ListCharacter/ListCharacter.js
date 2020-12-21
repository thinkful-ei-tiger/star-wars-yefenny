import React from 'react';
import Character from '../Character/Character';
export default function ListCharacter(props) {
  const characters = props.values.forEach((character, i) => {
    return (
      <li>
        <Character key={i} character={character} />
      </li>
    );
  });
  return (
    <div>
      <ul>{characters}</ul>
      {props.values.name}
    </div>
  );
}
