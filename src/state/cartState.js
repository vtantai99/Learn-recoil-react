import { atom } from 'recoil'

export const cartState = atom({
  key: 'cart',
  default: []
})

export const addToCart = (carts, product) => {
  const newCart = [...carts]

  const foundIndex = newCart.findIndex((cart) => cart.id === product.id)
  console.log('Boy 🚀 ~> foundIndex', foundIndex)

  // Increase quantity if existing
  if (foundIndex !== -1) {
    newCart[foundIndex] = {
      ...newCart[foundIndex],
      quantity: newCart[foundIndex].quantity + 1
    }
    return newCart
  }
  
  // Add new item 
  newCart.push({
    ...product,
    quantity: 1
  })
  return newCart
}