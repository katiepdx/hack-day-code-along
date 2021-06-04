// import interface type from types.ts file
import { Character } from '../types/types'

// type coercion to type & turn it into a string
const URL = process.env.REACT_APP_API_URL as string

// expecting a promise that returns an array of characters (from types)
export const getCharacters = async (): Promise<Character[]> => {
  const res = await fetch(URL)
  const json = await res.json()

  if (!res.ok) throw new Error('Error: Failed to fetch Characters from the API')

  return json
}

export const getCharactersById = async (id: string): Promise<Character> => {
  const res = await fetch(`${URL}/${id}`)
  const json = res.json()

  if (!res.ok) throw new Error('Error: Failed to fetch a character by id from the API')

  return json
}

// expecting an array of Character (from types) matching the name search
export const getCharactersByName = async (name: string): Promise<Character[]> => {
  const res = await fetch(`${URL}/name/${name}`)
  const json = res.json()

  if (!res.ok) throw new Error('Error: Failed to find a character with that name')

  return json
}
