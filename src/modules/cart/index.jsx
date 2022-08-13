import { useRecoilValue } from 'recoil'
import { cartState } from 'state'
import './style.css'

const Cart = () => {
  const carts = useRecoilValue(cartState)
  return (
    <div className="section">
      <h1>Cart</h1>
      {carts.length ? (
        <ul>
          {carts.map((cart) => (
            <li key={cart.id}>
              <span>{cart.title}</span>
              <span>{cart.quantity}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </div>
  )
}

export default Cart
