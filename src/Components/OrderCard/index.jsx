import { XMarkIcon } from '@heroicons/react/24/solid'
import { render } from 'react-dom'

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='size-4 text-red-500 cursor-pointer'></XMarkIcon>
    }
    
    return (
        <div className='flex justify-between items-center mb-3 p-[10px] bg-[#E4E2DD] rounded-lg'>
            <div className='flex items-center gap-2'>
                <figure className='min-w-20 h-20 flex flex-col'>
                    <img className='w-full h-full rounded-lg object-contain' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                {renderXMarkIcon}
            </div>
            
        </div>
    )
}

export default OrderCard