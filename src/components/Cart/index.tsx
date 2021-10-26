import { BiCart } from 'react-icons/bi'

import './style.scss'
type Props = {
  items: number
  handleClick: (input: React.BaseSyntheticEvent) => void
}
export default function Cart({ items, handleClick }: Props) {
  return (
    <div className="cart__wrapper">
      <BiCart onClick={handleClick} size="35" />
      <span> {items} </span>
    </div>
  )
}
