import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-3 px-8 text-sm from-neutral-500 bg-[#DB4A2B] text-[#E4E2DD] font-medium'>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory()} 
                    >
                        <img src='https://lxcfppmxdskkdcuqwrwx.supabase.co/storage/v1/object/public/imagenes/otros/Logo%20ecommerce.png?t=2024-11-30T13%3A31%3A26.302Z' className='w-[90px] h-auto'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/all'
                        onClick={() => context.setSearchByCategory()} 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/men'
                        onClick={() => context.setSearchByCategory("men's clothing")} 
                        className={({ isActive }) => isActive ? activeStyle : undefined}  
                    >
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/women' 
                        onClick={() => context.setSearchByCategory("women's clothing")} 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics' 
                        onClick={() => context.setSearchByCategory('electronics')} 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')} 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')} 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='font-light'>
                    santiago.salcedo@grid.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}                    
                    >
                        Sign-In
                    </NavLink>
                </li>
                <li className='flex items-center justify-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-[#E4E2DD]'></ShoppingBagIcon>
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar