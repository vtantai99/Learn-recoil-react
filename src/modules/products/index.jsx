import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, productsState } from 'state'
import { addToCart } from 'state/cartState'
import './style.css'

const Products = () => {
  const products = useRecoilValue(productsState)
  const [carts, setCarts] = useRecoilState(cartState)

  const handleAddCart = (product) => {
    const newCart = addToCart(carts, product)
    setCarts(newCart)
  }
  return (
    <div className="section">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>
              <span>{product.title}:</span>
              <span>{product.price}</span>
            </p>
            <button onClick={() => handleAddCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
