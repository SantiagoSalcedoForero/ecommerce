import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className='flex justify-between items-center mb-3 p-[10px] bg-[#E4E2DD] rounded-lg border-black'>
            <p>
                <span>01.02.24</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
            
        </div>
    )
}

export default OrdersCard