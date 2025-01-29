import { Link, NavLink } from 'react-router';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">            
            <Link 
                className="" 
                to="/"
            >
                Logo
            </Link>

            <div className="">
                <div className="">

                    <NavLink 
                        className="" 
                        to="/marvel"
                    >
                        Pokemon
                    </NavLink>
                </div>
            </div>

            <div className="">
                <ul className="">
                    <NavLink 
                        className="" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
