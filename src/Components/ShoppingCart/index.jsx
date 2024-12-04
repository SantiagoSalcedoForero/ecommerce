import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext)

    const openChecoutSideMenu = () => {
        context.openCheckout()
        context.closeProductDetail()
    }

    return (
        <div className='relative flex gap-0.5 items-center' onClick={() => openChecoutSideMenu()}>
            <ShoppingBagIcon className='w-6 h-6 fill-none stroke-white cursor-pointer' />
            <div className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-white w-4 h-4 text-xs text-[#DB4A2B]'>
                {context.cartProducts.length}
            </div>
        </div>
    )
}

export default ShoppingCart