import { atom } from 'recoil'

export const productsState = atom({
  key: 'products',
  default: [
    { id: 1, price: 150000, title: 'Áo thun nam' },
    { id: 2, price: 250000, title: 'Áo sơ mi nữ' },
    { id: 3, price: 300000, title: 'Áo khoắc thời trang' }
  ]
})
