import { BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import './style.scss'
type Props = {
  items: number
  handleClick: (input: React.BaseSyntheticEvent) => void
}
export default function Cart({ items, handleClick }: Props) {
  return (
    <div className="cart__wrapper">
      <Link to="/countries">
        <BiCart onClick={handleClick} size="35" />
      </Link>
      <span> {items} </span>
    </div>
  )
}
