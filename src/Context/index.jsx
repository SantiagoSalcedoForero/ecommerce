import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Card Increment quantity    
    const [count, setCount] = useState(0)

    // Product Detail open - close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail Show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Product Checkout Side Menu open - close
    const [isChecoutSideMenuOpen, setIsChecoutSideMenuOpen] = useState(false)
    const openChecoutSideMenu = () => setIsChecoutSideMenuOpen(true)
    const closeChecoutSideMenu = () => setIsChecoutSideMenuOpen(false)

    // Shopping Cart Order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isChecoutSideMenuOpen,
            openChecoutSideMenu,
            closeChecoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}