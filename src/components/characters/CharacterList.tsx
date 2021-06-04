import React from 'react'
import { useCharacters } from '../../hooks/characters'
import CharacterItem from './CharacterItem';
import styles from './CharacterList.module.css';


const CharacterList: React.FC = () => {
  
  const { characters, loading } = useCharacters()

  const characterItems = characters.map(
    character => (
      <li
        key={character.id}
        className={styles.characterBox}
      >
        <CharacterItem {...character} />
      </li>
    )
  )


  if(loading) return <h1>Nomad Loading...</h1>

  return (
    <div className={styles.listBox} >
      <ul>
        {characterItems}
      </ul>
    </div>
  )
}

export default CharacterList;
