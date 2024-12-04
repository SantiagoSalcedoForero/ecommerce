import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className='flex justify-between items-center w-[300px] mb-4 p-[20px] border border-black rounded-lg'>
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.02.24</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <span className='font-medium text-2xl'>{
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 2,
                            }).format(totalPrice)
                        }
                    </span>
                    <ChevronRightIcon
                        className='h-6 w-6 text-black cursor-pointer'
                    >
                    </ChevronRightIcon>
                </div>
            </p>
            
        </div>
    )
}

export default OrdersCard