import { useState, useEffect } from 'react'
import { getCharacters, getCharactersById } from '../services/trek-api'
import { ListCharacter, Character } from '../types/types'
import { useParams } from 'react-router-dom'

export const useCharacters = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [characters, setCharacters] = useState<ListCharacter[]>([]) //expect an arr of ListCharacters from types.ts

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false))
  }, [])

  // return loading and characters
  return { loading, characters }
}

export const useSingleCharacter = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [character, setCharacter] = useState<Character>()
  // types: looking for an id that is a string
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getCharactersById(id)
      .then(setCharacter)
      .finally(() => setLoading(false))
  }, [id]) //when id characters, trigger useEffect

  return { loading, character }
}
