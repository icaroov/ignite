import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { Product, Stock } from '../types'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const CART_KEY = '@RocketShoes:cart'

  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem(CART_KEY)

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  const saveCart = (products: Product[]) => {
    setCart(products)
    localStorage.setItem(CART_KEY, JSON.stringify(products))
  }

  const addProduct = async (productId: number) => {
    try {
      const { data: stock } = await api.get<Stock>(`/stock/${productId}`)

      let product = cart.find((product) => product.id === productId)

      if (product) {
        const isInStock = product.amount < stock.amount

        if (isInStock) {
          product.amount++
          saveCart([...cart])
        } else {
          toast.error('Quantidade solicitada fora de estoque')
        }
      } else {
        const { data: product } = await api.get<Product>(
          `/products/${productId}`
        )

        if (stock.amount < 1) {
          toast.error('Quantidade solicitada fora de estoque')
        } else {
          product.amount = 1

          const newCart = [...cart, product]
          saveCart(newCart)
        }
      }
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.find((product) => product.id === productId)

      if (productExists) {
        const newCart = cart.filter((product) => product.id !== productId)

        saveCart(newCart)
      } else {
        toast.error('Erro na remoção do produto')
      }
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return
      }

      let product = cart.find((product) => product.id === productId)

      if (product) {
        const { data: productStock } = await api.get<Stock>(
          `/stock/${productId}`
        )

        if (amount <= productStock.amount) {
          product.amount = amount
          saveCart([...cart])
        } else {
          toast.error('Quantidade solicitada fora de estoque')
        }
      } else {
        toast.error('Erro na alteração de quantidade do produto')
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
