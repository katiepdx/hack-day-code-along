import React from 'react'
import CharacterByName from '../characters/CharacterByName'
import CharacterList from '../characters/CharacterList'
import Header from '../header/Header'

const home = () => {
  return (
    <div>
      <Header />
      <CharacterByName />
      <CharacterList />
    </div>
  )
}

export default home
