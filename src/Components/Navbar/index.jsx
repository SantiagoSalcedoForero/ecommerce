import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-3 px-8 text-sm from-neutral-500 bg-[#DB4A2B] text-[#E4E2DD] font-medium'>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink to='/' >
                        <img src='https://lxcfppmxdskkdcuqwrwx.supabase.co/storage/v1/object/public/imagenes/otros/Logo%20ecommerce.png?t=2024-11-30T13%3A31%3A26.302Z' className='w-[90px] h-auto'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/all'
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive }) => isActive ? activeStyle : undefined}  
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics' 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures' 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys' 
                        className={({ isActive }) => isActive ? activeStyle : undefined} 
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others' 
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
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar