import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
       const filteredProducts = context.cartProducts.filter(product => product.id != id)
       context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside 
            className={`${context.isChecoutSideMenuOpen? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div 
                    className='cursor-pointer'
                    onClick={() => context.closeChecoutSideMenu()}
                >
                    <XMarkIcon className='size-6 text-black'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-auto flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 2,
                            }).format(totalPrice(context.cartProducts))
                        }
                    </span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-[#DB4A2B] text-white w-full h-11 mb-6 rounded-lg' onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu