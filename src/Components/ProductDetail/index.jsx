import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
            className={`${context.isProductDetailOpen? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black bg-white overflow-auto`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div 
                    className='cursor-pointer'
                    onClick={() => context.closeProductDetail()}
                >
                    <XMarkIcon className='size-6 text-black'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6 flex justify-center'>
                <img 
                    className='aspect-square w-[80%] object-contain rounded-lg' 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail