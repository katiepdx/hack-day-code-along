import React from 'react'
import { Link } from 'react-router-dom'
import style from './CharacterItem.module.css'

// interface props
interface Props {
  id: number;
  name: string;
  imageUrl: string;
}

// React.FC tells TS that this is a functional component
const CharacterItem: React.FC<Props> = ({ id, imageUrl, name, }) => {
  return (
    <div>
      <Link
        to={`/detail/${id}`}
        className={style.link}
      >
        <figure>
          <img src={imageUrl} alt={name} className={style.img} />
        </figure>
      </Link>
    </div>
  )
}

export default CharacterItem
